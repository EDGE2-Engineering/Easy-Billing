const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'main-connector',
  service: 'test-62e9b',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
upsertUserRef.operationName = 'UpsertUser';
exports.upsertUserRef = upsertUserRef;

exports.upsertUser = function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
};

const deleteUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteUser', inputVars);
}
deleteUserRef.operationName = 'DeleteUser';
exports.deleteUserRef = deleteUserRef;

exports.deleteUser = function deleteUser(dcOrVars, vars) {
  return executeMutation(deleteUserRef(dcOrVars, vars));
};

const upsertClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertClient', inputVars);
}
upsertClientRef.operationName = 'UpsertClient';
exports.upsertClientRef = upsertClientRef;

exports.upsertClient = function upsertClient(dcOrVars, vars) {
  return executeMutation(upsertClientRef(dcOrVars, vars));
};

const deleteClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteClient', inputVars);
}
deleteClientRef.operationName = 'DeleteClient';
exports.deleteClientRef = deleteClientRef;

exports.deleteClient = function deleteClient(dcOrVars, vars) {
  return executeMutation(deleteClientRef(dcOrVars, vars));
};

const upsertServiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertService', inputVars);
}
upsertServiceRef.operationName = 'UpsertService';
exports.upsertServiceRef = upsertServiceRef;

exports.upsertService = function upsertService(dcOrVars, vars) {
  return executeMutation(upsertServiceRef(dcOrVars, vars));
};

const deleteServiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteService', inputVars);
}
deleteServiceRef.operationName = 'DeleteService';
exports.deleteServiceRef = deleteServiceRef;

exports.deleteService = function deleteService(dcOrVars, vars) {
  return executeMutation(deleteServiceRef(dcOrVars, vars));
};

const upsertTestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertTest', inputVars);
}
upsertTestRef.operationName = 'UpsertTest';
exports.upsertTestRef = upsertTestRef;

exports.upsertTest = function upsertTest(dcOrVars, vars) {
  return executeMutation(upsertTestRef(dcOrVars, vars));
};

const deleteTestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTest', inputVars);
}
deleteTestRef.operationName = 'DeleteTest';
exports.deleteTestRef = deleteTestRef;

exports.deleteTest = function deleteTest(dcOrVars, vars) {
  return executeMutation(deleteTestRef(dcOrVars, vars));
};

const upsertJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertJob', inputVars);
}
upsertJobRef.operationName = 'UpsertJob';
exports.upsertJobRef = upsertJobRef;

exports.upsertJob = function upsertJob(dcOrVars, vars) {
  return executeMutation(upsertJobRef(dcOrVars, vars));
};

const deleteJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteJob', inputVars);
}
deleteJobRef.operationName = 'DeleteJob';
exports.deleteJobRef = deleteJobRef;

exports.deleteJob = function deleteJob(dcOrVars, vars) {
  return executeMutation(deleteJobRef(dcOrVars, vars));
};

const upsertTechnicalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertTechnical', inputVars);
}
upsertTechnicalRef.operationName = 'UpsertTechnical';
exports.upsertTechnicalRef = upsertTechnicalRef;

exports.upsertTechnical = function upsertTechnical(dcOrVars, vars) {
  return executeMutation(upsertTechnicalRef(dcOrVars, vars));
};

const deleteTechnicalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTechnical', inputVars);
}
deleteTechnicalRef.operationName = 'DeleteTechnical';
exports.deleteTechnicalRef = deleteTechnicalRef;

exports.deleteTechnical = function deleteTechnical(dcOrVars, vars) {
  return executeMutation(deleteTechnicalRef(dcOrVars, vars));
};

const upsertTermAndConditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertTermAndCondition', inputVars);
}
upsertTermAndConditionRef.operationName = 'UpsertTermAndCondition';
exports.upsertTermAndConditionRef = upsertTermAndConditionRef;

exports.upsertTermAndCondition = function upsertTermAndCondition(dcOrVars, vars) {
  return executeMutation(upsertTermAndConditionRef(dcOrVars, vars));
};

const deleteTermAndConditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTermAndCondition', inputVars);
}
deleteTermAndConditionRef.operationName = 'DeleteTermAndCondition';
exports.deleteTermAndConditionRef = deleteTermAndConditionRef;

