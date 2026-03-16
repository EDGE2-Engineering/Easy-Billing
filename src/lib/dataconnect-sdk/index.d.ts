import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AppSetting_Key {
  id: string;
  __typename?: 'AppSetting_Key';
}

export interface ClientServicePrice_Key {
  id: string;
  __typename?: 'ClientServicePrice_Key';
}

export interface ClientTestPrice_Key {
  id: string;
  __typename?: 'ClientTestPrice_Key';
}

export interface Client_Key {
  id: string;
  __typename?: 'Client_Key';
}

export interface DeleteAppSettingData {
  appSetting_delete?: AppSetting_Key | null;
}

export interface DeleteAppSettingVariables {
  id: string;
}

export interface DeleteClientData {
  client_delete?: Client_Key | null;
}

export interface DeleteClientServicePriceData {
  clientServicePrice_delete?: ClientServicePrice_Key | null;
}

export interface DeleteClientServicePriceVariables {
  id: string;
}

export interface DeleteClientTestPriceData {
  clientTestPrice_delete?: ClientTestPrice_Key | null;
}

export interface DeleteClientTestPriceVariables {
  id: string;
}

export interface DeleteClientVariables {
  id: string;
}

export interface DeleteHsnsacCodeData {
  hSNSACCode_delete?: HSNSACCode_Key | null;
}

export interface DeleteHsnsacCodeVariables {
  id: string;
}

export interface DeleteJobData {
  job_delete?: Job_Key | null;
}

export interface DeleteJobVariables {
  id: string;
}

export interface DeleteServiceData {
  service_delete?: Service_Key | null;
}

export interface DeleteServiceUnitTypeData {
  serviceUnitType_delete?: ServiceUnitType_Key | null;
}

export interface DeleteServiceUnitTypeVariables {
  id: string;
}

export interface DeleteServiceVariables {
  id: string;
}

export interface DeleteTechnicalData {
  technical_delete?: Technical_Key | null;
}

export interface DeleteTechnicalVariables {
  id: string;
}

export interface DeleteTermAndConditionData {
  termAndCondition_delete?: TermAndCondition_Key | null;
}

export interface DeleteTermAndConditionVariables {
  id: string;
}

export interface DeleteTestData {
  test_delete?: Test_Key | null;
}

