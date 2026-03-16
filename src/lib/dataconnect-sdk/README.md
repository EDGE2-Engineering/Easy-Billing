# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `main-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListUsers*](#listusers)
  - [*GetUser*](#getuser)
  - [*ListClients*](#listclients)
  - [*GetClient*](#getclient)
  - [*ListJobs*](#listjobs)
  - [*GetJob*](#getjob)
  - [*ListServices*](#listservices)
  - [*GetService*](#getservice)
  - [*ListTests*](#listtests)
  - [*GetTest*](#gettest)
  - [*ListTechnicals*](#listtechnicals)
  - [*ListTermsAndConditions*](#listtermsandconditions)
  - [*ListHSNSACCodes*](#listhsnsaccodes)
  - [*ListAppSettings*](#listappsettings)
  - [*ListServiceUnitTypes*](#listserviceunittypes)
  - [*ListClientServicePrices*](#listclientserviceprices)
  - [*ListClientTestPrices*](#listclienttestprices)
- [**Mutations**](#mutations)
  - [*UpsertUser*](#upsertuser)
  - [*DeleteUser*](#deleteuser)
  - [*UpsertClient*](#upsertclient)
  - [*DeleteClient*](#deleteclient)
  - [*UpsertService*](#upsertservice)
  - [*DeleteService*](#deleteservice)
  - [*UpsertTest*](#upserttest)
  - [*DeleteTest*](#deletetest)
  - [*UpsertJob*](#upsertjob)
  - [*DeleteJob*](#deletejob)
  - [*UpsertTechnical*](#upserttechnical)
  - [*DeleteTechnical*](#deletetechnical)
  - [*UpsertTermAndCondition*](#upserttermandcondition)
  - [*DeleteTermAndCondition*](#deletetermandcondition)
  - [*UpsertHSNSACCode*](#upserthsnsaccode)
  - [*DeleteHSNSACCode*](#deletehsnsaccode)
  - [*UpsertAppSetting*](#upsertappsetting)
  - [*DeleteAppSetting*](#deleteappsetting)
  - [*UpsertServiceUnitType*](#upsertserviceunittype)
  - [*DeleteServiceUnitType*](#deleteserviceunittype)
  - [*UpsertClientServicePrice*](#upsertclientserviceprice)
  - [*DeleteClientServicePrice*](#deleteclientserviceprice)
  - [*UpsertClientTestPrice*](#upsertclienttestprice)
  - [*DeleteClientTestPrice*](#deleteclienttestprice)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `main-connector`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@edge2/dataconnect` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@edge2/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@edge2/dataconnect';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `main-connector` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listUsers(): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@edge2/dataconnect';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@edge2/dataconnect';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query requires an argument of type `GetUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserVariables {
  id: string;
}
```
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser, GetUserVariables } from '@edge2/dataconnect';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser(getUserVars);
// Variables can be defined inline as well.
const { data } = await getUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect, getUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser(getUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef, GetUserVariables } from '@edge2/dataconnect';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef(getUserVars);
// Variables can be defined inline as well.
const ref = getUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect, getUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListClients
You can execute the `ListClients` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listClients(): QueryPromise<ListClientsData, undefined>;

interface ListClientsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientsData, undefined>;
}
export const listClientsRef: ListClientsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClients(dc: DataConnect): QueryPromise<ListClientsData, undefined>;

interface ListClientsRef {
  ...
  (dc: DataConnect): QueryRef<ListClientsData, undefined>;
}
export const listClientsRef: ListClientsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientsRef:
```typescript
const name = listClientsRef.operationName;
console.log(name);
```

### Variables
The `ListClients` query has no variables.
### Return Type
Recall that executing the `ListClients` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListClients`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClients } from '@edge2/dataconnect';


// Call the `listClients()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClients();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClients(dataConnect);

console.log(data.clients);

// Or, you can use the `Promise` API.
listClients().then((response) => {
  const data = response.data;
  console.log(data.clients);
});
```

### Using `ListClients`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientsRef } from '@edge2/dataconnect';


// Call the `listClientsRef()` function to get a reference to the query.
const ref = listClientsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clients);
});
```

## GetClient
You can execute the `GetClient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getClient(vars: GetClientVariables): QueryPromise<GetClientData, GetClientVariables>;

interface GetClientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientVariables): QueryRef<GetClientData, GetClientVariables>;
}
export const getClientRef: GetClientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClient(dc: DataConnect, vars: GetClientVariables): QueryPromise<GetClientData, GetClientVariables>;

interface GetClientRef {
  ...
  (dc: DataConnect, vars: GetClientVariables): QueryRef<GetClientData, GetClientVariables>;
}
export const getClientRef: GetClientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientRef:
```typescript
const name = getClientRef.operationName;
console.log(name);
```

### Variables
The `GetClient` query requires an argument of type `GetClientVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientVariables {
  id: string;
}
```
### Return Type
Recall that executing the `GetClient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetClient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClient, GetClientVariables } from '@edge2/dataconnect';

// The `GetClient` query requires an argument of type `GetClientVariables`:
const getClientVars: GetClientVariables = {
  id: ..., 
};

// Call the `getClient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClient(getClientVars);
// Variables can be defined inline as well.
const { data } = await getClient({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClient(dataConnect, getClientVars);

console.log(data.client);

// Or, you can use the `Promise` API.
getClient(getClientVars).then((response) => {
  const data = response.data;
  console.log(data.client);
});
```

### Using `GetClient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientRef, GetClientVariables } from '@edge2/dataconnect';

// The `GetClient` query requires an argument of type `GetClientVariables`:
const getClientVars: GetClientVariables = {
  id: ..., 
};

// Call the `getClientRef()` function to get a reference to the query.
const ref = getClientRef(getClientVars);
// Variables can be defined inline as well.
const ref = getClientRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientRef(dataConnect, getClientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.client);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.client);
});
```

## ListJobs
You can execute the `ListJobs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listJobs(vars?: ListJobsVariables): QueryPromise<ListJobsData, ListJobsVariables>;

interface ListJobsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListJobsVariables): QueryRef<ListJobsData, ListJobsVariables>;
}
export const listJobsRef: ListJobsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listJobs(dc: DataConnect, vars?: ListJobsVariables): QueryPromise<ListJobsData, ListJobsVariables>;

interface ListJobsRef {
  ...
  (dc: DataConnect, vars?: ListJobsVariables): QueryRef<ListJobsData, ListJobsVariables>;
}
export const listJobsRef: ListJobsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listJobsRef:
```typescript
const name = listJobsRef.operationName;
console.log(name);
```

### Variables
The `ListJobs` query has an optional argument of type `ListJobsVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListJobsVariables {
  type?: string | null;
}
```
### Return Type
Recall that executing the `ListJobs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListJobsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListJobs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listJobs, ListJobsVariables } from '@edge2/dataconnect';

// The `ListJobs` query has an optional argument of type `ListJobsVariables`:
const listJobsVars: ListJobsVariables = {
  type: ..., // optional
};

// Call the `listJobs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listJobs(listJobsVars);
// Variables can be defined inline as well.
const { data } = await listJobs({ type: ..., });
// Since all variables are optional for this query, you can omit the `ListJobsVariables` argument.
const { data } = await listJobs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listJobs(dataConnect, listJobsVars);

console.log(data.jobs);

// Or, you can use the `Promise` API.
listJobs(listJobsVars).then((response) => {
  const data = response.data;
  console.log(data.jobs);
});
```

### Using `ListJobs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listJobsRef, ListJobsVariables } from '@edge2/dataconnect';

// The `ListJobs` query has an optional argument of type `ListJobsVariables`:
const listJobsVars: ListJobsVariables = {
  type: ..., // optional
};

// Call the `listJobsRef()` function to get a reference to the query.
const ref = listJobsRef(listJobsVars);
// Variables can be defined inline as well.
const ref = listJobsRef({ type: ..., });
// Since all variables are optional for this query, you can omit the `ListJobsVariables` argument.
const ref = listJobsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listJobsRef(dataConnect, listJobsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.jobs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.jobs);
});
```

## GetJob
You can execute the `GetJob` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getJob(vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;

interface GetJobRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
}
export const getJobRef: GetJobRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getJob(dc: DataConnect, vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;

interface GetJobRef {
  ...
  (dc: DataConnect, vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
}
export const getJobRef: GetJobRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getJobRef:
```typescript
const name = getJobRef.operationName;
console.log(name);
```

### Variables
The `GetJob` query requires an argument of type `GetJobVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetJobVariables {
  id: string;
}
```
### Return Type
Recall that executing the `GetJob` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetJobData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetJob`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getJob, GetJobVariables } from '@edge2/dataconnect';

// The `GetJob` query requires an argument of type `GetJobVariables`:
const getJobVars: GetJobVariables = {
  id: ..., 
};

// Call the `getJob()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getJob(getJobVars);
// Variables can be defined inline as well.
const { data } = await getJob({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getJob(dataConnect, getJobVars);

console.log(data.job);

// Or, you can use the `Promise` API.
getJob(getJobVars).then((response) => {
  const data = response.data;
  console.log(data.job);
});
```

### Using `GetJob`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getJobRef, GetJobVariables } from '@edge2/dataconnect';

// The `GetJob` query requires an argument of type `GetJobVariables`:
const getJobVars: GetJobVariables = {
  id: ..., 
};

// Call the `getJobRef()` function to get a reference to the query.
const ref = getJobRef(getJobVars);
// Variables can be defined inline as well.
const ref = getJobRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getJobRef(dataConnect, getJobVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.job);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.job);
});
```

## ListServices
You can execute the `ListServices` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listServices(): QueryPromise<ListServicesData, undefined>;

interface ListServicesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServicesData, undefined>;
}
export const listServicesRef: ListServicesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listServices(dc: DataConnect): QueryPromise<ListServicesData, undefined>;

interface ListServicesRef {
  ...
  (dc: DataConnect): QueryRef<ListServicesData, undefined>;
}
export const listServicesRef: ListServicesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listServicesRef:
```typescript
const name = listServicesRef.operationName;
console.log(name);
```

### Variables
The `ListServices` query has no variables.
### Return Type
Recall that executing the `ListServices` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListServicesData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListServices`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listServices } from '@edge2/dataconnect';


// Call the `listServices()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listServices();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listServices(dataConnect);

console.log(data.services);

// Or, you can use the `Promise` API.
listServices().then((response) => {
  const data = response.data;
  console.log(data.services);
});
```

### Using `ListServices`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listServicesRef } from '@edge2/dataconnect';


// Call the `listServicesRef()` function to get a reference to the query.
const ref = listServicesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listServicesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.services);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.services);
});
```

## GetService
You can execute the `GetService` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getService(vars: GetServiceVariables): QueryPromise<GetServiceData, GetServiceVariables>;

interface GetServiceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetServiceVariables): QueryRef<GetServiceData, GetServiceVariables>;
}
export const getServiceRef: GetServiceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getService(dc: DataConnect, vars: GetServiceVariables): QueryPromise<GetServiceData, GetServiceVariables>;

interface GetServiceRef {
  ...
  (dc: DataConnect, vars: GetServiceVariables): QueryRef<GetServiceData, GetServiceVariables>;
}
export const getServiceRef: GetServiceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getServiceRef:
```typescript
const name = getServiceRef.operationName;
console.log(name);
```

### Variables
The `GetService` query requires an argument of type `GetServiceVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetServiceVariables {
  id: string;
}
```
### Return Type
Recall that executing the `GetService` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetServiceData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetService`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getService, GetServiceVariables } from '@edge2/dataconnect';

// The `GetService` query requires an argument of type `GetServiceVariables`:
const getServiceVars: GetServiceVariables = {
  id: ..., 
};

// Call the `getService()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getService(getServiceVars);
// Variables can be defined inline as well.
const { data } = await getService({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getService(dataConnect, getServiceVars);

console.log(data.service);

// Or, you can use the `Promise` API.
getService(getServiceVars).then((response) => {
  const data = response.data;
  console.log(data.service);
});
```

### Using `GetService`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getServiceRef, GetServiceVariables } from '@edge2/dataconnect';

// The `GetService` query requires an argument of type `GetServiceVariables`:
const getServiceVars: GetServiceVariables = {
  id: ..., 
};

// Call the `getServiceRef()` function to get a reference to the query.
const ref = getServiceRef(getServiceVars);
// Variables can be defined inline as well.
const ref = getServiceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getServiceRef(dataConnect, getServiceVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.service);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.service);
});
```

## ListTests
You can execute the `ListTests` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listTests(): QueryPromise<ListTestsData, undefined>;

interface ListTestsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTestsData, undefined>;
}
export const listTestsRef: ListTestsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTests(dc: DataConnect): QueryPromise<ListTestsData, undefined>;

interface ListTestsRef {
  ...
  (dc: DataConnect): QueryRef<ListTestsData, undefined>;
}
export const listTestsRef: ListTestsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTestsRef:
```typescript
const name = listTestsRef.operationName;
console.log(name);
```

### Variables
The `ListTests` query has no variables.
### Return Type
Recall that executing the `ListTests` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTestsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListTests`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTests } from '@edge2/dataconnect';


// Call the `listTests()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTests();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTests(dataConnect);

console.log(data.tests);

// Or, you can use the `Promise` API.
listTests().then((response) => {
  const data = response.data;
  console.log(data.tests);
});
```

### Using `ListTests`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTestsRef } from '@edge2/dataconnect';


// Call the `listTestsRef()` function to get a reference to the query.
const ref = listTestsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTestsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.tests);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.tests);
});
```

## GetTest
You can execute the `GetTest` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getTest(vars: GetTestVariables): QueryPromise<GetTestData, GetTestVariables>;

interface GetTestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTestVariables): QueryRef<GetTestData, GetTestVariables>;
}
export const getTestRef: GetTestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTest(dc: DataConnect, vars: GetTestVariables): QueryPromise<GetTestData, GetTestVariables>;

interface GetTestRef {
  ...
  (dc: DataConnect, vars: GetTestVariables): QueryRef<GetTestData, GetTestVariables>;
}
export const getTestRef: GetTestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTestRef:
```typescript
const name = getTestRef.operationName;
console.log(name);
```

### Variables
The `GetTest` query requires an argument of type `GetTestVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetTestVariables {
  id: string;
}
```
### Return Type
Recall that executing the `GetTest` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTestData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetTest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTest, GetTestVariables } from '@edge2/dataconnect';

// The `GetTest` query requires an argument of type `GetTestVariables`:
const getTestVars: GetTestVariables = {
  id: ..., 
};

// Call the `getTest()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTest(getTestVars);
// Variables can be defined inline as well.
const { data } = await getTest({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTest(dataConnect, getTestVars);

console.log(data.test);

// Or, you can use the `Promise` API.
getTest(getTestVars).then((response) => {
  const data = response.data;
  console.log(data.test);
});
```

### Using `GetTest`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTestRef, GetTestVariables } from '@edge2/dataconnect';

// The `GetTest` query requires an argument of type `GetTestVariables`:
const getTestVars: GetTestVariables = {
  id: ..., 
};

// Call the `getTestRef()` function to get a reference to the query.
const ref = getTestRef(getTestVars);
// Variables can be defined inline as well.
const ref = getTestRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTestRef(dataConnect, getTestVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.test);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.test);
});
```

## ListTechnicals
You can execute the `ListTechnicals` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listTechnicals(): QueryPromise<ListTechnicalsData, undefined>;

interface ListTechnicalsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTechnicalsData, undefined>;
}
export const listTechnicalsRef: ListTechnicalsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTechnicals(dc: DataConnect): QueryPromise<ListTechnicalsData, undefined>;

interface ListTechnicalsRef {
  ...
  (dc: DataConnect): QueryRef<ListTechnicalsData, undefined>;
}
export const listTechnicalsRef: ListTechnicalsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTechnicalsRef:
```typescript
const name = listTechnicalsRef.operationName;
console.log(name);
```

### Variables
The `ListTechnicals` query has no variables.
### Return Type
Recall that executing the `ListTechnicals` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTechnicalsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListTechnicals`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTechnicals } from '@edge2/dataconnect';


// Call the `listTechnicals()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTechnicals();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTechnicals(dataConnect);

console.log(data.technicals);

// Or, you can use the `Promise` API.
listTechnicals().then((response) => {
  const data = response.data;
  console.log(data.technicals);
});
```

### Using `ListTechnicals`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTechnicalsRef } from '@edge2/dataconnect';


// Call the `listTechnicalsRef()` function to get a reference to the query.
const ref = listTechnicalsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTechnicalsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.technicals);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.technicals);
});
```

## ListTermsAndConditions
You can execute the `ListTermsAndConditions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listTermsAndConditions(): QueryPromise<ListTermsAndConditionsData, undefined>;

interface ListTermsAndConditionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListTermsAndConditionsData, undefined>;
}
export const listTermsAndConditionsRef: ListTermsAndConditionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTermsAndConditions(dc: DataConnect): QueryPromise<ListTermsAndConditionsData, undefined>;

interface ListTermsAndConditionsRef {
  ...
  (dc: DataConnect): QueryRef<ListTermsAndConditionsData, undefined>;
}
export const listTermsAndConditionsRef: ListTermsAndConditionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTermsAndConditionsRef:
```typescript
const name = listTermsAndConditionsRef.operationName;
console.log(name);
```

### Variables
The `ListTermsAndConditions` query has no variables.
### Return Type
Recall that executing the `ListTermsAndConditions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTermsAndConditionsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListTermsAndConditionsData {
  termAndConditions: ({
    id: string;
    content: string;
    department?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & TermAndCondition_Key)[];
}
```
### Using `ListTermsAndConditions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTermsAndConditions } from '@edge2/dataconnect';


// Call the `listTermsAndConditions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTermsAndConditions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTermsAndConditions(dataConnect);

console.log(data.termAndConditions);

// Or, you can use the `Promise` API.
listTermsAndConditions().then((response) => {
  const data = response.data;
  console.log(data.termAndConditions);
});
```

### Using `ListTermsAndConditions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTermsAndConditionsRef } from '@edge2/dataconnect';


// Call the `listTermsAndConditionsRef()` function to get a reference to the query.
const ref = listTermsAndConditionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTermsAndConditionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.termAndConditions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.termAndConditions);
});
```

## ListHSNSACCodes
You can execute the `ListHSNSACCodes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listHsnsacCodes(): QueryPromise<ListHsnsacCodesData, undefined>;

interface ListHsnsacCodesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHsnsacCodesData, undefined>;
}
export const listHsnsacCodesRef: ListHsnsacCodesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHsnsacCodes(dc: DataConnect): QueryPromise<ListHsnsacCodesData, undefined>;

interface ListHsnsacCodesRef {
  ...
  (dc: DataConnect): QueryRef<ListHsnsacCodesData, undefined>;
}
export const listHsnsacCodesRef: ListHsnsacCodesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHsnsacCodesRef:
```typescript
const name = listHsnsacCodesRef.operationName;
console.log(name);
```

### Variables
The `ListHSNSACCodes` query has no variables.
### Return Type
Recall that executing the `ListHSNSACCodes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHsnsacCodesData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListHSNSACCodes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHsnsacCodes } from '@edge2/dataconnect';


// Call the `listHsnsacCodes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHsnsacCodes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHsnsacCodes(dataConnect);

console.log(data.hSNSACCodes);

// Or, you can use the `Promise` API.
listHsnsacCodes().then((response) => {
  const data = response.data;
  console.log(data.hSNSACCodes);
});
```

### Using `ListHSNSACCodes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHsnsacCodesRef } from '@edge2/dataconnect';


// Call the `listHsnsacCodesRef()` function to get a reference to the query.
const ref = listHsnsacCodesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHsnsacCodesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.hSNSACCodes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.hSNSACCodes);
});
```

## ListAppSettings
You can execute the `ListAppSettings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listAppSettings(): QueryPromise<ListAppSettingsData, undefined>;

interface ListAppSettingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAppSettingsData, undefined>;
}
export const listAppSettingsRef: ListAppSettingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAppSettings(dc: DataConnect): QueryPromise<ListAppSettingsData, undefined>;

interface ListAppSettingsRef {
  ...
  (dc: DataConnect): QueryRef<ListAppSettingsData, undefined>;
}
export const listAppSettingsRef: ListAppSettingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAppSettingsRef:
```typescript
const name = listAppSettingsRef.operationName;
console.log(name);
```

### Variables
The `ListAppSettings` query has no variables.
### Return Type
Recall that executing the `ListAppSettings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAppSettingsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAppSettingsData {
  appSettings: ({
    id: string;
    key: string;
    value?: unknown | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & AppSetting_Key)[];
}
```
### Using `ListAppSettings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAppSettings } from '@edge2/dataconnect';


// Call the `listAppSettings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAppSettings();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAppSettings(dataConnect);

console.log(data.appSettings);

// Or, you can use the `Promise` API.
listAppSettings().then((response) => {
  const data = response.data;
  console.log(data.appSettings);
});
```

### Using `ListAppSettings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAppSettingsRef } from '@edge2/dataconnect';


// Call the `listAppSettingsRef()` function to get a reference to the query.
const ref = listAppSettingsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAppSettingsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.appSettings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.appSettings);
});
```

## ListServiceUnitTypes
You can execute the `ListServiceUnitTypes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listServiceUnitTypes(): QueryPromise<ListServiceUnitTypesData, undefined>;

interface ListServiceUnitTypesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServiceUnitTypesData, undefined>;
}
export const listServiceUnitTypesRef: ListServiceUnitTypesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listServiceUnitTypes(dc: DataConnect): QueryPromise<ListServiceUnitTypesData, undefined>;

interface ListServiceUnitTypesRef {
  ...
  (dc: DataConnect): QueryRef<ListServiceUnitTypesData, undefined>;
}
export const listServiceUnitTypesRef: ListServiceUnitTypesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listServiceUnitTypesRef:
```typescript
const name = listServiceUnitTypesRef.operationName;
console.log(name);
```

### Variables
The `ListServiceUnitTypes` query has no variables.
### Return Type
Recall that executing the `ListServiceUnitTypes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListServiceUnitTypesData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListServiceUnitTypesData {
  serviceUnitTypes: ({
    id: string;
    unit: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } & ServiceUnitType_Key)[];
}
```
### Using `ListServiceUnitTypes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listServiceUnitTypes } from '@edge2/dataconnect';


// Call the `listServiceUnitTypes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listServiceUnitTypes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listServiceUnitTypes(dataConnect);

console.log(data.serviceUnitTypes);

// Or, you can use the `Promise` API.
listServiceUnitTypes().then((response) => {
  const data = response.data;
  console.log(data.serviceUnitTypes);
});
```

### Using `ListServiceUnitTypes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listServiceUnitTypesRef } from '@edge2/dataconnect';


// Call the `listServiceUnitTypesRef()` function to get a reference to the query.
const ref = listServiceUnitTypesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listServiceUnitTypesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.serviceUnitTypes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.serviceUnitTypes);
});
```

## ListClientServicePrices
You can execute the `ListClientServicePrices` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listClientServicePrices(): QueryPromise<ListClientServicePricesData, undefined>;

interface ListClientServicePricesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientServicePricesData, undefined>;
}
export const listClientServicePricesRef: ListClientServicePricesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClientServicePrices(dc: DataConnect): QueryPromise<ListClientServicePricesData, undefined>;

interface ListClientServicePricesRef {
  ...
  (dc: DataConnect): QueryRef<ListClientServicePricesData, undefined>;
}
export const listClientServicePricesRef: ListClientServicePricesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientServicePricesRef:
```typescript
const name = listClientServicePricesRef.operationName;
console.log(name);
```

### Variables
The `ListClientServicePrices` query has no variables.
### Return Type
Recall that executing the `ListClientServicePrices` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientServicePricesData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListClientServicePrices`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClientServicePrices } from '@edge2/dataconnect';


// Call the `listClientServicePrices()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClientServicePrices();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClientServicePrices(dataConnect);

console.log(data.clientServicePrices);

// Or, you can use the `Promise` API.
listClientServicePrices().then((response) => {
  const data = response.data;
  console.log(data.clientServicePrices);
});
```

### Using `ListClientServicePrices`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientServicePricesRef } from '@edge2/dataconnect';


// Call the `listClientServicePricesRef()` function to get a reference to the query.
const ref = listClientServicePricesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientServicePricesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientServicePrices);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientServicePrices);
});
```

## ListClientTestPrices
You can execute the `ListClientTestPrices` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listClientTestPrices(): QueryPromise<ListClientTestPricesData, undefined>;

interface ListClientTestPricesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListClientTestPricesData, undefined>;
}
export const listClientTestPricesRef: ListClientTestPricesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listClientTestPrices(dc: DataConnect): QueryPromise<ListClientTestPricesData, undefined>;

interface ListClientTestPricesRef {
  ...
  (dc: DataConnect): QueryRef<ListClientTestPricesData, undefined>;
}
export const listClientTestPricesRef: ListClientTestPricesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listClientTestPricesRef:
```typescript
const name = listClientTestPricesRef.operationName;
console.log(name);
```

### Variables
The `ListClientTestPrices` query has no variables.
### Return Type
Recall that executing the `ListClientTestPrices` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListClientTestPricesData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListClientTestPrices`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listClientTestPrices } from '@edge2/dataconnect';


// Call the `listClientTestPrices()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listClientTestPrices();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listClientTestPrices(dataConnect);

console.log(data.clientTestPrices);

// Or, you can use the `Promise` API.
listClientTestPrices().then((response) => {
  const data = response.data;
  console.log(data.clientTestPrices);
});
```

### Using `ListClientTestPrices`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listClientTestPricesRef } from '@edge2/dataconnect';


// Call the `listClientTestPricesRef()` function to get a reference to the query.
const ref = listClientTestPricesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listClientTestPricesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientTestPrices);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientTestPrices);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `main-connector` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## UpsertUser
You can execute the `UpsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertUserRef:
```typescript
const name = upsertUserRef.operationName;
console.log(name);
```

### Variables
The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertUserData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertUserData {
  user_upsert: User_Key;
}
```
### Using `UpsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertUser, UpsertUserVariables } from '@edge2/dataconnect';

// The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  id: ..., 
  username: ..., // optional
  fullName: ..., // optional
  role: ..., // optional
  department: ..., // optional
  isActive: ..., // optional
  type: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
  createdBy: ..., // optional
};

// Call the `upsertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertUser(upsertUserVars);
// Variables can be defined inline as well.
const { data } = await upsertUser({ id: ..., username: ..., fullName: ..., role: ..., department: ..., isActive: ..., type: ..., createdAt: ..., updatedAt: ..., createdBy: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertUser(dataConnect, upsertUserVars);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
upsertUser(upsertUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

### Using `UpsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertUserRef, UpsertUserVariables } from '@edge2/dataconnect';

// The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  id: ..., 
  username: ..., // optional
  fullName: ..., // optional
  role: ..., // optional
  department: ..., // optional
  isActive: ..., // optional
  type: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
  createdBy: ..., // optional
};

// Call the `upsertUserRef()` function to get a reference to the mutation.
const ref = upsertUserRef(upsertUserVars);
// Variables can be defined inline as well.
const ref = upsertUserRef({ id: ..., username: ..., fullName: ..., role: ..., department: ..., isActive: ..., type: ..., createdAt: ..., updatedAt: ..., createdBy: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertUserRef(dataConnect, upsertUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteUser(vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect, vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface DeleteUserRef {
  ...
  (dc: DataConnect, vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteUserVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser, DeleteUserVariables } from '@edge2/dataconnect';

// The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`:
const deleteUserVars: DeleteUserVariables = {
  id: ..., 
};

// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser(deleteUserVars);
// Variables can be defined inline as well.
const { data } = await deleteUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect, deleteUserVars);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser(deleteUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef, DeleteUserVariables } from '@edge2/dataconnect';

// The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`:
const deleteUserVars: DeleteUserVariables = {
  id: ..., 
};

// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef(deleteUserVars);
// Variables can be defined inline as well.
const ref = deleteUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect, deleteUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## UpsertClient
You can execute the `UpsertClient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertClient(vars: UpsertClientVariables): MutationPromise<UpsertClientData, UpsertClientVariables>;

interface UpsertClientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertClientVariables): MutationRef<UpsertClientData, UpsertClientVariables>;
}
export const upsertClientRef: UpsertClientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertClient(dc: DataConnect, vars: UpsertClientVariables): MutationPromise<UpsertClientData, UpsertClientVariables>;

interface UpsertClientRef {
  ...
  (dc: DataConnect, vars: UpsertClientVariables): MutationRef<UpsertClientData, UpsertClientVariables>;
}
export const upsertClientRef: UpsertClientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertClientRef:
```typescript
const name = upsertClientRef.operationName;
console.log(name);
```

### Variables
The `UpsertClient` mutation requires an argument of type `UpsertClientVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertClientVariables {
  id: string;
  clientName?: string | null;
  clientAddress?: string | null;
  contacts?: unknown | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertClient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertClientData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertClientData {
  client_upsert: Client_Key;
}
```
### Using `UpsertClient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertClient, UpsertClientVariables } from '@edge2/dataconnect';

// The `UpsertClient` mutation requires an argument of type `UpsertClientVariables`:
const upsertClientVars: UpsertClientVariables = {
  id: ..., 
  clientName: ..., // optional
  clientAddress: ..., // optional
  contacts: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertClient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertClient(upsertClientVars);
// Variables can be defined inline as well.
const { data } = await upsertClient({ id: ..., clientName: ..., clientAddress: ..., contacts: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertClient(dataConnect, upsertClientVars);

console.log(data.client_upsert);

// Or, you can use the `Promise` API.
upsertClient(upsertClientVars).then((response) => {
  const data = response.data;
  console.log(data.client_upsert);
});
```

### Using `UpsertClient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertClientRef, UpsertClientVariables } from '@edge2/dataconnect';

// The `UpsertClient` mutation requires an argument of type `UpsertClientVariables`:
const upsertClientVars: UpsertClientVariables = {
  id: ..., 
  clientName: ..., // optional
  clientAddress: ..., // optional
  contacts: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertClientRef()` function to get a reference to the mutation.
const ref = upsertClientRef(upsertClientVars);
// Variables can be defined inline as well.
const ref = upsertClientRef({ id: ..., clientName: ..., clientAddress: ..., contacts: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertClientRef(dataConnect, upsertClientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.client_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.client_upsert);
});
```

## DeleteClient
You can execute the `DeleteClient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteClient(vars: DeleteClientVariables): MutationPromise<DeleteClientData, DeleteClientVariables>;

interface DeleteClientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteClientVariables): MutationRef<DeleteClientData, DeleteClientVariables>;
}
export const deleteClientRef: DeleteClientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteClient(dc: DataConnect, vars: DeleteClientVariables): MutationPromise<DeleteClientData, DeleteClientVariables>;

interface DeleteClientRef {
  ...
  (dc: DataConnect, vars: DeleteClientVariables): MutationRef<DeleteClientData, DeleteClientVariables>;
}
export const deleteClientRef: DeleteClientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteClientRef:
```typescript
const name = deleteClientRef.operationName;
console.log(name);
```

### Variables
The `DeleteClient` mutation requires an argument of type `DeleteClientVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteClientVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteClient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteClientData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteClientData {
  client_delete?: Client_Key | null;
}
```
### Using `DeleteClient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteClient, DeleteClientVariables } from '@edge2/dataconnect';

// The `DeleteClient` mutation requires an argument of type `DeleteClientVariables`:
const deleteClientVars: DeleteClientVariables = {
  id: ..., 
};

// Call the `deleteClient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteClient(deleteClientVars);
// Variables can be defined inline as well.
const { data } = await deleteClient({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteClient(dataConnect, deleteClientVars);

console.log(data.client_delete);

// Or, you can use the `Promise` API.
deleteClient(deleteClientVars).then((response) => {
  const data = response.data;
  console.log(data.client_delete);
});
```

### Using `DeleteClient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteClientRef, DeleteClientVariables } from '@edge2/dataconnect';

// The `DeleteClient` mutation requires an argument of type `DeleteClientVariables`:
const deleteClientVars: DeleteClientVariables = {
  id: ..., 
};

// Call the `deleteClientRef()` function to get a reference to the mutation.
const ref = deleteClientRef(deleteClientVars);
// Variables can be defined inline as well.
const ref = deleteClientRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteClientRef(dataConnect, deleteClientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.client_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.client_delete);
});
```

## UpsertService
You can execute the `UpsertService` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertService(vars: UpsertServiceVariables): MutationPromise<UpsertServiceData, UpsertServiceVariables>;

interface UpsertServiceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertServiceVariables): MutationRef<UpsertServiceData, UpsertServiceVariables>;
}
export const upsertServiceRef: UpsertServiceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertService(dc: DataConnect, vars: UpsertServiceVariables): MutationPromise<UpsertServiceData, UpsertServiceVariables>;

interface UpsertServiceRef {
  ...
  (dc: DataConnect, vars: UpsertServiceVariables): MutationRef<UpsertServiceData, UpsertServiceVariables>;
}
export const upsertServiceRef: UpsertServiceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertServiceRef:
```typescript
const name = upsertServiceRef.operationName;
console.log(name);
```

### Variables
The `UpsertService` mutation requires an argument of type `UpsertServiceVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpsertService` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertServiceData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertServiceData {
  service_upsert: Service_Key;
}
```
### Using `UpsertService`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertService, UpsertServiceVariables } from '@edge2/dataconnect';

// The `UpsertService` mutation requires an argument of type `UpsertServiceVariables`:
const upsertServiceVars: UpsertServiceVariables = {
  id: ..., 
  serviceType: ..., // optional
  price: ..., // optional
  unit: ..., // optional
  qty: ..., // optional
  methodOfSampling: ..., // optional
  numBhs: ..., // optional
  measure: ..., // optional
  hsnCode: ..., // optional
  tcList: ..., // optional
  techList: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertService()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertService(upsertServiceVars);
// Variables can be defined inline as well.
const { data } = await upsertService({ id: ..., serviceType: ..., price: ..., unit: ..., qty: ..., methodOfSampling: ..., numBhs: ..., measure: ..., hsnCode: ..., tcList: ..., techList: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertService(dataConnect, upsertServiceVars);

console.log(data.service_upsert);

// Or, you can use the `Promise` API.
upsertService(upsertServiceVars).then((response) => {
  const data = response.data;
  console.log(data.service_upsert);
});
```

### Using `UpsertService`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertServiceRef, UpsertServiceVariables } from '@edge2/dataconnect';

// The `UpsertService` mutation requires an argument of type `UpsertServiceVariables`:
const upsertServiceVars: UpsertServiceVariables = {
  id: ..., 
  serviceType: ..., // optional
  price: ..., // optional
  unit: ..., // optional
  qty: ..., // optional
  methodOfSampling: ..., // optional
  numBhs: ..., // optional
  measure: ..., // optional
  hsnCode: ..., // optional
  tcList: ..., // optional
  techList: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertServiceRef()` function to get a reference to the mutation.
const ref = upsertServiceRef(upsertServiceVars);
// Variables can be defined inline as well.
const ref = upsertServiceRef({ id: ..., serviceType: ..., price: ..., unit: ..., qty: ..., methodOfSampling: ..., numBhs: ..., measure: ..., hsnCode: ..., tcList: ..., techList: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertServiceRef(dataConnect, upsertServiceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.service_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.service_upsert);
});
```

## DeleteService
You can execute the `DeleteService` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteService(vars: DeleteServiceVariables): MutationPromise<DeleteServiceData, DeleteServiceVariables>;

interface DeleteServiceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteServiceVariables): MutationRef<DeleteServiceData, DeleteServiceVariables>;
}
export const deleteServiceRef: DeleteServiceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteService(dc: DataConnect, vars: DeleteServiceVariables): MutationPromise<DeleteServiceData, DeleteServiceVariables>;

interface DeleteServiceRef {
  ...
  (dc: DataConnect, vars: DeleteServiceVariables): MutationRef<DeleteServiceData, DeleteServiceVariables>;
}
export const deleteServiceRef: DeleteServiceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteServiceRef:
```typescript
const name = deleteServiceRef.operationName;
console.log(name);
```

### Variables
The `DeleteService` mutation requires an argument of type `DeleteServiceVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteServiceVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteService` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteServiceData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteServiceData {
  service_delete?: Service_Key | null;
}
```
### Using `DeleteService`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteService, DeleteServiceVariables } from '@edge2/dataconnect';

// The `DeleteService` mutation requires an argument of type `DeleteServiceVariables`:
const deleteServiceVars: DeleteServiceVariables = {
  id: ..., 
};

// Call the `deleteService()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteService(deleteServiceVars);
// Variables can be defined inline as well.
const { data } = await deleteService({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteService(dataConnect, deleteServiceVars);

console.log(data.service_delete);

// Or, you can use the `Promise` API.
deleteService(deleteServiceVars).then((response) => {
  const data = response.data;
  console.log(data.service_delete);
});
```

### Using `DeleteService`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteServiceRef, DeleteServiceVariables } from '@edge2/dataconnect';

// The `DeleteService` mutation requires an argument of type `DeleteServiceVariables`:
const deleteServiceVars: DeleteServiceVariables = {
  id: ..., 
};

// Call the `deleteServiceRef()` function to get a reference to the mutation.
const ref = deleteServiceRef(deleteServiceVars);
// Variables can be defined inline as well.
const ref = deleteServiceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteServiceRef(dataConnect, deleteServiceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.service_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.service_delete);
});
```

## UpsertTest
You can execute the `UpsertTest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertTest(vars: UpsertTestVariables): MutationPromise<UpsertTestData, UpsertTestVariables>;

interface UpsertTestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertTestVariables): MutationRef<UpsertTestData, UpsertTestVariables>;
}
export const upsertTestRef: UpsertTestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertTest(dc: DataConnect, vars: UpsertTestVariables): MutationPromise<UpsertTestData, UpsertTestVariables>;

interface UpsertTestRef {
  ...
  (dc: DataConnect, vars: UpsertTestVariables): MutationRef<UpsertTestData, UpsertTestVariables>;
}
export const upsertTestRef: UpsertTestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertTestRef:
```typescript
const name = upsertTestRef.operationName;
console.log(name);
```

### Variables
The `UpsertTest` mutation requires an argument of type `UpsertTestVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpsertTest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertTestData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertTestData {
  test_upsert: Test_Key;
}
```
### Using `UpsertTest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertTest, UpsertTestVariables } from '@edge2/dataconnect';

// The `UpsertTest` mutation requires an argument of type `UpsertTestVariables`:
const upsertTestVars: UpsertTestVariables = {
  id: ..., 
  testType: ..., // optional
  materials: ..., // optional
  group: ..., // optional
  testMethodSpecification: ..., // optional
  numDays: ..., // optional
  price: ..., // optional
  hsnCode: ..., // optional
  tcList: ..., // optional
  techList: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertTest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertTest(upsertTestVars);
// Variables can be defined inline as well.
const { data } = await upsertTest({ id: ..., testType: ..., materials: ..., group: ..., testMethodSpecification: ..., numDays: ..., price: ..., hsnCode: ..., tcList: ..., techList: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertTest(dataConnect, upsertTestVars);

console.log(data.test_upsert);

// Or, you can use the `Promise` API.
upsertTest(upsertTestVars).then((response) => {
  const data = response.data;
  console.log(data.test_upsert);
});
```

### Using `UpsertTest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertTestRef, UpsertTestVariables } from '@edge2/dataconnect';

// The `UpsertTest` mutation requires an argument of type `UpsertTestVariables`:
const upsertTestVars: UpsertTestVariables = {
  id: ..., 
  testType: ..., // optional
  materials: ..., // optional
  group: ..., // optional
  testMethodSpecification: ..., // optional
  numDays: ..., // optional
  price: ..., // optional
  hsnCode: ..., // optional
  tcList: ..., // optional
  techList: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertTestRef()` function to get a reference to the mutation.
const ref = upsertTestRef(upsertTestVars);
// Variables can be defined inline as well.
const ref = upsertTestRef({ id: ..., testType: ..., materials: ..., group: ..., testMethodSpecification: ..., numDays: ..., price: ..., hsnCode: ..., tcList: ..., techList: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertTestRef(dataConnect, upsertTestVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.test_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.test_upsert);
});
```

## DeleteTest
You can execute the `DeleteTest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteTest(vars: DeleteTestVariables): MutationPromise<DeleteTestData, DeleteTestVariables>;

interface DeleteTestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTestVariables): MutationRef<DeleteTestData, DeleteTestVariables>;
}
export const deleteTestRef: DeleteTestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteTest(dc: DataConnect, vars: DeleteTestVariables): MutationPromise<DeleteTestData, DeleteTestVariables>;

interface DeleteTestRef {
  ...
  (dc: DataConnect, vars: DeleteTestVariables): MutationRef<DeleteTestData, DeleteTestVariables>;
}
export const deleteTestRef: DeleteTestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteTestRef:
```typescript
const name = deleteTestRef.operationName;
console.log(name);
```

### Variables
The `DeleteTest` mutation requires an argument of type `DeleteTestVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteTestVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteTest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteTestData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteTestData {
  test_delete?: Test_Key | null;
}
```
### Using `DeleteTest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteTest, DeleteTestVariables } from '@edge2/dataconnect';

// The `DeleteTest` mutation requires an argument of type `DeleteTestVariables`:
const deleteTestVars: DeleteTestVariables = {
  id: ..., 
};

// Call the `deleteTest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteTest(deleteTestVars);
// Variables can be defined inline as well.
const { data } = await deleteTest({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteTest(dataConnect, deleteTestVars);

console.log(data.test_delete);

// Or, you can use the `Promise` API.
deleteTest(deleteTestVars).then((response) => {
  const data = response.data;
  console.log(data.test_delete);
});
```

### Using `DeleteTest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteTestRef, DeleteTestVariables } from '@edge2/dataconnect';

// The `DeleteTest` mutation requires an argument of type `DeleteTestVariables`:
const deleteTestVars: DeleteTestVariables = {
  id: ..., 
};

// Call the `deleteTestRef()` function to get a reference to the mutation.
const ref = deleteTestRef(deleteTestVars);
// Variables can be defined inline as well.
const ref = deleteTestRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteTestRef(dataConnect, deleteTestVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.test_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.test_delete);
});
```

## UpsertJob
You can execute the `UpsertJob` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertJob(vars: UpsertJobVariables): MutationPromise<UpsertJobData, UpsertJobVariables>;

interface UpsertJobRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertJobVariables): MutationRef<UpsertJobData, UpsertJobVariables>;
}
export const upsertJobRef: UpsertJobRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertJob(dc: DataConnect, vars: UpsertJobVariables): MutationPromise<UpsertJobData, UpsertJobVariables>;

interface UpsertJobRef {
  ...
  (dc: DataConnect, vars: UpsertJobVariables): MutationRef<UpsertJobData, UpsertJobVariables>;
}
export const upsertJobRef: UpsertJobRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertJobRef:
```typescript
const name = upsertJobRef.operationName;
console.log(name);
```

### Variables
The `UpsertJob` mutation requires an argument of type `UpsertJobVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpsertJob` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertJobData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertJobData {
  job_upsert: Job_Key;
}
```
### Using `UpsertJob`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertJob, UpsertJobVariables } from '@edge2/dataconnect';

// The `UpsertJob` mutation requires an argument of type `UpsertJobVariables`:
const upsertJobVars: UpsertJobVariables = {
  id: ..., 
  type: ..., // optional
  status: ..., // optional
  jobOrderNo: ..., // optional
  clientId: ..., // optional
  clientName: ..., // optional
  projectName: ..., // optional
  poWoNumber: ..., // optional
  materialInward: ..., // optional
  labTestResults: ..., // optional
  chemicalAnalysis: ..., // optional
  grainSizeAnalysis: ..., // optional
  content: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
  createdBy: ..., // optional
  updatedBy: ..., // optional
};

// Call the `upsertJob()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertJob(upsertJobVars);
// Variables can be defined inline as well.
const { data } = await upsertJob({ id: ..., type: ..., status: ..., jobOrderNo: ..., clientId: ..., clientName: ..., projectName: ..., poWoNumber: ..., materialInward: ..., labTestResults: ..., chemicalAnalysis: ..., grainSizeAnalysis: ..., content: ..., createdAt: ..., updatedAt: ..., createdBy: ..., updatedBy: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertJob(dataConnect, upsertJobVars);

console.log(data.job_upsert);

// Or, you can use the `Promise` API.
upsertJob(upsertJobVars).then((response) => {
  const data = response.data;
  console.log(data.job_upsert);
});
```

### Using `UpsertJob`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertJobRef, UpsertJobVariables } from '@edge2/dataconnect';

// The `UpsertJob` mutation requires an argument of type `UpsertJobVariables`:
const upsertJobVars: UpsertJobVariables = {
  id: ..., 
  type: ..., // optional
  status: ..., // optional
  jobOrderNo: ..., // optional
  clientId: ..., // optional
  clientName: ..., // optional
  projectName: ..., // optional
  poWoNumber: ..., // optional
  materialInward: ..., // optional
  labTestResults: ..., // optional
  chemicalAnalysis: ..., // optional
  grainSizeAnalysis: ..., // optional
  content: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
  createdBy: ..., // optional
  updatedBy: ..., // optional
};

// Call the `upsertJobRef()` function to get a reference to the mutation.
const ref = upsertJobRef(upsertJobVars);
// Variables can be defined inline as well.
const ref = upsertJobRef({ id: ..., type: ..., status: ..., jobOrderNo: ..., clientId: ..., clientName: ..., projectName: ..., poWoNumber: ..., materialInward: ..., labTestResults: ..., chemicalAnalysis: ..., grainSizeAnalysis: ..., content: ..., createdAt: ..., updatedAt: ..., createdBy: ..., updatedBy: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertJobRef(dataConnect, upsertJobVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.job_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.job_upsert);
});
```

## DeleteJob
You can execute the `DeleteJob` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteJob(vars: DeleteJobVariables): MutationPromise<DeleteJobData, DeleteJobVariables>;

interface DeleteJobRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteJobVariables): MutationRef<DeleteJobData, DeleteJobVariables>;
}
export const deleteJobRef: DeleteJobRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteJob(dc: DataConnect, vars: DeleteJobVariables): MutationPromise<DeleteJobData, DeleteJobVariables>;

interface DeleteJobRef {
  ...
  (dc: DataConnect, vars: DeleteJobVariables): MutationRef<DeleteJobData, DeleteJobVariables>;
}
export const deleteJobRef: DeleteJobRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteJobRef:
```typescript
const name = deleteJobRef.operationName;
console.log(name);
```

### Variables
The `DeleteJob` mutation requires an argument of type `DeleteJobVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteJobVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteJob` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteJobData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteJobData {
  job_delete?: Job_Key | null;
}
```
### Using `DeleteJob`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteJob, DeleteJobVariables } from '@edge2/dataconnect';

// The `DeleteJob` mutation requires an argument of type `DeleteJobVariables`:
const deleteJobVars: DeleteJobVariables = {
  id: ..., 
};

// Call the `deleteJob()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteJob(deleteJobVars);
// Variables can be defined inline as well.
const { data } = await deleteJob({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteJob(dataConnect, deleteJobVars);

console.log(data.job_delete);

// Or, you can use the `Promise` API.
deleteJob(deleteJobVars).then((response) => {
  const data = response.data;
  console.log(data.job_delete);
});
```

### Using `DeleteJob`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteJobRef, DeleteJobVariables } from '@edge2/dataconnect';

// The `DeleteJob` mutation requires an argument of type `DeleteJobVariables`:
const deleteJobVars: DeleteJobVariables = {
  id: ..., 
};

// Call the `deleteJobRef()` function to get a reference to the mutation.
const ref = deleteJobRef(deleteJobVars);
// Variables can be defined inline as well.
const ref = deleteJobRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteJobRef(dataConnect, deleteJobVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.job_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.job_delete);
});
```

## UpsertTechnical
You can execute the `UpsertTechnical` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertTechnical(vars: UpsertTechnicalVariables): MutationPromise<UpsertTechnicalData, UpsertTechnicalVariables>;

interface UpsertTechnicalRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertTechnicalVariables): MutationRef<UpsertTechnicalData, UpsertTechnicalVariables>;
}
export const upsertTechnicalRef: UpsertTechnicalRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertTechnical(dc: DataConnect, vars: UpsertTechnicalVariables): MutationPromise<UpsertTechnicalData, UpsertTechnicalVariables>;

interface UpsertTechnicalRef {
  ...
  (dc: DataConnect, vars: UpsertTechnicalVariables): MutationRef<UpsertTechnicalData, UpsertTechnicalVariables>;
}
export const upsertTechnicalRef: UpsertTechnicalRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertTechnicalRef:
```typescript
const name = upsertTechnicalRef.operationName;
console.log(name);
```

### Variables
The `UpsertTechnical` mutation requires an argument of type `UpsertTechnicalVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertTechnicalVariables {
  id: string;
  name?: string | null;
  designation?: string | null;
  department?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertTechnical` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertTechnicalData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertTechnicalData {
  technical_upsert: Technical_Key;
}
```
### Using `UpsertTechnical`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertTechnical, UpsertTechnicalVariables } from '@edge2/dataconnect';

// The `UpsertTechnical` mutation requires an argument of type `UpsertTechnicalVariables`:
const upsertTechnicalVars: UpsertTechnicalVariables = {
  id: ..., 
  name: ..., // optional
  designation: ..., // optional
  department: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertTechnical()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertTechnical(upsertTechnicalVars);
// Variables can be defined inline as well.
const { data } = await upsertTechnical({ id: ..., name: ..., designation: ..., department: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertTechnical(dataConnect, upsertTechnicalVars);

console.log(data.technical_upsert);

// Or, you can use the `Promise` API.
upsertTechnical(upsertTechnicalVars).then((response) => {
  const data = response.data;
  console.log(data.technical_upsert);
});
```

### Using `UpsertTechnical`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertTechnicalRef, UpsertTechnicalVariables } from '@edge2/dataconnect';

// The `UpsertTechnical` mutation requires an argument of type `UpsertTechnicalVariables`:
const upsertTechnicalVars: UpsertTechnicalVariables = {
  id: ..., 
  name: ..., // optional
  designation: ..., // optional
  department: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertTechnicalRef()` function to get a reference to the mutation.
const ref = upsertTechnicalRef(upsertTechnicalVars);
// Variables can be defined inline as well.
const ref = upsertTechnicalRef({ id: ..., name: ..., designation: ..., department: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertTechnicalRef(dataConnect, upsertTechnicalVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.technical_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.technical_upsert);
});
```

## DeleteTechnical
You can execute the `DeleteTechnical` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteTechnical(vars: DeleteTechnicalVariables): MutationPromise<DeleteTechnicalData, DeleteTechnicalVariables>;

interface DeleteTechnicalRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTechnicalVariables): MutationRef<DeleteTechnicalData, DeleteTechnicalVariables>;
}
export const deleteTechnicalRef: DeleteTechnicalRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteTechnical(dc: DataConnect, vars: DeleteTechnicalVariables): MutationPromise<DeleteTechnicalData, DeleteTechnicalVariables>;

interface DeleteTechnicalRef {
  ...
  (dc: DataConnect, vars: DeleteTechnicalVariables): MutationRef<DeleteTechnicalData, DeleteTechnicalVariables>;
}
export const deleteTechnicalRef: DeleteTechnicalRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteTechnicalRef:
```typescript
const name = deleteTechnicalRef.operationName;
console.log(name);
```

### Variables
The `DeleteTechnical` mutation requires an argument of type `DeleteTechnicalVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteTechnicalVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteTechnical` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteTechnicalData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteTechnicalData {
  technical_delete?: Technical_Key | null;
}
```
### Using `DeleteTechnical`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteTechnical, DeleteTechnicalVariables } from '@edge2/dataconnect';

// The `DeleteTechnical` mutation requires an argument of type `DeleteTechnicalVariables`:
const deleteTechnicalVars: DeleteTechnicalVariables = {
  id: ..., 
};

// Call the `deleteTechnical()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteTechnical(deleteTechnicalVars);
// Variables can be defined inline as well.
const { data } = await deleteTechnical({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteTechnical(dataConnect, deleteTechnicalVars);

console.log(data.technical_delete);

// Or, you can use the `Promise` API.
deleteTechnical(deleteTechnicalVars).then((response) => {
  const data = response.data;
  console.log(data.technical_delete);
});
```

### Using `DeleteTechnical`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteTechnicalRef, DeleteTechnicalVariables } from '@edge2/dataconnect';

// The `DeleteTechnical` mutation requires an argument of type `DeleteTechnicalVariables`:
const deleteTechnicalVars: DeleteTechnicalVariables = {
  id: ..., 
};

// Call the `deleteTechnicalRef()` function to get a reference to the mutation.
const ref = deleteTechnicalRef(deleteTechnicalVars);
// Variables can be defined inline as well.
const ref = deleteTechnicalRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteTechnicalRef(dataConnect, deleteTechnicalVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.technical_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.technical_delete);
});
```

## UpsertTermAndCondition
You can execute the `UpsertTermAndCondition` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertTermAndCondition(vars: UpsertTermAndConditionVariables): MutationPromise<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;

interface UpsertTermAndConditionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertTermAndConditionVariables): MutationRef<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;
}
export const upsertTermAndConditionRef: UpsertTermAndConditionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertTermAndCondition(dc: DataConnect, vars: UpsertTermAndConditionVariables): MutationPromise<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;

interface UpsertTermAndConditionRef {
  ...
  (dc: DataConnect, vars: UpsertTermAndConditionVariables): MutationRef<UpsertTermAndConditionData, UpsertTermAndConditionVariables>;
}
export const upsertTermAndConditionRef: UpsertTermAndConditionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertTermAndConditionRef:
```typescript
const name = upsertTermAndConditionRef.operationName;
console.log(name);
```

### Variables
The `UpsertTermAndCondition` mutation requires an argument of type `UpsertTermAndConditionVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertTermAndConditionVariables {
  id: string;
  content?: string | null;
  department?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertTermAndCondition` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertTermAndConditionData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertTermAndConditionData {
  termAndCondition_upsert: TermAndCondition_Key;
}
```
### Using `UpsertTermAndCondition`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertTermAndCondition, UpsertTermAndConditionVariables } from '@edge2/dataconnect';

// The `UpsertTermAndCondition` mutation requires an argument of type `UpsertTermAndConditionVariables`:
const upsertTermAndConditionVars: UpsertTermAndConditionVariables = {
  id: ..., 
  content: ..., // optional
  department: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertTermAndCondition()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertTermAndCondition(upsertTermAndConditionVars);
// Variables can be defined inline as well.
const { data } = await upsertTermAndCondition({ id: ..., content: ..., department: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertTermAndCondition(dataConnect, upsertTermAndConditionVars);

console.log(data.termAndCondition_upsert);

// Or, you can use the `Promise` API.
upsertTermAndCondition(upsertTermAndConditionVars).then((response) => {
  const data = response.data;
  console.log(data.termAndCondition_upsert);
});
```

### Using `UpsertTermAndCondition`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertTermAndConditionRef, UpsertTermAndConditionVariables } from '@edge2/dataconnect';

// The `UpsertTermAndCondition` mutation requires an argument of type `UpsertTermAndConditionVariables`:
const upsertTermAndConditionVars: UpsertTermAndConditionVariables = {
  id: ..., 
  content: ..., // optional
  department: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertTermAndConditionRef()` function to get a reference to the mutation.
const ref = upsertTermAndConditionRef(upsertTermAndConditionVars);
// Variables can be defined inline as well.
const ref = upsertTermAndConditionRef({ id: ..., content: ..., department: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertTermAndConditionRef(dataConnect, upsertTermAndConditionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.termAndCondition_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.termAndCondition_upsert);
});
```

## DeleteTermAndCondition
You can execute the `DeleteTermAndCondition` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteTermAndCondition(vars: DeleteTermAndConditionVariables): MutationPromise<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;

interface DeleteTermAndConditionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTermAndConditionVariables): MutationRef<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;
}
export const deleteTermAndConditionRef: DeleteTermAndConditionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteTermAndCondition(dc: DataConnect, vars: DeleteTermAndConditionVariables): MutationPromise<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;

interface DeleteTermAndConditionRef {
  ...
  (dc: DataConnect, vars: DeleteTermAndConditionVariables): MutationRef<DeleteTermAndConditionData, DeleteTermAndConditionVariables>;
}
export const deleteTermAndConditionRef: DeleteTermAndConditionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteTermAndConditionRef:
```typescript
const name = deleteTermAndConditionRef.operationName;
console.log(name);
```

### Variables
The `DeleteTermAndCondition` mutation requires an argument of type `DeleteTermAndConditionVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteTermAndConditionVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteTermAndCondition` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteTermAndConditionData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteTermAndConditionData {
  termAndCondition_delete?: TermAndCondition_Key | null;
}
```
### Using `DeleteTermAndCondition`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteTermAndCondition, DeleteTermAndConditionVariables } from '@edge2/dataconnect';

// The `DeleteTermAndCondition` mutation requires an argument of type `DeleteTermAndConditionVariables`:
const deleteTermAndConditionVars: DeleteTermAndConditionVariables = {
  id: ..., 
};

// Call the `deleteTermAndCondition()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteTermAndCondition(deleteTermAndConditionVars);
// Variables can be defined inline as well.
const { data } = await deleteTermAndCondition({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteTermAndCondition(dataConnect, deleteTermAndConditionVars);

console.log(data.termAndCondition_delete);

// Or, you can use the `Promise` API.
deleteTermAndCondition(deleteTermAndConditionVars).then((response) => {
  const data = response.data;
  console.log(data.termAndCondition_delete);
});
```

### Using `DeleteTermAndCondition`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteTermAndConditionRef, DeleteTermAndConditionVariables } from '@edge2/dataconnect';

// The `DeleteTermAndCondition` mutation requires an argument of type `DeleteTermAndConditionVariables`:
const deleteTermAndConditionVars: DeleteTermAndConditionVariables = {
  id: ..., 
};

// Call the `deleteTermAndConditionRef()` function to get a reference to the mutation.
const ref = deleteTermAndConditionRef(deleteTermAndConditionVars);
// Variables can be defined inline as well.
const ref = deleteTermAndConditionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteTermAndConditionRef(dataConnect, deleteTermAndConditionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.termAndCondition_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.termAndCondition_delete);
});
```

## UpsertHSNSACCode
You can execute the `UpsertHSNSACCode` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertHsnsacCode(vars: UpsertHsnsacCodeVariables): MutationPromise<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;

interface UpsertHsnsacCodeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertHsnsacCodeVariables): MutationRef<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;
}
export const upsertHsnsacCodeRef: UpsertHsnsacCodeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertHsnsacCode(dc: DataConnect, vars: UpsertHsnsacCodeVariables): MutationPromise<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;

interface UpsertHsnsacCodeRef {
  ...
  (dc: DataConnect, vars: UpsertHsnsacCodeVariables): MutationRef<UpsertHsnsacCodeData, UpsertHsnsacCodeVariables>;
}
export const upsertHsnsacCodeRef: UpsertHsnsacCodeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertHsnsacCodeRef:
```typescript
const name = upsertHsnsacCodeRef.operationName;
console.log(name);
```

### Variables
The `UpsertHSNSACCode` mutation requires an argument of type `UpsertHsnsacCodeVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertHsnsacCodeVariables {
  id: string;
  code?: string | null;
  description?: string | null;
  taxRate?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertHSNSACCode` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertHsnsacCodeData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertHsnsacCodeData {
  hSNSACCode_upsert: HSNSACCode_Key;
}
```
### Using `UpsertHSNSACCode`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertHsnsacCode, UpsertHsnsacCodeVariables } from '@edge2/dataconnect';

// The `UpsertHSNSACCode` mutation requires an argument of type `UpsertHsnsacCodeVariables`:
const upsertHsnsacCodeVars: UpsertHsnsacCodeVariables = {
  id: ..., 
  code: ..., // optional
  description: ..., // optional
  taxRate: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertHsnsacCode()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertHsnsacCode(upsertHsnsacCodeVars);
// Variables can be defined inline as well.
const { data } = await upsertHsnsacCode({ id: ..., code: ..., description: ..., taxRate: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertHsnsacCode(dataConnect, upsertHsnsacCodeVars);

console.log(data.hSNSACCode_upsert);

// Or, you can use the `Promise` API.
upsertHsnsacCode(upsertHsnsacCodeVars).then((response) => {
  const data = response.data;
  console.log(data.hSNSACCode_upsert);
});
```

### Using `UpsertHSNSACCode`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertHsnsacCodeRef, UpsertHsnsacCodeVariables } from '@edge2/dataconnect';

// The `UpsertHSNSACCode` mutation requires an argument of type `UpsertHsnsacCodeVariables`:
const upsertHsnsacCodeVars: UpsertHsnsacCodeVariables = {
  id: ..., 
  code: ..., // optional
  description: ..., // optional
  taxRate: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertHsnsacCodeRef()` function to get a reference to the mutation.
const ref = upsertHsnsacCodeRef(upsertHsnsacCodeVars);
// Variables can be defined inline as well.
const ref = upsertHsnsacCodeRef({ id: ..., code: ..., description: ..., taxRate: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertHsnsacCodeRef(dataConnect, upsertHsnsacCodeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.hSNSACCode_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.hSNSACCode_upsert);
});
```

## DeleteHSNSACCode
You can execute the `DeleteHSNSACCode` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteHsnsacCode(vars: DeleteHsnsacCodeVariables): MutationPromise<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;

interface DeleteHsnsacCodeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHsnsacCodeVariables): MutationRef<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;
}
export const deleteHsnsacCodeRef: DeleteHsnsacCodeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteHsnsacCode(dc: DataConnect, vars: DeleteHsnsacCodeVariables): MutationPromise<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;

interface DeleteHsnsacCodeRef {
  ...
  (dc: DataConnect, vars: DeleteHsnsacCodeVariables): MutationRef<DeleteHsnsacCodeData, DeleteHsnsacCodeVariables>;
}
export const deleteHsnsacCodeRef: DeleteHsnsacCodeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteHsnsacCodeRef:
```typescript
const name = deleteHsnsacCodeRef.operationName;
console.log(name);
```

### Variables
The `DeleteHSNSACCode` mutation requires an argument of type `DeleteHsnsacCodeVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteHsnsacCodeVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteHSNSACCode` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteHsnsacCodeData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteHsnsacCodeData {
  hSNSACCode_delete?: HSNSACCode_Key | null;
}
```
### Using `DeleteHSNSACCode`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteHsnsacCode, DeleteHsnsacCodeVariables } from '@edge2/dataconnect';

// The `DeleteHSNSACCode` mutation requires an argument of type `DeleteHsnsacCodeVariables`:
const deleteHsnsacCodeVars: DeleteHsnsacCodeVariables = {
  id: ..., 
};

// Call the `deleteHsnsacCode()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteHsnsacCode(deleteHsnsacCodeVars);
// Variables can be defined inline as well.
const { data } = await deleteHsnsacCode({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteHsnsacCode(dataConnect, deleteHsnsacCodeVars);

console.log(data.hSNSACCode_delete);

// Or, you can use the `Promise` API.
deleteHsnsacCode(deleteHsnsacCodeVars).then((response) => {
  const data = response.data;
  console.log(data.hSNSACCode_delete);
});
```

### Using `DeleteHSNSACCode`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteHsnsacCodeRef, DeleteHsnsacCodeVariables } from '@edge2/dataconnect';

// The `DeleteHSNSACCode` mutation requires an argument of type `DeleteHsnsacCodeVariables`:
const deleteHsnsacCodeVars: DeleteHsnsacCodeVariables = {
  id: ..., 
};

// Call the `deleteHsnsacCodeRef()` function to get a reference to the mutation.
const ref = deleteHsnsacCodeRef(deleteHsnsacCodeVars);
// Variables can be defined inline as well.
const ref = deleteHsnsacCodeRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteHsnsacCodeRef(dataConnect, deleteHsnsacCodeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.hSNSACCode_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.hSNSACCode_delete);
});
```

## UpsertAppSetting
You can execute the `UpsertAppSetting` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertAppSetting(vars: UpsertAppSettingVariables): MutationPromise<UpsertAppSettingData, UpsertAppSettingVariables>;

interface UpsertAppSettingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertAppSettingVariables): MutationRef<UpsertAppSettingData, UpsertAppSettingVariables>;
}
export const upsertAppSettingRef: UpsertAppSettingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertAppSetting(dc: DataConnect, vars: UpsertAppSettingVariables): MutationPromise<UpsertAppSettingData, UpsertAppSettingVariables>;

interface UpsertAppSettingRef {
  ...
  (dc: DataConnect, vars: UpsertAppSettingVariables): MutationRef<UpsertAppSettingData, UpsertAppSettingVariables>;
}
export const upsertAppSettingRef: UpsertAppSettingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertAppSettingRef:
```typescript
const name = upsertAppSettingRef.operationName;
console.log(name);
```

### Variables
The `UpsertAppSetting` mutation requires an argument of type `UpsertAppSettingVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertAppSettingVariables {
  id: string;
  key?: string | null;
  value?: unknown | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertAppSetting` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertAppSettingData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertAppSettingData {
  appSetting_upsert: AppSetting_Key;
}
```
### Using `UpsertAppSetting`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertAppSetting, UpsertAppSettingVariables } from '@edge2/dataconnect';

// The `UpsertAppSetting` mutation requires an argument of type `UpsertAppSettingVariables`:
const upsertAppSettingVars: UpsertAppSettingVariables = {
  id: ..., 
  key: ..., // optional
  value: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertAppSetting()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertAppSetting(upsertAppSettingVars);
// Variables can be defined inline as well.
const { data } = await upsertAppSetting({ id: ..., key: ..., value: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertAppSetting(dataConnect, upsertAppSettingVars);

console.log(data.appSetting_upsert);

// Or, you can use the `Promise` API.
upsertAppSetting(upsertAppSettingVars).then((response) => {
  const data = response.data;
  console.log(data.appSetting_upsert);
});
```

### Using `UpsertAppSetting`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertAppSettingRef, UpsertAppSettingVariables } from '@edge2/dataconnect';

// The `UpsertAppSetting` mutation requires an argument of type `UpsertAppSettingVariables`:
const upsertAppSettingVars: UpsertAppSettingVariables = {
  id: ..., 
  key: ..., // optional
  value: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertAppSettingRef()` function to get a reference to the mutation.
const ref = upsertAppSettingRef(upsertAppSettingVars);
// Variables can be defined inline as well.
const ref = upsertAppSettingRef({ id: ..., key: ..., value: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertAppSettingRef(dataConnect, upsertAppSettingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.appSetting_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.appSetting_upsert);
});
```

## DeleteAppSetting
You can execute the `DeleteAppSetting` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteAppSetting(vars: DeleteAppSettingVariables): MutationPromise<DeleteAppSettingData, DeleteAppSettingVariables>;

interface DeleteAppSettingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAppSettingVariables): MutationRef<DeleteAppSettingData, DeleteAppSettingVariables>;
}
export const deleteAppSettingRef: DeleteAppSettingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAppSetting(dc: DataConnect, vars: DeleteAppSettingVariables): MutationPromise<DeleteAppSettingData, DeleteAppSettingVariables>;

interface DeleteAppSettingRef {
  ...
  (dc: DataConnect, vars: DeleteAppSettingVariables): MutationRef<DeleteAppSettingData, DeleteAppSettingVariables>;
}
export const deleteAppSettingRef: DeleteAppSettingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAppSettingRef:
```typescript
const name = deleteAppSettingRef.operationName;
console.log(name);
```

### Variables
The `DeleteAppSetting` mutation requires an argument of type `DeleteAppSettingVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteAppSettingVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteAppSetting` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAppSettingData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAppSettingData {
  appSetting_delete?: AppSetting_Key | null;
}
```
### Using `DeleteAppSetting`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAppSetting, DeleteAppSettingVariables } from '@edge2/dataconnect';

// The `DeleteAppSetting` mutation requires an argument of type `DeleteAppSettingVariables`:
const deleteAppSettingVars: DeleteAppSettingVariables = {
  id: ..., 
};

// Call the `deleteAppSetting()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAppSetting(deleteAppSettingVars);
// Variables can be defined inline as well.
const { data } = await deleteAppSetting({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAppSetting(dataConnect, deleteAppSettingVars);

console.log(data.appSetting_delete);

// Or, you can use the `Promise` API.
deleteAppSetting(deleteAppSettingVars).then((response) => {
  const data = response.data;
  console.log(data.appSetting_delete);
});
```

### Using `DeleteAppSetting`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAppSettingRef, DeleteAppSettingVariables } from '@edge2/dataconnect';

// The `DeleteAppSetting` mutation requires an argument of type `DeleteAppSettingVariables`:
const deleteAppSettingVars: DeleteAppSettingVariables = {
  id: ..., 
};

// Call the `deleteAppSettingRef()` function to get a reference to the mutation.
const ref = deleteAppSettingRef(deleteAppSettingVars);
// Variables can be defined inline as well.
const ref = deleteAppSettingRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAppSettingRef(dataConnect, deleteAppSettingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.appSetting_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.appSetting_delete);
});
```

## UpsertServiceUnitType
You can execute the `UpsertServiceUnitType` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertServiceUnitType(vars: UpsertServiceUnitTypeVariables): MutationPromise<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;

interface UpsertServiceUnitTypeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertServiceUnitTypeVariables): MutationRef<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;
}
export const upsertServiceUnitTypeRef: UpsertServiceUnitTypeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertServiceUnitType(dc: DataConnect, vars: UpsertServiceUnitTypeVariables): MutationPromise<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;

interface UpsertServiceUnitTypeRef {
  ...
  (dc: DataConnect, vars: UpsertServiceUnitTypeVariables): MutationRef<UpsertServiceUnitTypeData, UpsertServiceUnitTypeVariables>;
}
export const upsertServiceUnitTypeRef: UpsertServiceUnitTypeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertServiceUnitTypeRef:
```typescript
const name = upsertServiceUnitTypeRef.operationName;
console.log(name);
```

### Variables
The `UpsertServiceUnitType` mutation requires an argument of type `UpsertServiceUnitTypeVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertServiceUnitTypeVariables {
  id: string;
  unit?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertServiceUnitType` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertServiceUnitTypeData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertServiceUnitTypeData {
  serviceUnitType_upsert: ServiceUnitType_Key;
}
```
### Using `UpsertServiceUnitType`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertServiceUnitType, UpsertServiceUnitTypeVariables } from '@edge2/dataconnect';

// The `UpsertServiceUnitType` mutation requires an argument of type `UpsertServiceUnitTypeVariables`:
const upsertServiceUnitTypeVars: UpsertServiceUnitTypeVariables = {
  id: ..., 
  unit: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertServiceUnitType()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertServiceUnitType(upsertServiceUnitTypeVars);
// Variables can be defined inline as well.
const { data } = await upsertServiceUnitType({ id: ..., unit: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertServiceUnitType(dataConnect, upsertServiceUnitTypeVars);

console.log(data.serviceUnitType_upsert);

// Or, you can use the `Promise` API.
upsertServiceUnitType(upsertServiceUnitTypeVars).then((response) => {
  const data = response.data;
  console.log(data.serviceUnitType_upsert);
});
```

### Using `UpsertServiceUnitType`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertServiceUnitTypeRef, UpsertServiceUnitTypeVariables } from '@edge2/dataconnect';

// The `UpsertServiceUnitType` mutation requires an argument of type `UpsertServiceUnitTypeVariables`:
const upsertServiceUnitTypeVars: UpsertServiceUnitTypeVariables = {
  id: ..., 
  unit: ..., // optional
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertServiceUnitTypeRef()` function to get a reference to the mutation.
const ref = upsertServiceUnitTypeRef(upsertServiceUnitTypeVars);
// Variables can be defined inline as well.
const ref = upsertServiceUnitTypeRef({ id: ..., unit: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertServiceUnitTypeRef(dataConnect, upsertServiceUnitTypeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.serviceUnitType_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.serviceUnitType_upsert);
});
```

## DeleteServiceUnitType
You can execute the `DeleteServiceUnitType` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteServiceUnitType(vars: DeleteServiceUnitTypeVariables): MutationPromise<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;

interface DeleteServiceUnitTypeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteServiceUnitTypeVariables): MutationRef<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;
}
export const deleteServiceUnitTypeRef: DeleteServiceUnitTypeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteServiceUnitType(dc: DataConnect, vars: DeleteServiceUnitTypeVariables): MutationPromise<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;

interface DeleteServiceUnitTypeRef {
  ...
  (dc: DataConnect, vars: DeleteServiceUnitTypeVariables): MutationRef<DeleteServiceUnitTypeData, DeleteServiceUnitTypeVariables>;
}
export const deleteServiceUnitTypeRef: DeleteServiceUnitTypeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteServiceUnitTypeRef:
```typescript
const name = deleteServiceUnitTypeRef.operationName;
console.log(name);
```

### Variables
The `DeleteServiceUnitType` mutation requires an argument of type `DeleteServiceUnitTypeVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteServiceUnitTypeVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteServiceUnitType` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteServiceUnitTypeData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteServiceUnitTypeData {
  serviceUnitType_delete?: ServiceUnitType_Key | null;
}
```
### Using `DeleteServiceUnitType`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteServiceUnitType, DeleteServiceUnitTypeVariables } from '@edge2/dataconnect';

// The `DeleteServiceUnitType` mutation requires an argument of type `DeleteServiceUnitTypeVariables`:
const deleteServiceUnitTypeVars: DeleteServiceUnitTypeVariables = {
  id: ..., 
};

// Call the `deleteServiceUnitType()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteServiceUnitType(deleteServiceUnitTypeVars);
// Variables can be defined inline as well.
const { data } = await deleteServiceUnitType({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteServiceUnitType(dataConnect, deleteServiceUnitTypeVars);

console.log(data.serviceUnitType_delete);

// Or, you can use the `Promise` API.
deleteServiceUnitType(deleteServiceUnitTypeVars).then((response) => {
  const data = response.data;
  console.log(data.serviceUnitType_delete);
});
```

### Using `DeleteServiceUnitType`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteServiceUnitTypeRef, DeleteServiceUnitTypeVariables } from '@edge2/dataconnect';

// The `DeleteServiceUnitType` mutation requires an argument of type `DeleteServiceUnitTypeVariables`:
const deleteServiceUnitTypeVars: DeleteServiceUnitTypeVariables = {
  id: ..., 
};

// Call the `deleteServiceUnitTypeRef()` function to get a reference to the mutation.
const ref = deleteServiceUnitTypeRef(deleteServiceUnitTypeVars);
// Variables can be defined inline as well.
const ref = deleteServiceUnitTypeRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteServiceUnitTypeRef(dataConnect, deleteServiceUnitTypeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.serviceUnitType_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.serviceUnitType_delete);
});
```

## UpsertClientServicePrice
You can execute the `UpsertClientServicePrice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertClientServicePrice(vars: UpsertClientServicePriceVariables): MutationPromise<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;

interface UpsertClientServicePriceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertClientServicePriceVariables): MutationRef<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;
}
export const upsertClientServicePriceRef: UpsertClientServicePriceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertClientServicePrice(dc: DataConnect, vars: UpsertClientServicePriceVariables): MutationPromise<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;

interface UpsertClientServicePriceRef {
  ...
  (dc: DataConnect, vars: UpsertClientServicePriceVariables): MutationRef<UpsertClientServicePriceData, UpsertClientServicePriceVariables>;
}
export const upsertClientServicePriceRef: UpsertClientServicePriceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertClientServicePriceRef:
```typescript
const name = upsertClientServicePriceRef.operationName;
console.log(name);
```

### Variables
The `UpsertClientServicePrice` mutation requires an argument of type `UpsertClientServicePriceVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertClientServicePriceVariables {
  id: string;
  clientId: string;
  serviceId: string;
  price: number;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertClientServicePrice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertClientServicePriceData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertClientServicePriceData {
  clientServicePrice_upsert: ClientServicePrice_Key;
}
```
### Using `UpsertClientServicePrice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertClientServicePrice, UpsertClientServicePriceVariables } from '@edge2/dataconnect';

// The `UpsertClientServicePrice` mutation requires an argument of type `UpsertClientServicePriceVariables`:
const upsertClientServicePriceVars: UpsertClientServicePriceVariables = {
  id: ..., 
  clientId: ..., 
  serviceId: ..., 
  price: ..., 
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertClientServicePrice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertClientServicePrice(upsertClientServicePriceVars);
// Variables can be defined inline as well.
const { data } = await upsertClientServicePrice({ id: ..., clientId: ..., serviceId: ..., price: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertClientServicePrice(dataConnect, upsertClientServicePriceVars);

console.log(data.clientServicePrice_upsert);

// Or, you can use the `Promise` API.
upsertClientServicePrice(upsertClientServicePriceVars).then((response) => {
  const data = response.data;
  console.log(data.clientServicePrice_upsert);
});
```

### Using `UpsertClientServicePrice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertClientServicePriceRef, UpsertClientServicePriceVariables } from '@edge2/dataconnect';

// The `UpsertClientServicePrice` mutation requires an argument of type `UpsertClientServicePriceVariables`:
const upsertClientServicePriceVars: UpsertClientServicePriceVariables = {
  id: ..., 
  clientId: ..., 
  serviceId: ..., 
  price: ..., 
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertClientServicePriceRef()` function to get a reference to the mutation.
const ref = upsertClientServicePriceRef(upsertClientServicePriceVars);
// Variables can be defined inline as well.
const ref = upsertClientServicePriceRef({ id: ..., clientId: ..., serviceId: ..., price: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertClientServicePriceRef(dataConnect, upsertClientServicePriceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientServicePrice_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientServicePrice_upsert);
});
```

## DeleteClientServicePrice
You can execute the `DeleteClientServicePrice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteClientServicePrice(vars: DeleteClientServicePriceVariables): MutationPromise<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;

interface DeleteClientServicePriceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteClientServicePriceVariables): MutationRef<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;
}
export const deleteClientServicePriceRef: DeleteClientServicePriceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteClientServicePrice(dc: DataConnect, vars: DeleteClientServicePriceVariables): MutationPromise<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;

interface DeleteClientServicePriceRef {
  ...
  (dc: DataConnect, vars: DeleteClientServicePriceVariables): MutationRef<DeleteClientServicePriceData, DeleteClientServicePriceVariables>;
}
export const deleteClientServicePriceRef: DeleteClientServicePriceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteClientServicePriceRef:
```typescript
const name = deleteClientServicePriceRef.operationName;
console.log(name);
```

### Variables
The `DeleteClientServicePrice` mutation requires an argument of type `DeleteClientServicePriceVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteClientServicePriceVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteClientServicePrice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteClientServicePriceData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteClientServicePriceData {
  clientServicePrice_delete?: ClientServicePrice_Key | null;
}
```
### Using `DeleteClientServicePrice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteClientServicePrice, DeleteClientServicePriceVariables } from '@edge2/dataconnect';

// The `DeleteClientServicePrice` mutation requires an argument of type `DeleteClientServicePriceVariables`:
const deleteClientServicePriceVars: DeleteClientServicePriceVariables = {
  id: ..., 
};

// Call the `deleteClientServicePrice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteClientServicePrice(deleteClientServicePriceVars);
// Variables can be defined inline as well.
const { data } = await deleteClientServicePrice({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteClientServicePrice(dataConnect, deleteClientServicePriceVars);

console.log(data.clientServicePrice_delete);

// Or, you can use the `Promise` API.
deleteClientServicePrice(deleteClientServicePriceVars).then((response) => {
  const data = response.data;
  console.log(data.clientServicePrice_delete);
});
```

### Using `DeleteClientServicePrice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteClientServicePriceRef, DeleteClientServicePriceVariables } from '@edge2/dataconnect';

// The `DeleteClientServicePrice` mutation requires an argument of type `DeleteClientServicePriceVariables`:
const deleteClientServicePriceVars: DeleteClientServicePriceVariables = {
  id: ..., 
};

// Call the `deleteClientServicePriceRef()` function to get a reference to the mutation.
const ref = deleteClientServicePriceRef(deleteClientServicePriceVars);
// Variables can be defined inline as well.
const ref = deleteClientServicePriceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteClientServicePriceRef(dataConnect, deleteClientServicePriceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientServicePrice_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientServicePrice_delete);
});
```

## UpsertClientTestPrice
You can execute the `UpsertClientTestPrice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
upsertClientTestPrice(vars: UpsertClientTestPriceVariables): MutationPromise<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;

interface UpsertClientTestPriceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertClientTestPriceVariables): MutationRef<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;
}
export const upsertClientTestPriceRef: UpsertClientTestPriceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertClientTestPrice(dc: DataConnect, vars: UpsertClientTestPriceVariables): MutationPromise<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;

interface UpsertClientTestPriceRef {
  ...
  (dc: DataConnect, vars: UpsertClientTestPriceVariables): MutationRef<UpsertClientTestPriceData, UpsertClientTestPriceVariables>;
}
export const upsertClientTestPriceRef: UpsertClientTestPriceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertClientTestPriceRef:
```typescript
const name = upsertClientTestPriceRef.operationName;
console.log(name);
```

### Variables
The `UpsertClientTestPrice` mutation requires an argument of type `UpsertClientTestPriceVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertClientTestPriceVariables {
  id: string;
  clientId: string;
  testId: string;
  price: number;
  createdAt?: string | null;
  updatedAt?: string | null;
}
```
### Return Type
Recall that executing the `UpsertClientTestPrice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertClientTestPriceData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertClientTestPriceData {
  clientTestPrice_upsert: ClientTestPrice_Key;
}
```
### Using `UpsertClientTestPrice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertClientTestPrice, UpsertClientTestPriceVariables } from '@edge2/dataconnect';

// The `UpsertClientTestPrice` mutation requires an argument of type `UpsertClientTestPriceVariables`:
const upsertClientTestPriceVars: UpsertClientTestPriceVariables = {
  id: ..., 
  clientId: ..., 
  testId: ..., 
  price: ..., 
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertClientTestPrice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertClientTestPrice(upsertClientTestPriceVars);
// Variables can be defined inline as well.
const { data } = await upsertClientTestPrice({ id: ..., clientId: ..., testId: ..., price: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertClientTestPrice(dataConnect, upsertClientTestPriceVars);

console.log(data.clientTestPrice_upsert);

// Or, you can use the `Promise` API.
upsertClientTestPrice(upsertClientTestPriceVars).then((response) => {
  const data = response.data;
  console.log(data.clientTestPrice_upsert);
});
```

### Using `UpsertClientTestPrice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertClientTestPriceRef, UpsertClientTestPriceVariables } from '@edge2/dataconnect';

// The `UpsertClientTestPrice` mutation requires an argument of type `UpsertClientTestPriceVariables`:
const upsertClientTestPriceVars: UpsertClientTestPriceVariables = {
  id: ..., 
  clientId: ..., 
  testId: ..., 
  price: ..., 
  createdAt: ..., // optional
  updatedAt: ..., // optional
};

// Call the `upsertClientTestPriceRef()` function to get a reference to the mutation.
const ref = upsertClientTestPriceRef(upsertClientTestPriceVars);
// Variables can be defined inline as well.
const ref = upsertClientTestPriceRef({ id: ..., clientId: ..., testId: ..., price: ..., createdAt: ..., updatedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertClientTestPriceRef(dataConnect, upsertClientTestPriceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientTestPrice_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientTestPrice_upsert);
});
```

## DeleteClientTestPrice
You can execute the `DeleteClientTestPrice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
deleteClientTestPrice(vars: DeleteClientTestPriceVariables): MutationPromise<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;

interface DeleteClientTestPriceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteClientTestPriceVariables): MutationRef<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;
}
export const deleteClientTestPriceRef: DeleteClientTestPriceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteClientTestPrice(dc: DataConnect, vars: DeleteClientTestPriceVariables): MutationPromise<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;

interface DeleteClientTestPriceRef {
  ...
  (dc: DataConnect, vars: DeleteClientTestPriceVariables): MutationRef<DeleteClientTestPriceData, DeleteClientTestPriceVariables>;
}
export const deleteClientTestPriceRef: DeleteClientTestPriceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteClientTestPriceRef:
```typescript
const name = deleteClientTestPriceRef.operationName;
console.log(name);
```

### Variables
The `DeleteClientTestPrice` mutation requires an argument of type `DeleteClientTestPriceVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteClientTestPriceVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteClientTestPrice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteClientTestPriceData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteClientTestPriceData {
  clientTestPrice_delete?: ClientTestPrice_Key | null;
}
```
### Using `DeleteClientTestPrice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteClientTestPrice, DeleteClientTestPriceVariables } from '@edge2/dataconnect';

// The `DeleteClientTestPrice` mutation requires an argument of type `DeleteClientTestPriceVariables`:
const deleteClientTestPriceVars: DeleteClientTestPriceVariables = {
  id: ..., 
};

// Call the `deleteClientTestPrice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteClientTestPrice(deleteClientTestPriceVars);
// Variables can be defined inline as well.
const { data } = await deleteClientTestPrice({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteClientTestPrice(dataConnect, deleteClientTestPriceVars);

console.log(data.clientTestPrice_delete);

// Or, you can use the `Promise` API.
deleteClientTestPrice(deleteClientTestPriceVars).then((response) => {
  const data = response.data;
  console.log(data.clientTestPrice_delete);
});
```

### Using `DeleteClientTestPrice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteClientTestPriceRef, DeleteClientTestPriceVariables } from '@edge2/dataconnect';

// The `DeleteClientTestPrice` mutation requires an argument of type `DeleteClientTestPriceVariables`:
const deleteClientTestPriceVars: DeleteClientTestPriceVariables = {
  id: ..., 
};

// Call the `deleteClientTestPriceRef()` function to get a reference to the mutation.
const ref = deleteClientTestPriceRef(deleteClientTestPriceVars);
// Variables can be defined inline as well.
const ref = deleteClientTestPriceRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteClientTestPriceRef(dataConnect, deleteClientTestPriceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.clientTestPrice_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.clientTestPrice_delete);
});
```