exports.deleteTermAndCondition = function deleteTermAndCondition(dcOrVars, vars) {
  return executeMutation(deleteTermAndConditionRef(dcOrVars, vars));
};

const upsertHsnsacCodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertHSNSACCode', inputVars);
}
upsertHsnsacCodeRef.operationName = 'UpsertHSNSACCode';
exports.upsertHsnsacCodeRef = upsertHsnsacCodeRef;

exports.upsertHsnsacCode = function upsertHsnsacCode(dcOrVars, vars) {
  return executeMutation(upsertHsnsacCodeRef(dcOrVars, vars));
};

const deleteHsnsacCodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteHSNSACCode', inputVars);
}
deleteHsnsacCodeRef.operationName = 'DeleteHSNSACCode';
exports.deleteHsnsacCodeRef = deleteHsnsacCodeRef;

exports.deleteHsnsacCode = function deleteHsnsacCode(dcOrVars, vars) {
  return executeMutation(deleteHsnsacCodeRef(dcOrVars, vars));
};

const upsertAppSettingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertAppSetting', inputVars);
}
upsertAppSettingRef.operationName = 'UpsertAppSetting';
exports.upsertAppSettingRef = upsertAppSettingRef;

exports.upsertAppSetting = function upsertAppSetting(dcOrVars, vars) {
  return executeMutation(upsertAppSettingRef(dcOrVars, vars));
};

const deleteAppSettingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAppSetting', inputVars);
}
deleteAppSettingRef.operationName = 'DeleteAppSetting';
exports.deleteAppSettingRef = deleteAppSettingRef;

exports.deleteAppSetting = function deleteAppSetting(dcOrVars, vars) {
  return executeMutation(deleteAppSettingRef(dcOrVars, vars));
};

const upsertServiceUnitTypeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertServiceUnitType', inputVars);
}
upsertServiceUnitTypeRef.operationName = 'UpsertServiceUnitType';
exports.upsertServiceUnitTypeRef = upsertServiceUnitTypeRef;

exports.upsertServiceUnitType = function upsertServiceUnitType(dcOrVars, vars) {
  return executeMutation(upsertServiceUnitTypeRef(dcOrVars, vars));
};

const deleteServiceUnitTypeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteServiceUnitType', inputVars);
}
deleteServiceUnitTypeRef.operationName = 'DeleteServiceUnitType';
exports.deleteServiceUnitTypeRef = deleteServiceUnitTypeRef;

exports.deleteServiceUnitType = function deleteServiceUnitType(dcOrVars, vars) {
  return executeMutation(deleteServiceUnitTypeRef(dcOrVars, vars));
};

const upsertClientServicePriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertClientServicePrice', inputVars);
}
upsertClientServicePriceRef.operationName = 'UpsertClientServicePrice';
exports.upsertClientServicePriceRef = upsertClientServicePriceRef;

exports.upsertClientServicePrice = function upsertClientServicePrice(dcOrVars, vars) {
  return executeMutation(upsertClientServicePriceRef(dcOrVars, vars));
};

const deleteClientServicePriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteClientServicePrice', inputVars);
}
deleteClientServicePriceRef.operationName = 'DeleteClientServicePrice';
exports.deleteClientServicePriceRef = deleteClientServicePriceRef;

exports.deleteClientServicePrice = function deleteClientServicePrice(dcOrVars, vars) {
  return executeMutation(deleteClientServicePriceRef(dcOrVars, vars));
};

const upsertClientTestPriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertClientTestPrice', inputVars);
}
upsertClientTestPriceRef.operationName = 'UpsertClientTestPrice';
exports.upsertClientTestPriceRef = upsertClientTestPriceRef;

exports.upsertClientTestPrice = function upsertClientTestPrice(dcOrVars, vars) {
  return executeMutation(upsertClientTestPriceRef(dcOrVars, vars));
};

const deleteClientTestPriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteClientTestPrice', inputVars);
}
deleteClientTestPriceRef.operationName = 'DeleteClientTestPrice';
exports.deleteClientTestPriceRef = deleteClientTestPriceRef;

exports.deleteClientTestPrice = function deleteClientTestPrice(dcOrVars, vars) {
  return executeMutation(deleteClientTestPriceRef(dcOrVars, vars));
};

const listUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsers');
}
listUsersRef.operationName = 'ListUsers';
exports.listUsersRef = listUsersRef;

exports.listUsers = function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
};

const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';
exports.getUserRef = getUserRef;