export interface DeleteTestVariables {
  id: string;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface DeleteUserVariables {
  id: string;
}

export interface GetClientData {
  client?: {
    id: string;
    clientName: string;
    clientAddress?: string | null;
    contacts?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & Client_Key;
}

export interface GetClientVariables {
  id: string;
}

export interface GetJobData {
  job?: {
    id: string;
    type: string;
    status: string;
    jobOrderNo?: string | null;
    clientId?: string | null;
    clientName?: string | null;
    projectName?: string | null;
    poWoNumber?: string | null;
    materialInward?: unknown | null;
    labTestResults?: unknown | null;
    chemicalAnalysis?: unknown | null;
    grainSizeAnalysis?: unknown | null;
    content?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
  } & Job_Key;
}

export interface GetJobVariables {
  id: string;
}

export interface GetServiceData {
  service?: {
    id: string;
    serviceType: string;
    price?: number | null;
    unit?: string | null;
    qty?: number | null;
    methodOfSampling?: string | null;
    numBhs?: number | null;
    measure?: string | null;
    hsnCode?: string | null;
    tcList?: unknown | null;
    techList?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & Service_Key;
}

export interface GetServiceVariables {
  id: string;
}

export interface GetTestData {
  test?: {
    id: string;
    testType: string;
    materials?: string | null;
    group?: string | null;
    testMethodSpecification?: string | null;
    numDays?: number | null;
    price?: number | null;
    hsnCode?: string | null;
    tcList?: unknown | null;
    techList?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & Test_Key;
}

export interface GetTestVariables {
  id: string;
}

export interface GetUserData {
  user?: {
    id: string;
    username: string;
    fullName?: string | null;
    role?: string | null;
    department?: string | null;
    isActive?: boolean | null;
    type?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    createdBy?: string | null;
  } & User_Key;
}

export interface GetUserVariables {
  id: string;
}

export interface HSNSACCode_Key {
  id: string;
  __typename?: 'HSNSACCode_Key';
}

export interface Job_Key {
  id: string;
  __typename?: 'Job_Key';
}

export interface ListAppSettingsData {
  appSettings: ({
    id: string;
    key: string;
    value?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & AppSetting_Key)[];
}

export interface ListClientServicePricesData {
  clientServicePrices: ({
    id: string;
    clientId: string;
    serviceId: string;
    price: number;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & ClientServicePrice_Key)[];
}

export interface ListClientTestPricesData {
  clientTestPrices: ({
    id: string;
    clientId: string;
    testId: string;
    price: number;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & ClientTestPrice_Key)[];
}

export interface ListClientsData {
  clients: ({
    id: string;
    clientName: string;
    clientAddress?: string | null;
    contacts?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & Client_Key)[];
}

export interface ListHsnsacCodesData {
  hSNSACCodes: ({
    id: string;
    code: string;
    description?: string | null;
    taxRate?: number | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & HSNSACCode_Key)[];
}

export interface ListJobsData {
  jobs: ({
    id: string;
    type: string;
    status: string;
    jobOrderNo?: string | null;
    clientId?: string | null;
    clientName?: string | null;
    projectName?: string | null;
    poWoNumber?: string | null;
    materialInward?: unknown | null;
    labTestResults?: unknown | null;
    chemicalAnalysis?: unknown | null;
    grainSizeAnalysis?: unknown | null;
    content?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
  } & Job_Key)[];
}

export interface ListJobsVariables {
  type?: string | null;
}

export interface ListServiceUnitTypesData {
  serviceUnitTypes: ({
    id: string;
    unit: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & ServiceUnitType_Key)[];
}

export interface ListServicesData {
  services: ({
    id: string;
    serviceType: string;
    price?: number | null;
    unit?: string | null;
    qty?: number | null;
    methodOfSampling?: string | null;
    numBhs?: number | null;
    measure?: string | null;
    hsnCode?: string | null;
    tcList?: unknown | null;
    techList?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & Service_Key)[];
}

export interface ListTechnicalsData {
  technicals: ({
    id: string;
    name: string;
    designation?: string | null;
    department?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & Technical_Key)[];
}

export interface ListTermsAndConditionsData {
  termAndConditions: ({
    id: string;
    content: string;
    department?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & TermAndCondition_Key)[];
}

export interface ListTestsData {
  tests: ({
    id: string;
    testType: string;
    materials?: string | null;
    group?: string | null;
    testMethodSpecification?: string | null;
    numDays?: number | null;
    price?: number | null;
    hsnCode?: string | null;
    tcList?: unknown | null;
    techList?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & Test_Key)[];
}

export interface ListUsersData {
  users: ({
    id: string;
    username: string;
    fullName?: string | null;
    role?: string | null;
    department?: string | null;
    isActive?: boolean | null;
    type?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    createdBy?: string | null;
  } & User_Key)[];
}

export interface ServiceUnitType_Key {
  id: string;
  __typename?: 'ServiceUnitType_Key';
}

export interface Service_Key {
  id: string;
  __typename?: 'Service_Key';
}

export interface Technical_Key {
  id: string;
  __typename?: 'Technical_Key';
}

export interface TermAndCondition_Key {
  id: string;
  __typename?: 'TermAndCondition_Key';
}

export interface Test_Key {
  id: string;
  __typename?: 'Test_Key';
}

export interface UpsertAppSettingData {
  appSetting_upsert: AppSetting_Key;
}

export interface UpsertAppSettingVariables {
  id: string;
  key?: string | null;
  value?: unknown | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertClientData {
  client_upsert: Client_Key;
}

export interface UpsertClientServicePriceData {
  clientServicePrice_upsert: ClientServicePrice_Key;
}

export interface UpsertClientServicePriceVariables {
  id: string;
  clientId: string;
  serviceId: string;
  price: number;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertClientTestPriceData {
  clientTestPrice_upsert: ClientTestPrice_Key;
}

export interface UpsertClientTestPriceVariables {
  id: string;
  clientId: string;
  testId: string;
  price: number;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertClientVariables {
  id: string;
  clientName?: string | null;
  clientAddress?: string | null;
  contacts?: unknown | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertHsnsacCodeData {
  hSNSACCode_upsert: HSNSACCode_Key;
}

export interface UpsertHsnsacCodeVariables {
  id: string;
  code?: string | null;
  description?: string | null;
  taxRate?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertJobData {
  job_upsert: Job_Key;
}

export interface UpsertJobVariables {
  id: string;
  type?: string | null;
  status?: string | null;
  jobOrderNo?: string | null;
  clientId?: string | null;
  clientName?: string | null;
  projectName?: string | null;
  poWoNumber?: string | null;
  materialInward?: unknown | null;
  labTestResults?: unknown | null;
  chemicalAnalysis?: unknown | null;
  grainSizeAnalysis?: unknown | null;
  content?: unknown | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
}

export interface UpsertServiceData {
  service_upsert: Service_Key;
}

export interface UpsertServiceUnitTypeData {
  serviceUnitType_upsert: ServiceUnitType_Key;
}

export interface UpsertServiceUnitTypeVariables {
  id: string;
  unit?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertServiceVariables {
  id: string;
  serviceType?: string | null;
  price?: number | null;
  unit?: string | null;
  qty?: number | null;
  methodOfSampling?: string | null;
  numBhs?: number | null;
  measure?: string | null;
  hsnCode?: string | null;
  tcList?: unknown | null;
  techList?: unknown | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertTechnicalData {
  technical_upsert: Technical_Key;
}

export interface UpsertTechnicalVariables {
  id: string;
  name?: string | null;
  designation?: string | null;
  department?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertTermAndConditionData {
  termAndCondition_upsert: TermAndCondition_Key;
}

export interface UpsertTermAndConditionVariables {
  id: string;
  content?: string | null;
  department?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertTestData {
  test_upsert: Test_Key;
}

export interface UpsertTestVariables {
  id: string;
  testType?: string | null;
  materials?: string | null;
  group?: string | null;
  testMethodSpecification?: string | null;
  numDays?: number | null;
  price?: number | null;
  hsnCode?: string | null;
  tcList?: unknown | null;
  techList?: unknown | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface UpsertUserData {
  user_upsert: User_Key;
}

export interface UpsertUserVariables {
  id: string;
  username?: string | null;
  fullName?: string | null;
  role?: string | null;
  department?: string | null;
  isActive?: boolean | null;
  type?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  createdBy?: string | null;
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

interface UpsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  operationName: string;
}
export const upsertUserRef: UpsertUserRef;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;
export function deleteUser(dc: DataConnect, vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface UpsertClientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertClientVariables): MutationRef<UpsertClientData, UpsertClientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertClientVariables): MutationRef<UpsertClientData, UpsertClientVariables>;
  operationName: string;
}
export const upsertClientRef: UpsertClientRef;

export function upsertClient(vars: UpsertClientVariables): MutationPromise<UpsertClientData, UpsertClientVariables>;
export function upsertClient(dc: DataConnect, vars: UpsertClientVariables): MutationPromise<UpsertClientData, UpsertClientVariables>;

interface DeleteClientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteClientVariables): MutationRef<DeleteClientData, DeleteClientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteClientVariables): MutationRef<DeleteClientData, DeleteClientVariables>;
  operationName: string;
}
export const deleteClientRef: DeleteClientRef;

export function deleteClient(vars: DeleteClientVariables): MutationPromise<DeleteClientData, DeleteClientVariables>;
export function deleteClient(dc: DataConnect, vars: DeleteClientVariables): MutationPromise<DeleteClientData, DeleteClientVariables>;

interface UpsertServiceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertServiceVariables): MutationRef<UpsertServiceData, UpsertServiceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertServiceVariables): MutationRef<UpsertServiceData, UpsertServiceVariables>;
  operationName: string;
}
export const upsertServiceRef: UpsertServiceRef;

export function upsertService(vars: UpsertServiceVariables): MutationPromise<UpsertServiceData, UpsertServiceVariables>;
export function upsertService(dc: DataConnect, vars: UpsertServiceVariables): MutationPromise<UpsertServiceData, UpsertServiceVariables>;

interface DeleteServiceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteServiceVariables): MutationRef<DeleteServiceData, DeleteServiceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteServiceVariables): MutationRef<DeleteServiceData, DeleteServiceVariables>;
  operationName: string;
}
export const deleteServiceRef: DeleteServiceRef;

export function deleteService(vars: DeleteServiceVariables): MutationPromise<DeleteServiceData, DeleteServiceVariables>;
export function deleteService(dc: DataConnect, vars: DeleteServiceVariables): MutationPromise<DeleteServiceData, DeleteServiceVariables>;

interface UpsertTestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertTestVariables): MutationRef<UpsertTestData, UpsertTestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertTestVariables): MutationRef<UpsertTestData, UpsertTestVariables>;
  operationName: string;
}
export const upsertTestRef: UpsertTestRef;

export function upsertTest(vars: UpsertTestVariables): MutationPromise<UpsertTestData, UpsertTestVariables>;
export function upsertTest(dc: DataConnect, vars: UpsertTestVariables): MutationPromise<UpsertTestData, UpsertTestVariables>;

interface DeleteTestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTestVariables): MutationRef<DeleteTestData, DeleteTestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTestVariables): MutationRef<DeleteTestData, DeleteTestVariables>;
  operationName: string;
}
export const deleteTestRef: DeleteTestRef;

export function deleteTest(vars: DeleteTestVariables): MutationPromise<DeleteTestData, DeleteTestVariables>;
export function deleteTest(dc: DataConnect, vars: DeleteTestVariables): MutationPromise<DeleteTestData, DeleteTestVariables>;

interface UpsertJobRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertJobVariables): MutationRef<UpsertJobData, UpsertJobVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertJobVariables): MutationRef<UpsertJobData, UpsertJobVariables>;
  operationName: string;
}
export const upsertJobRef: UpsertJobRef;

export function upsertJob(vars: UpsertJobVariables): MutationPromise<UpsertJobData, UpsertJobVariables>;
export function upsertJob(dc: DataConnect, vars: UpsertJobVariables): MutationPromise<UpsertJobData, UpsertJobVariables>;

interface DeleteJobRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteJobVariables): MutationRef<DeleteJobData, DeleteJobVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteJobVariables): MutationRef<DeleteJobData, DeleteJobVariables>;
  operationName: string;
}
export const deleteJobRef: DeleteJobRef;

export function deleteJob(vars: DeleteJobVariables): MutationPromise<DeleteJobData, DeleteJobVariables>;
export function deleteJob(dc: DataConnect, vars: DeleteJobVariables): MutationPromise<DeleteJobData, DeleteJobVariables>;

interface UpsertTechnicalRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertTechnicalVariables): MutationRef<UpsertTechnicalData, UpsertTechnicalVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertTechnicalVariables): MutationRef<UpsertTechnicalData, UpsertTechnicalVariables>;
  operationName: string;
}
export const upsertTechnicalRef: UpsertTechnicalRef;

