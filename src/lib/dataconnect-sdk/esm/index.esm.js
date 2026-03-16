import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'main-connector',
  service: 'test-62e9b',
  location: 'us-central1'
};

export const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
upsertUserRef.operationName = 'UpsertUser';

export function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
}

export const deleteUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteUser', inputVars);
}
deleteUserRef.operationName = 'DeleteUser';

export function deleteUser(dcOrVars, vars) {
  return executeMutation(deleteUserRef(dcOrVars, vars));
}

export const upsertClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertClient', inputVars);
}
upsertClientRef.operationName = 'UpsertClient';

export function upsertClient(dcOrVars, vars) {
  return executeMutation(upsertClientRef(dcOrVars, vars));
}

export const deleteClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteClient', inputVars);
}
deleteClientRef.operationName = 'DeleteClient';

export function deleteClient(dcOrVars, vars) {
  return executeMutation(deleteClientRef(dcOrVars, vars));
}

export const upsertServiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertService', inputVars);
}
upsertServiceRef.operationName = 'UpsertService';

export function upsertService(dcOrVars, vars) {
  return executeMutation(upsertServiceRef(dcOrVars, vars));
}

export const deleteServiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteService', inputVars);
}
deleteServiceRef.operationName = 'DeleteService';

export function deleteService(dcOrVars, vars) {
  return executeMutation(deleteServiceRef(dcOrVars, vars));
}

export const upsertTestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertTest', inputVars);
}
upsertTestRef.operationName = 'UpsertTest';

export function upsertTest(dcOrVars, vars) {
  return executeMutation(upsertTestRef(dcOrVars, vars));
}

export const deleteTestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTest', inputVars);
}
deleteTestRef.operationName = 'DeleteTest';

export function deleteTest(dcOrVars, vars) {
  return executeMutation(deleteTestRef(dcOrVars, vars));
}

export const upsertJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertJob', inputVars);
}
upsertJobRef.operationName = 'UpsertJob';

export function upsertJob(dcOrVars, vars) {
  return executeMutation(upsertJobRef(dcOrVars, vars));
}

export const deleteJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteJob', inputVars);
}
deleteJobRef.operationName = 'DeleteJob';

export function deleteJob(dcOrVars, vars) {
  return executeMutation(deleteJobRef(dcOrVars, vars));
}

export const upsertTechnicalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertTechnical', inputVars);
}
upsertTechnicalRef.operationName = 'UpsertTechnical';

export function upsertTechnical(dcOrVars, vars) {
  return executeMutation(upsertTechnicalRef(dcOrVars, vars));
}

export const deleteTechnicalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTechnical', inputVars);
}
deleteTechnicalRef.operationName = 'DeleteTechnical';

export function deleteTechnical(dcOrVars, vars) {
  return executeMutation(deleteTechnicalRef(dcOrVars, vars));
}

export const upsertTermAndConditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertTermAndCondition', inputVars);
}
upsertTermAndConditionRef.operationName = 'UpsertTermAndCondition';

export function upsertTermAndCondition(dcOrVars, vars) {
  return executeMutation(upsertTermAndConditionRef(dcOrVars, vars));
}

export const deleteTermAndConditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTermAndCondition', inputVars);
}
deleteTermAndConditionRef.operationName = 'DeleteTermAndCondition';

export function deleteTermAndCondition(dcOrVars, vars) {
  return executeMutation(deleteTermAndConditionRef(dcOrVars, vars));
}

export const upsertHsnsacCodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertHSNSACCode', inputVars);
}
upsertHsnsacCodeRef.operationName = 'UpsertHSNSACCode';

export function upsertHsnsacCode(dcOrVars, vars) {
  return executeMutation(upsertHsnsacCodeRef(dcOrVars, vars));
}

export const deleteHsnsacCodeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteHSNSACCode', inputVars);
}
deleteHsnsacCodeRef.operationName = 'DeleteHSNSACCode';

export function deleteHsnsacCode(dcOrVars, vars) {
  return executeMutation(deleteHsnsacCodeRef(dcOrVars, vars));
}

export const upsertAppSettingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertAppSetting', inputVars);
}
upsertAppSettingRef.operationName = 'UpsertAppSetting';

export function upsertAppSetting(dcOrVars, vars) {
  return executeMutation(upsertAppSettingRef(dcOrVars, vars));
}

export const deleteAppSettingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAppSetting', inputVars);
}
deleteAppSettingRef.operationName = 'DeleteAppSetting';

export function deleteAppSetting(dcOrVars, vars) {
  return executeMutation(deleteAppSettingRef(dcOrVars, vars));
}

export const upsertServiceUnitTypeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertServiceUnitType', inputVars);
}
upsertServiceUnitTypeRef.operationName = 'UpsertServiceUnitType';

export function upsertServiceUnitType(dcOrVars, vars) {
  return executeMutation(upsertServiceUnitTypeRef(dcOrVars, vars));
}

