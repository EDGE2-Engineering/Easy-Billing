# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { upsertUser, deleteUser, upsertClient, deleteClient, upsertService, deleteService, upsertTest, deleteTest, upsertJob, deleteJob } from '@edge2/dataconnect';


// Operation UpsertUser:  For variables, look at type UpsertUserVars in ../index.d.ts
const { data } = await UpsertUser(dataConnect, upsertUserVars);

// Operation DeleteUser:  For variables, look at type DeleteUserVars in ../index.d.ts
const { data } = await DeleteUser(dataConnect, deleteUserVars);

// Operation UpsertClient:  For variables, look at type UpsertClientVars in ../index.d.ts
const { data } = await UpsertClient(dataConnect, upsertClientVars);

// Operation DeleteClient:  For variables, look at type DeleteClientVars in ../index.d.ts
const { data } = await DeleteClient(dataConnect, deleteClientVars);

// Operation UpsertService:  For variables, look at type UpsertServiceVars in ../index.d.ts
const { data } = await UpsertService(dataConnect, upsertServiceVars);

// Operation DeleteService:  For variables, look at type DeleteServiceVars in ../index.d.ts
const { data } = await DeleteService(dataConnect, deleteServiceVars);

// Operation UpsertTest:  For variables, look at type UpsertTestVars in ../index.d.ts
const { data } = await UpsertTest(dataConnect, upsertTestVars);

// Operation DeleteTest:  For variables, look at type DeleteTestVars in ../index.d.ts
const { data } = await DeleteTest(dataConnect, deleteTestVars);

// Operation UpsertJob:  For variables, look at type UpsertJobVars in ../index.d.ts
const { data } = await UpsertJob(dataConnect, upsertJobVars);

// Operation DeleteJob:  For variables, look at type DeleteJobVars in ../index.d.ts
const { data } = await DeleteJob(dataConnect, deleteJobVars);


```