export function upsertTechnical(vars: UpsertTechnicalVariables): MutationPromise<UpsertTechnicalData, UpsertTechnicalVariables>;
export function upsertTechnical(dc: DataConnect, vars: UpsertTechnicalVariables): MutationPromise<UpsertTechnicalData, UpsertTechnicalVariables>;

interface DeleteTechnicalRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTechnicalVariables): MutationRef<DeleteTechnicalData, DeleteTechnicalVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTechnicalVariables): MutationRef<DeleteTechnicalData, DeleteTechnicalVariables>;
  operationName: string;
}
export const deleteTechnicalRef: DeleteTechnicalRef;

export function deleteTechnical(vars: DeleteTechnicalVariables): MutationPromise<DeleteTechnicalData, DeleteTechnicalVariables>;
export function deleteTechnical(dc: DataConnect, vars: DeleteTechnicalVariables): MutationPromise<DeleteTechnicalData, DeleteTechnicalVariables>;

interface UpsertTermAndConditionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertTermAndConditionVariables): MutationRef<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertTermAndConditionVariables): MutationRef<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;
  operationName: string;
}
export const upsertTermAndConditionRef: UpsertTermAndConditionRef;

export function upsertTermAndCondition(vars: UpsertTermAndConditionVariables): MutationPromise<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;
export function upsertTermAndCondition(dc: DataConnect, vars: UpsertTermAndConditionVariables): MutationPromise<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;

