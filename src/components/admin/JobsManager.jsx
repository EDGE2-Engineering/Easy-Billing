
import React, { useState, useEffect } from 'react';
import { Search, Trash2, Edit, ExternalLink, FileText, Loader2, AlertCircle, ArrowUpDown, SortAsc, SortDesc, Calendar, Briefcase, Plus, X, Save, ArrowLeft, CheckCircle2, Package } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { MermaidDiagram } from '@lightenna/react-mermaid-diagram';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { sendTelegramNotification } from '@/lib/notifier';
import { format } from 'date-fns';
import { WORKFLOW_STEPS, WORKFLOW_STATUS_OPTIONS, JOB_CATEGORIES } from '@/data/config';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import MaterialInwardManager from './MaterialInwardManager';

const JobsManager = () => {
    const JobWorkflowVisualizer = ({ currentStatus }) => {
        const currentIndex = WORKFLOW_STEPS.findIndex(s => s.id === currentStatus);
        
        const generateMermaidCode = () => {
            let code = `%%{init: { "theme": "base", "themeVariables": { "fontSize": "13px", "fontFamily": "Inter" }, "flowchart": { "useMaxWidth": true, "htmlLabels": true, "curve": "basis" } } }%%\n`;
            code += 'graph LR\n';
            WORKFLOW_STEPS.forEach((step, index) => {
                const id = `s${index}`;
                // Wrapping text for better fit
                const label = step.label.replace(' ', '<br/>');
                code += `    ${id}("${label}")\n`;
                if (index > 0) {
                    code += `    s${index-1} --> s${index}\n`;
                }
                
                if (index < currentIndex) {
                    code += `    style ${id} fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#166534\n`;
                } else if (index === currentIndex) {
                    code += `    style ${id} fill:#fef3c7,stroke:#d97706,stroke-width:4px,color:#92400e\n`;
                } else {
                    code += `    style ${id} fill:#fff7ed,stroke:#fdba74,stroke-width:1px,color:#9a3412\n`;
                }
            });
            return code;
        };

        return (
            <div className="w-full bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm overflow-hidden min-h-[220px]">
                <div className="w-full flex items-center justify-center overflow-x-auto custom-scrollbar pb-4">
                    <div className="min-w-[1200px] w-full px-4">
                        <MermaidDiagram>
                            {generateMermaidCode()}
                        </MermaidDiagram>
                    </div>
                </div>
                <div className="mt-2 flex justify-center gap-4 text-[10px] font-medium uppercase tracking-wider text-gray-400">
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /> Completed</div>
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-400" /> Current Step</div>
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-200" /> Pending</div>
                </div>
            </div>
        );
    };

    const [records, setRecords] = useState([]);
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterClient, setFilterClient] = useState('all');
    const [deleteConfirmation, setDeleteConfirmation] = useState({ isOpen: false, recordId: null, jobId: '' });
    const [sortField, setSortField] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const { toast } = useToast();
    const navigate = useNavigate();
    const { user, isStandard, isAdmin } = useAuth();

    const [editingRecord, setEditingRecord] = useState(null);
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [linkedDocs, setLinkedDocs] = useState([]);
    const [linkedInwards, setLinkedInwards] = useState([]);
    const [loadingDocs, setLoadingDocs] = useState(false);
    const [loadingInwards, setLoadingInwards] = useState(false);
    const [activeInwardJobId, setActiveInwardJobId] = useState(null);

    const fetchClients = async () => {
        try {
            const { data, error } = await supabase
                .from('clients')
                .select('id, client_name')
                .order('client_name');
            if (error) throw error;
            setClients(data || []);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const fetchRecords = async () => {
        setLoading(true);
        try {
            let query = supabase
                .from('jobs')
                .select(`
                  *,
                  clients(client_name),
                  users:created_by(full_name)
                `);

            if (isStandard()) {
                query = query.eq('created_by', user.id);
            }

            const { data, error } = await query.order('created_at', { ascending: false });

            if (error) throw error;
            setRecords(data || []);
        } catch (error) {
            console.error('Error fetching jobs:', error);
            toast({
                title: "Error",
                description: "Failed to load jobs. " + error.message,
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecords();
        fetchClients();
    }, []);

    const handleAddNew = () => {
        setEditingRecord({
            project_name: '',
            project_address: '',
            client_id: '',
            job_categories: [],
            status: 'JOB_CREATED'
        });
        setIsAddingNew(true);
    };

    const fetchLinkedDocs = async (jobId) => {
        setLoadingDocs(true);
        setLoadingInwards(true);
        try {
            // Fetch Quotations/Invoices
            const { data: docs, error: docsError } = await supabase
                .from('accounts')
                .select('*, users(full_name)')
                .eq('job_id', jobId)
                .order('created_at', { ascending: false });
            if (docsError) throw docsError;
            setLinkedDocs(docs || []);

            // Fetch Material Inwards
            const { data: inwards, error: inwardsError } = await supabase
                .from('material_inward_register')
                .select('*, material_samples(*, collection_centers(name))')
                .eq('job_id', jobId)
                .order('created_at', { ascending: false });
            if (inwardsError) throw inwardsError;
            setLinkedInwards(inwards || []);
        } catch (error) {
            console.error('Error fetching linked records:', error);
        } finally {
            setLoadingDocs(false);
            setLoadingInwards(false);
        }
    };

    const handleEdit = (record) => {
        setEditingRecord({ ...record });
        setIsAddingNew(false);
        fetchLinkedDocs(record.id);
    };

    const handleSave = async () => {
        if (!editingRecord.client_id || !editingRecord.project_name) {
            toast({ title: "Error", description: "Please fill in all required fields", variant: "destructive" });
            return;
        }

        setIsSaving(true);
        try {
            if (isAddingNew) {
                const { data, error } = await supabase
                    .from('jobs')
                    .insert({
                        project_name: editingRecord.project_name,
                        project_address: editingRecord.project_address,
                        client_id: editingRecord.client_id,
                        job_categories: editingRecord.job_categories,
                        status: editingRecord.status,
                        created_by: user.id
                    })
                    .select()
                    .single();

                if (error) throw error;
                
                toast({ title: "Success", description: "Job created successfully!" });
                
                // Telegram Notification
                const clientName = clients.find(c => c.id === editingRecord.client_id)?.client_name || 'Unknown Client';
                const message = `💼 *New Job Created*\n\nJob ID: \`${data.job_id}\`\nProject: \`${editingRecord.project_name}\`\nClient: \`${clientName}\`\nBy: \`${user?.fullName || 'Unknown'}\``;
                sendTelegramNotification(message);
            } else {
                const { error } = await supabase
                    .from('jobs')
                    .update({
                        project_name: editingRecord.project_name,
                        project_address: editingRecord.project_address,
                        client_id: editingRecord.client_id,
                        job_categories: editingRecord.job_categories,
                        status: editingRecord.status,
                        updated_by: user.id,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', editingRecord.id);

                if (error) throw error;
                toast({ title: "Success", description: "Job updated successfully!" });
            }

            setEditingRecord(null);
            setIsAddingNew(false);
            fetchRecords();
        } catch (error) {
            console.error('Error saving job:', error);
            toast({ title: "Error", description: "Failed to save job: " + error.message, variant: "destructive" });
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteClick = (record) => {
        setDeleteConfirmation({
            isOpen: true,
            recordId: record.id,
            jobId: record.job_id
        });
    };

    const confirmDelete = async () => {
        try {
            const { error } = await supabase
                .from('jobs')
                .delete()
                .eq('id', deleteConfirmation.recordId);

            if (error) throw error;

            toast({ title: "Job Deleted", description: "The job has been removed.", variant: "destructive" });
            fetchRecords();
        } catch (error) {
            console.error('Error deleting job:', error);
            toast({ title: "Error", description: "Failed to delete job.", variant: "destructive" });
        } finally {
            setDeleteConfirmation({ isOpen: false, recordId: null, jobId: '' });
        }
    };

    const handleCategoryToggle = (category) => {
        setEditingRecord(prev => {
            const current = prev.job_categories || [];
            if (current.includes(category)) {
                return { ...prev, job_categories: current.filter(c => c !== category) };
            } else {
                return { ...prev, job_categories: [...current, category] };
            }
        });
    };

    const filteredRecords = records.filter(r => {
        const matchesSearch = (r.job_id?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (r.project_name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (r.clients?.client_name?.toLowerCase() || '').includes(searchTerm.toLowerCase());

        if (!matchesSearch) return false;
        if (filterStatus !== 'all' && r.status !== filterStatus) return false;
        if (filterClient !== 'all' && r.clients?.client_name !== filterClient) return false;

        return true;
    });

    const sortedRecords = [...filteredRecords].sort((a, b) => {
        let valA, valB;
        switch (sortField) {
            case 'client':
                valA = (a.clients?.client_name || '').toLowerCase();
                valB = (b.clients?.client_name || '').toLowerCase();
                break;
            case 'status':
                valA = (a.status || '').toLowerCase();
                valB = (b.status || '').toLowerCase();
                break;
            case 'date':
                valA = new Date(a.created_at).getTime();
                valB = new Date(b.created_at).getTime();
                break;
            default:
                return 0;
        }

        if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    const totalPages = Math.ceil(sortedRecords.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedRecords = sortedRecords.slice(startIndex, endIndex);

    const getStatusLabel = (statusId) => {
        return WORKFLOW_STEPS.find(s => s.id === statusId)?.label || statusId;
    };

    if (loading && records.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                <p className="text-gray-500">Loading jobs...</p>
            </div>
        );
    }

    if (activeInwardJobId) {
        return (
            <MaterialInwardManager 
                initialJobId={activeInwardJobId} 
                onClose={() => {
                    setActiveInwardJobId(null);
                    fetchRecords(); // Refresh list to show updated status
                }} 
            />
        );
    }

    return (
        <div className="space-y-4">
            {editingRecord ? (
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm animate-in slide-in-from-right-4 duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="icon" onClick={() => setEditingRecord(null)} className="rounded-full">
                                <ArrowLeft className="w-5 h-5 text-gray-400" />
                            </Button>
                            <h2 className="text-xl font-bold">{isAddingNew ? 'Add New Job' : `Edit Job: ${editingRecord.job_id}`}</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" onClick={() => setEditingRecord(null)} disabled={isSaving}>
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSave}
                                className="bg-primary hover:bg-primary-dark flex items-center text-white"
                                disabled={isSaving}
                            >
                                <Save className="w-4 h-4 mr-2" />
                                {isSaving ? 'Saving...' : 'Save Job'}
                            </Button>
                        </div>
                    </div>

                    {!isAddingNew && <JobWorkflowVisualizer currentStatus={editingRecord.status} />}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="client">Client *</Label>
                                <Select
                                    value={editingRecord.client_id}
                                    onValueChange={(value) => setEditingRecord(prev => ({ ...prev, client_id: value }))}
                                >
                                    <SelectTrigger id="client">
                                        <SelectValue placeholder="Select a client" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {clients.map(client => (
                                            <SelectItem key={client.id} value={client.id}>{client.client_name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="project_name">Project Name *</Label>
                                <Input
                                    id="project_name"
                                    placeholder="Enter project name"
                                    value={editingRecord.project_name}
                                    onChange={(e) => setEditingRecord(prev => ({ ...prev, project_name: e.target.value }))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="project_address">Project Address</Label>
                                <Input
                                    id="project_address"
                                    placeholder="Enter project address"
                                    value={editingRecord.project_address}
                                    onChange={(e) => setEditingRecord(prev => ({ ...prev, project_address: e.target.value }))}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Job Categories</Label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                                    {JOB_CATEGORIES.map(category => (
                                        <div key={category} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`cat-${category}`}
                                                checked={editingRecord.job_categories?.includes(category)}
                                                onCheckedChange={() => handleCategoryToggle(category)}
                                            />
                                            <label htmlFor={`cat-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                {category}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Status</Label>
                                <Select
                                    value={editingRecord.status}
                                    onValueChange={(value) => setEditingRecord(prev => ({ ...prev, status: value }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {WORKFLOW_STEPS.map(step => (
                                            <SelectItem key={step.id} value={step.id}>{step.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {!isAddingNew && (
                        <div className="mt-8 border-t pt-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-gray-400" />
                                    Quotation Raised
                                </h3>
                                {loadingDocs ? (
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Loading documents...</span>
                                    </div>
                                ) : linkedDocs.length > 0 ? (
                                    <div className="bg-gray-50/50 rounded-xl border border-gray-100 overflow-hidden shadow-inner">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-100/50 border-b">
                                                <tr>
                                                    {/* <th className="text-left py-3 px-4 font-semibold text-gray-600">Doc Type</th> */}
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Quotation Number</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Raised On</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Raised By</th>
                                                    <th className="text-right py-3 px-4 font-semibold text-gray-600">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {linkedDocs.map((doc) => (
                                                    <tr key={doc.id} className="border-b border-gray-100 last:border-0 hover:bg-white/50 transition-colors">
                                                        {/* <td className="py-3 px-4 font-medium">{doc.document_type}</td> */}
                                                        <td className="py-3 px-4 font-mono text-primary">{doc.quote_number}</td>
                                                        <td className="py-3 px-4 text-gray-500">{format(new Date(doc.created_at), 'dd MMM yyyy')}</td>
                                                        <td className="py-3 px-4 text-gray-500">{doc.users?.full_name || 'System'}</td>
                                                        <td className="py-3 px-4 text-right">
                                                            <Button 
                                                                variant="ghost" 
                                                                size="sm" 
                                                                className="text-primary hover:bg-primary/5 h-8"
                                                                onClick={() => navigate(`/doc/${doc.id}`)}
                                                            >
                                                                <ExternalLink className="w-4 h-4 mr-1.5" />
                                                                View
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className="text-gray-400 text-sm italic">No documents linked to this job yet.</p>
                                )}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Package className="w-5 h-5 text-gray-400" />
                                    Materials Received
                                </h3>
                                {loadingInwards ? (
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Loading records...</span>
                                    </div>
                                ) : linkedInwards.length > 0 ? (
                                    <div className="bg-gray-50/50 rounded-xl border border-gray-100 overflow-hidden shadow-inner">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-100/50 border-b">
                                                <tr>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Job Order No</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Sample Code</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Description</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600 whitespace-nowrap">Qty</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Collection At</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Received On</th>
                                                    <th className="text-right py-3 px-4 font-semibold text-gray-600">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {linkedInwards.flatMap(inward => 
                                                    (inward.material_samples || []).map(sample => ({
                                                        ...sample,
                                                        inward_jo: inward.job_order_no,
                                                        inward_status: inward.status
                                                    }))
                                                ).map((sample) => (
                                                    <tr key={sample.id} className="border-b border-gray-100 last:border-0 hover:bg-white/50 transition-colors">
                                                        <td className="py-3 px-4 font-bold font-mono text-xs text-primary">{sample.inward_jo}</td>
                                                        <td className="py-3 px-4 font-semibold">{sample.sample_code}</td>
                                                        <td className="py-3 px-4 text-gray-600 max-w-[200px] truncate" title={sample.sample_description}>
                                                            {sample.sample_description || '-'}
                                                        </td>
                                                        <td className="py-3 px-4 font-medium">{sample.quantity}</td>
                                                        <td className="py-3 px-4">
                                                            <span className="text-xs text-gray-500">
                                                                {sample.collection_centers?.name || '-'}
                                                            </span>
                                                        </td>
                                                        <td className="py-3 px-4">
                                                            <Badge variant="outline" className="text-[10px] h-5 border-primary/20 text-primary uppercase">
                                                                {sample.inward_status}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-3 px-4 text-gray-500 whitespace-nowrap">
                                                            {format(new Date(sample.received_date), 'dd MMM yyyy')}
                                                        </td>
                                                        <td className="py-3 px-4 text-right">
                                                            <Button 
                                                                variant="ghost" 
                                                                size="sm" 
                                                                className="text-primary hover:bg-primary/5 h-8 w-8 p-0"
                                                                onClick={() => {
                                                                    toast({ title: "Sample Details", description: `Code: ${sample.sample_code}\nDesc: ${sample.sample_description}` });
                                                                }}
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className="text-gray-400 text-sm italic">No material inward records linked to this job yet.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    placeholder="Search by Job ID, Project or Client..."
                                    className="pl-12 h-12 text-sm bg-gray-50/30 border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-all shadow-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Button
                                onClick={handleAddNew}
                                className="bg-primary hover:bg-primary-dark text-white h-12 px-6 rounded-xl shadow-sm text-sm font-semibold whitespace-nowrap"
                            >
                                <Plus className="w-4 h-4 mr-2" /> New Job
                            </Button>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <Select value={filterStatus} onValueChange={setFilterStatus}>
                                <SelectTrigger className="w-48 h-10 text-sm bg-gray-50/50 border-gray-200 rounded-lg">
                                    <SelectValue placeholder="Filter by Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Statuses</SelectItem>
                                    {WORKFLOW_STEPS.map(step => (
                                        <SelectItem key={step.id} value={step.id}>{step.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            
                            <div className="flex items-center gap-2 px-4 h-10 bg-primary/5 rounded-lg border border-primary/10 whitespace-nowrap">
                                <Briefcase className="w-4 h-4 text-primary/60" />
                                <span className="text-sm font-semibold text-gray-700">
                                    {sortedRecords.length} <span className="text-gray-400 font-normal">Jobs</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600">Job ID</th>
                                        <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600">Client</th>
                                        <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600">Project</th>
                                        <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600">Categories</th>
                                        <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600">Status</th>
                                        <th className="text-left py-4 px-6 font-semibold text-sm text-gray-600">Created At</th>
                                        <th className="text-right py-4 px-6 font-semibold text-sm text-gray-600">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedRecords.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="py-12 text-center text-gray-500">
                                                <div className="flex flex-col items-center gap-2">
                                                    <Briefcase className="w-8 h-8 text-gray-200" />
                                                    <p>No jobs found.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        paginatedRecords.map((record) => (
                                            <tr key={record.id} className="border-b hover:bg-gray-50/50 transition-colors">
                                                <td className="py-4 px-6">
                                                    <span className="font-bold font-mono text-primary bg-primary/5 px-2 py-1 rounded text-sm">{record.job_id}</span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="font-semibold text-gray-900">{record.clients?.client_name}</div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="text-sm text-gray-600">{record.project_name}</div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    {record.job_categories?.length > 0 && (
                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                            {record.job_categories.map(cat => (
                                                                <Badge key={cat} variant="secondary" className="text-[10px] px-1.5 py-0 h-4">{cat}</Badge>
                                                            ))}
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="py-4 px-6">
                                                    <Badge className={`${
                                                        record.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                                                        'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800'
                                                    } text-xs font-medium border-none`}>
                                                        {record.status === 'COMPLETED' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                                                        {getStatusLabel(record.status)}
                                                    </Badge>
                                                </td>
                                                <td className="py-4 px-6 text-sm text-gray-500">
                                                    {format(new Date(record.created_at), 'dd MMM yyyy')}
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    <div className="flex justify-end items-center gap-2">
                                                        {WORKFLOW_STEPS.find(s => s.id === record.status)?.action && (
                                                            <Button 
                                                                variant="outline" 
                                                                size="sm" 
                                                                className="h-8 text-[10px] px-3 border-primary/20 text-primary hover:bg-primary/5 font-semibold"
                                                                onClick={async () => {
                                                                    const step = WORKFLOW_STEPS.find(s => s.id === record.status);
                                                                    if (step.id === 'JOB_CREATED') {
                                                                        navigate(`/doc/new?type=Quotation&jobId=${record.id}`);
                                                                    } else if (step.id === 'QUOTATION_CREATED') {
                                                                        setActiveInwardJobId(record.id);
                                                                    } else if (step.id === 'MATERIAL_RECEIVED' || step.id === 'SENT_TO_TESTING_DEPARTMENT') {
                                                                        // Auto-advance simple steps for now
                                                                        const nextStatusMap = {
                                                                            'MATERIAL_RECEIVED': 'SENT_TO_TESTING_DEPARTMENT',
                                                                            'SENT_TO_TESTING_DEPARTMENT': 'UNDER_TESTING'
                                                                        };
                                                                        const nextStatus = nextStatusMap[step.id];
                                                                        if (nextStatus) {
                                                                            try {
                                                                                await supabase
                                                                                    .from('jobs')
                                                                                    .update({ status: nextStatus })
                                                                                    .eq('id', record.id);
                                                                                toast({ title: "Status Updated", description: `Job moved to ${nextStatus.replace(/_/g, ' ')}` });
                                                                                fetchRecords();
                                                                            } catch (err) {
                                                                                console.error('Error updating status:', err);
                                                                            }
                                                                        }
                                                                    } else {
                                                                        toast({ title: "Next Step", description: `Action: ${step.action}` });
                                                                    }
                                                                }}
                                                            >
                                                                {WORKFLOW_STEPS.find(s => s.id === record.status).action}
                                                            </Button>
                                                        )}
                                                        <Button variant="ghost" size="icon" onClick={() => handleEdit(record)} className="text-blue-600 hover:bg-blue-50 h-8 w-8">
                                                            <Edit className="w-4 h-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(record)} className="text-red-600 hover:bg-red-50 h-8 w-8">
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            <AlertDialog open={deleteConfirmation.isOpen} onOpenChange={(open) => setDeleteConfirmation(prev => ({ ...prev, isOpen: open }))}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-red-600">Delete Job?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete job <span className="font-bold">{deleteConfirmation.jobId}</span>? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default JobsManager;