export const deleteServiceUnitTypeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteServiceUnitType', inputVars);
}
deleteServiceUnitTypeRef.operationName = 'DeleteServiceUnitType';

export function deleteServiceUnitType(dcOrVars, vars) {
  return executeMutation(deleteServiceUnitTypeRef(dcOrVars, vars));
}

export const upsertClientServicePriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertClientServicePrice', inputVars);
}
upsertClientServicePriceRef.operationName = 'UpsertClientServicePrice';

export function upsertClientServicePrice(dcOrVars, vars) {
  return executeMutation(upsertClientServicePriceRef(dcOrVars, vars));
}

export const deleteClientServicePriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteClientServicePrice', inputVars);
}
deleteClientServicePriceRef.operationName = 'DeleteClientServicePrice';

export function deleteClientServicePrice(dcOrVars, vars) {
  return executeMutation(deleteClientServicePriceRef(dcOrVars, vars));
}

export const upsertClientTestPriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertClientTestPrice', inputVars);
}
upsertClientTestPriceRef.operationName = 'UpsertClientTestPrice';

export function upsertClientTestPrice(dcOrVars, vars) {
  return executeMutation(upsertClientTestPriceRef(dcOrVars, vars));
}

export const deleteClientTestPriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteClientTestPrice', inputVars);
}
deleteClientTestPriceRef.operationName = 'DeleteClientTestPrice';

export function deleteClientTestPrice(dcOrVars, vars) {
  return executeMutation(deleteClientTestPriceRef(dcOrVars, vars));
}

export const listUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsers');
}
listUsersRef.operationName = 'ListUsers';

export function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
}

export const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';

export function getUser(dcOrVars, vars) {
  return executeQuery(getUserRef(dcOrVars, vars));
}

export const listClientsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClients');
}
listClientsRef.operationName = 'ListClients';

export function listClients(dc) {
  return executeQuery(listClientsRef(dc));
}

export const getClientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClient', inputVars);
}
getClientRef.operationName = 'GetClient';

export function getClient(dcOrVars, vars) {
  return executeQuery(getClientRef(dcOrVars, vars));
}

export const listJobsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListJobs', inputVars);
}
listJobsRef.operationName = 'ListJobs';

export function listJobs(dcOrVars, vars) {
  return executeQuery(listJobsRef(dcOrVars, vars));
}

export const getJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJob', inputVars);
}
getJobRef.operationName = 'GetJob';

export function getJob(dcOrVars, vars) {
  return executeQuery(getJobRef(dcOrVars, vars));
}

export const listServicesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServices');
}
listServicesRef.operationName = 'ListServices';

export function listServices(dc) {
  return executeQuery(listServicesRef(dc));
}

export const getServiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetService', inputVars);
}
getServiceRef.operationName = 'GetService';

export function getService(dcOrVars, vars) {
  return executeQuery(getServiceRef(dcOrVars, vars));
}

export const listTestsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTests');
}
listTestsRef.operationName = 'ListTests';

export function listTests(dc) {
  return executeQuery(listTestsRef(dc));
}

export const getTestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTest', inputVars);
}
getTestRef.operationName = 'GetTest';

export function getTest(dcOrVars, vars) {
  return executeQuery(getTestRef(dcOrVars, vars));
}

export const listTechnicalsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTechnicals');
}
listTechnicalsRef.operationName = 'ListTechnicals';

export function listTechnicals(dc) {
  return executeQuery(listTechnicalsRef(dc));
}

export const listTermsAndConditionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTermsAndConditions');
}
listTermsAndConditionsRef.operationName = 'ListTermsAndConditions';

export function listTermsAndConditions(dc) {
  return executeQuery(listTermsAndConditionsRef(dc));
}

export const listHsnsacCodesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHSNSACCodes');
}
listHsnsacCodesRef.operationName = 'ListHSNSACCodes';

export function listHsnsacCodes(dc) {
  return executeQuery(listHsnsacCodesRef(dc));
}

export const listAppSettingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAppSettings');
}
listAppSettingsRef.operationName = 'ListAppSettings';

export function listAppSettings(dc) {
  return executeQuery(listAppSettingsRef(dc));
}

export const listServiceUnitTypesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServiceUnitTypes');
}
listServiceUnitTypesRef.operationName = 'ListServiceUnitTypes';

export function listServiceUnitTypes(dc) {
  return executeQuery(listServiceUnitTypesRef(dc));
}

export const listClientServicePricesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientServicePrices');
}
listClientServicePricesRef.operationName = 'ListClientServicePrices';

export function listClientServicePrices(dc) {
  return executeQuery(listClientServicePricesRef(dc));
}

export const listClientTestPricesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListClientTestPrices');
}
listClientTestPricesRef.operationName = 'ListClientTestPrices';

export function listClientTestPrices(dc) {
  return executeQuery(listClientTestPricesRef(dc));
}