interface DeleteTermAndConditionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTermAndConditionVariables): MutationRef<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTermAndConditionVariables): MutationRef<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;
  operationName: string;
}
export const deleteTermAndConditionRef: DeleteTermAndConditionRef;

export function deleteTermAndCondition(vars: DeleteTermAndConditionVariables): MutationPromise<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;
export function deleteTermAndCondition(dc: DataConnect, vars: DeleteTermAndConditionVariables): MutationPromise<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;

interface UpsertHsnsacCodeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertHsnsacCodeVariables): MutationRef<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertHsnsacCodeVariables): MutationRef<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;
  operationName: string;
}
export const upsertHsnsacCodeRef: UpsertHsnsacCodeRef;

export function upsertHsnsacCode(vars: UpsertHsnsacCodeVariables): MutationPromise<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;
export function upsertHsnsacCode(dc: DataConnect, vars: UpsertHsnsacCodeVariables): MutationPromise<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;

interface DeleteHsnsacCodeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHsnsacCodeVariables): MutationRef<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteHsnsacCodeVariables): MutationRef<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;
  operationName: string;
}
export const deleteHsnsacCodeRef: DeleteHsnsacCodeRef;

export function deleteHsnsacCode(vars: DeleteHsnsacCodeVariables): MutationPromise<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;
export function deleteHsnsacCode(dc: DataConnect, vars: DeleteHsnsacCodeVariables): MutationPromise<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;