exports.getUser = function getUser(dcOrVars, vars) {
  return executeQuery(getUserRef(dcOrVars, vars));
};

const listClientsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClients');
}
listClientsRef.operationName = 'ListClients';
exports.listClientsRef = listClientsRef;

exports.listClients = function listClients(dc) {
  return executeQuery(listClientsRef(dc));
};

const getClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClient', inputVars);
}
getClientRef.operationName = 'GetClient';
exports.getClientRef = getClientRef;

exports.getClient = function getClient(dcOrVars, vars) {
  return executeQuery(getClientRef(dcOrVars, vars));
};

const listJobsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListJobs', inputVars);
}
listJobsRef.operationName = 'ListJobs';
exports.listJobsRef = listJobsRef;

exports.listJobs = function listJobs(dcOrVars, vars) {
  return executeQuery(listJobsRef(dcOrVars, vars));
};

const getJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJob', inputVars);
}
getJobRef.operationName = 'GetJob';
exports.getJobRef = getJobRef;

exports.getJob = function getJob(dcOrVars, vars) {
  return executeQuery(getJobRef(dcOrVars, vars));
};

const listServicesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServices');
}
listServicesRef.operationName = 'ListServices';
exports.listServicesRef = listServicesRef;

exports.listServices = function listServices(dc) {
  return executeQuery(listServicesRef(dc));
};

const getServiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetService', inputVars);
}
getServiceRef.operationName = 'GetService';
exports.getServiceRef = getServiceRef;

exports.getService = function getService(dcOrVars, vars) {
  return executeQuery(getServiceRef(dcOrVars, vars));
};

const listTestsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTests');
}
listTestsRef.operationName = 'ListTests';
exports.listTestsRef = listTestsRef;

exports.listTests = function listTests(dc) {
  return executeQuery(listTestsRef(dc));
};

const getTestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTest', inputVars);
}
getTestRef.operationName = 'GetTest';
exports.getTestRef = getTestRef;

exports.getTest = function getTest(dcOrVars, vars) {
  return executeQuery(getTestRef(dcOrVars, vars));
};

const listTechnicalsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTechnicals');
}
listTechnicalsRef.operationName = 'ListTechnicals';
exports.listTechnicalsRef = listTechnicalsRef;

exports.listTechnicals = function listTechnicals(dc) {
  return executeQuery(listTechnicalsRef(dc));
};

const listTermsAndConditionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTermsAndConditions');
}
listTermsAndConditionsRef.operationName = 'ListTermsAndConditions';
exports.listTermsAndConditionsRef = listTermsAndConditionsRef;

exports.listTermsAndConditions = function listTermsAndConditions(dc) {
  return executeQuery(listTermsAndConditionsRef(dc));
};

const listHsnsacCodesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHSNSACCodes');
}
listHsnsacCodesRef.operationName = 'ListHSNSACCodes';
exports.listHsnsacCodesRef = listHsnsacCodesRef;

exports.listHsnsacCodes = function listHsnsacCodes(dc) {
  return executeQuery(listHsnsacCodesRef(dc));
};

const listAppSettingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAppSettings');
}
listAppSettingsRef.operationName = 'ListAppSettings';
exports.listAppSettingsRef = listAppSettingsRef;

exports.listAppSettings = function listAppSettings(dc) {
  return executeQuery(listAppSettingsRef(dc));
};

const listServiceUnitTypesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServiceUnitTypes');
}
listServiceUnitTypesRef.operationName = 'ListServiceUnitTypes';
exports.listServiceUnitTypesRef = listServiceUnitTypesRef;

exports.listServiceUnitTypes = function listServiceUnitTypes(dc) {
  return executeQuery(listServiceUnitTypesRef(dc));
};

const listClientServicePricesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientServicePrices');
}
listClientServicePricesRef.operationName = 'ListClientServicePrices';
exports.listClientServicePricesRef = listClientServicePricesRef;

exports.listClientServicePrices = function listClientServicePrices(dc) {
  return executeQuery(listClientServicePricesRef(dc));
};

const listClientTestPricesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientTestPrices');
}
listClientTestPricesRef.operationName = 'ListClientTestPrices';
exports.listClientTestPricesRef = listClientTestPricesRef;

exports.listClientTestPrices = function listClientTestPrices(dc) {
  return executeQuery(listClientTestPricesRef(dc));
};