interface UpsertAppSettingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertAppSettingVariables): MutationRef<UpsertAppSettingData, UpsertAppSettingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertAppSettingVariables): MutationRef<UpsertAppSettingData, UpsertAppSettingVariables>;
  operationName: string;
}
export const upsertAppSettingRef: UpsertAppSettingRef;

export function upsertAppSetting(vars: UpsertAppSettingVariables): MutationPromise<UpsertAppSettingData, UpsertAppSettingVariables>;
export function upsertAppSetting(dc: DataConnect, vars: UpsertAppSettingVariables): MutationPromise<UpsertAppSettingData, UpsertAppSettingVariables>;

interface DeleteAppSettingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAppSettingVariables): MutationRef<DeleteAppSettingData, DeleteAppSettingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteAppSettingVariables): MutationRef<DeleteAppSettingData, DeleteAppSettingVariables>;
  operationName: string;
}
export const deleteAppSettingRef: DeleteAppSettingRef;

export function deleteAppSetting(vars: DeleteAppSettingVariables): MutationPromise<DeleteAppSettingData, DeleteAppSettingVariables>;
export function deleteAppSetting(dc: DataConnect, vars: DeleteAppSettingVariables): MutationPromise<DeleteAppSettingData, DeleteAppSettingVariables>;

interface UpsertServiceUnitTypeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertServiceUnitTypeVariables): MutationRef<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertServiceUnitTypeVariables): MutationRef<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;
  operationName: string;
}
export const upsertServiceUnitTypeRef: UpsertServiceUnitTypeRef;

export function upsertServiceUnitType(vars: UpsertServiceUnitTypeVariables): MutationPromise<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;
export function upsertServiceUnitType(dc: DataConnect, vars: UpsertServiceUnitTypeVariables): MutationPromise<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;

interface DeleteServiceUnitTypeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteServiceUnitTypeVariables): MutationRef<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteServiceUnitTypeVariables): MutationRef<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;
  operationName: string;
}
export const deleteServiceUnitTypeRef: DeleteServiceUnitTypeRef;

export function deleteServiceUnitType(vars: DeleteServiceUnitTypeVariables): MutationPromise<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;
export function deleteServiceUnitType(dc: DataConnect, vars: DeleteServiceUnitTypeVariables): MutationPromise<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;

interface UpsertClientServicePriceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertClientServicePriceVariables): MutationRef<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertClientServicePriceVariables): MutationRef<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;
  operationName: string;
}
export const upsertClientServicePriceRef: UpsertClientServicePriceRef;

export function upsertClientServicePrice(vars: UpsertClientServicePriceVariables): MutationPromise<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;
export function upsertClientServicePrice(dc: DataConnect, vars: UpsertClientServicePriceVariables): MutationPromise<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;

interface DeleteClientServicePriceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteClientServicePriceVariables): MutationRef<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteClientServicePriceVariables): MutationRef<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;
  operationName: string;
}
export const deleteClientServicePriceRef: DeleteClientServicePriceRef;

export function deleteClientServicePrice(vars: DeleteClientServicePriceVariables): MutationPromise<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;
export function deleteClientServicePrice(dc: DataConnect, vars: DeleteClientServicePriceVariables): MutationPromise<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;

interface UpsertClientTestPriceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertClientTestPriceVariables): MutationRef<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertClientTestPriceVariables): MutationRef<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;
  operationName: string;
}
export const upsertClientTestPriceRef: UpsertClientTestPriceRef;

export function upsertClientTestPrice(vars: UpsertClientTestPriceVariables): MutationPromise<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;
export function upsertClientTestPrice(dc: DataConnect, vars: UpsertClientTestPriceVariables): MutationPromise<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;

interface DeleteClientTestPriceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteClientTestPriceVariables): MutationRef<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteClientTestPriceVariables): MutationRef<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;
  operationName: string;
}
export const deleteClientTestPriceRef: DeleteClientTestPriceRef;

export function deleteClientTestPrice(vars: DeleteClientTestPriceVariables): MutationPromise<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;
export function deleteClientTestPrice(dc: DataConnect, vars: DeleteClientTestPriceVariables): MutationPromise<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface ListClientsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListClientsData, undefined>;
  operationName: string;
}
export const listClientsRef: ListClientsRef;

export function listClients(): QueryPromise<ListClientsData, undefined>;
export function listClients(dc: DataConnect): QueryPromise<ListClientsData, undefined>;

interface GetClientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientVariables): QueryRef<GetClientData, GetClientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientVariables): QueryRef<GetClientData, GetClientVariables>;
  operationName: string;
}
export const getClientRef: GetClientRef;

export function getClient(vars: GetClientVariables): QueryPromise<GetClientData, GetClientVariables>;
export function getClient(dc: DataConnect, vars: GetClientVariables): QueryPromise<GetClientData, GetClientVariables>;

interface ListJobsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListJobsVariables): QueryRef<ListJobsData, ListJobsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListJobsVariables): QueryRef<ListJobsData, ListJobsVariables>;
  operationName: string;
}
export const listJobsRef: ListJobsRef;

export function listJobs(vars?: ListJobsVariables): QueryPromise<ListJobsData, ListJobsVariables>;
export function listJobs(dc: DataConnect, vars?: ListJobsVariables): QueryPromise<ListJobsData, ListJobsVariables>;

interface GetJobRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
  operationName: string;
}
export const getJobRef: GetJobRef;

export function getJob(vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;
export function getJob(dc: DataConnect, vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;

interface ListServicesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServicesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListServicesData, undefined>;
  operationName: string;
}
export const listServicesRef: ListServicesRef;

export function listServices(): QueryPromise<ListServicesData, undefined>;
export function listServices(dc: DataConnect): QueryPromise<ListServicesData, undefined>;

interface GetServiceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetServiceVariables): QueryRef<GetServiceData, GetServiceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetServiceVariables): QueryRef<GetServiceData, GetServiceVariables>;
  operationName: string;
}
export const getServiceRef: GetServiceRef;

export function getService(vars: GetServiceVariables): QueryPromise<GetServiceData, GetServiceVariables>;
export function getService(dc: DataConnect, vars: GetServiceVariables): QueryPromise<GetServiceData, GetServiceVariables>;

interface ListTestsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTestsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTestsData, undefined>;
  operationName: string;
}
export const listTestsRef: ListTestsRef;

export function listTests(): QueryPromise<ListTestsData, undefined>;
export function listTests(dc: DataConnect): QueryPromise<ListTestsData, undefined>;

interface GetTestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTestVariables): QueryRef<GetTestData, GetTestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTestVariables): QueryRef<GetTestData, GetTestVariables>;
  operationName: string;
}
export const getTestRef: GetTestRef;

export function getTest(vars: GetTestVariables): QueryPromise<GetTestData, GetTestVariables>;
export function getTest(dc: DataConnect, vars: GetTestVariables): QueryPromise<GetTestData, GetTestVariables>;

interface ListTechnicalsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTechnicalsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTechnicalsData, undefined>;
  operationName: string;
}
export const listTechnicalsRef: ListTechnicalsRef;

export function listTechnicals(): QueryPromise<ListTechnicalsData, undefined>;
export function listTechnicals(dc: DataConnect): QueryPromise<ListTechnicalsData, undefined>;

interface ListTermsAndConditionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTermsAndConditionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListTermsAndConditionsData, undefined>;
  operationName: string;
}
export const listTermsAndConditionsRef: ListTermsAndConditionsRef;

export function listTermsAndConditions(): QueryPromise<ListTermsAndConditionsData, undefined>;
export function listTermsAndConditions(dc: DataConnect): QueryPromise<ListTermsAndConditionsData, undefined>;

interface ListHsnsacCodesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHsnsacCodesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHsnsacCodesData, undefined>;
  operationName: string;
}
export const listHsnsacCodesRef: ListHsnsacCodesRef;

export function listHsnsacCodes(): QueryPromise<ListHsnsacCodesData, undefined>;
export function listHsnsacCodes(dc: DataConnect): QueryPromise<ListHsnsacCodesData, undefined>;

interface ListAppSettingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAppSettingsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAppSettingsData, undefined>;
  operationName: string;
}
export const listAppSettingsRef: ListAppSettingsRef;

export function listAppSettings(): QueryPromise<ListAppSettingsData, undefined>;
export function listAppSettings(dc: DataConnect): QueryPromise<ListAppSettingsData, undefined>;

interface ListServiceUnitTypesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServiceUnitTypesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListServiceUnitTypesData, undefined>;
  operationName: string;
}
export const listServiceUnitTypesRef: ListServiceUnitTypesRef;

export function listServiceUnitTypes(): QueryPromise<ListServiceUnitTypesData, undefined>;
export function listServiceUnitTypes(dc: DataConnect): QueryPromise<ListServiceUnitTypesData, undefined>;

interface ListClientServicePricesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientServicePricesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListClientServicePricesData, undefined>;
  operationName: string;
}
export const listClientServicePricesRef: ListClientServicePricesRef;

export function listClientServicePrices(): QueryPromise<ListClientServicePricesData, undefined>;
export function listClientServicePrices(dc: DataConnect): QueryPromise<ListClientServicePricesData, undefined>;

interface ListClientTestPricesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientTestPricesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListClientTestPricesData, undefined>;
  operationName: string;
}
export const listClientTestPricesRef: ListClientTestPricesRef;

export function listClientTestPrices(): QueryPromise<ListClientTestPricesData, undefined>;
export function listClientTestPrices(dc: DataConnect): QueryPromise<ListClientTestPricesData, undefined>;

