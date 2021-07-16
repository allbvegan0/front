b><m
Because I I is two in three B \ |3 I I I  The I 
{
  "test":"?"
}
---> create array for icons
===> show on slider
for i=0; i>10; i++
console.log(i)
o.capability 
read messages
write comments
post order
//active on commenting out

Last login: Wed Jun  9 17:04:45 on ttys010

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
(base) WORKFORFILMSs-MacBook-Pro:~ workforfilms$ cd help-india/help-india/back/
(base) WORKFORFILMSs-MacBook-Pro:back workforfilms$ yarn dev
yarn run v1.22.10
$ ts-node-dev --transpile-only --no-notify api/app.ts
[INFO] 17:18:58 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.2.4)
types from graphql====> {
  Session: [Getter],
  SessionStatus: [Getter],
  SessionOrderByInput: [Getter],
  SessionWhereUniqueInput: [Getter],
  SessionWhereInput: [Getter],
  Device: [Getter],
  DeviceStatus: [Getter],
  SortOrder: [Getter],
  DeviceOrderByInput: [Getter],
  DeviceWhereUniqueInput: [Getter],
  DeviceWhereInput: [Getter],
  StringFilter: [Getter],
  User: [Getter],
  Authpayload: [Getter],
  Accouunt: [Getter],
  Cart: [Getter],
  Post: [Getter],
  DeviceMutation: [Getter],
  SessionMutation: [Getter],
  DeviceQuery: [Getter],
  SessionQuery: [Getter]
}
Server running on PORT /graphql

Server running on PORT /graphql
Parsing started!
Validation started!
request Validation started while conxext is--------->! {
  query: '\n' +
    '  mutation deviceDetect(\n' +
    '    $os_type: String!\n' +
    '    $os_arch: String!\n' +
    '    $hostname: String!\n' +
    '    $cpu_type: String!\n' +
    '  ) {\n' +
    '    createDevice(\n' +
    '      os_type: $os_type\n' +
    '      os_arch: $os_arch\n' +
    '      cpu_type: $cpu_type\n' +
    '      hostname: $hostname\n' +
    '    ) {\n' +
    '      device_id\n' +
    '      id\n' +
    '    }\n' +
    '  }\n',
  operationName: undefined,
  variables: {
    os_arch: 'javascript',
    os_type: 'Browser',
    cpu_type: '[]',
    hostname: 'localhost'
  },
  extensions: undefined,
  http: Request {
    size: 0,
    timeout: 0,
    follow: 20,
    compress: true,
    counter: 0,
    agent: undefined,
    [Symbol(Body internals)]: { body: null, disturbed: false, error: null },
    [Symbol(Request internals)]: {
      method: 'POST',
      redirect: 'follow',
      headers: [Headers],
      parsedURL: [Url],
      signal: null
    }
  }
}
Parsing started!
Validation started!
request Validation started while conxext is--------->! {
  query: '\n' +
    '      mutation deviceUpdate($_id: Int!) {\n' +
    '        updateDevice(_id: $_id) {\n' +
    '          device_id\n' +
    '          created_at\n' +
    '          updated_at\n' +
    '        }\n' +
    '      }\n' +
    '    ',
  operationName: undefined,
  variables: { _id: 116 },
  extensions: undefined,
  http: Request {
    size: 0,
    timeout: 0,
    follow: 20,
    compress: true,
    counter: 0,
    agent: undefined,
    [Symbol(Body internals)]: { body: null, disturbed: false, error: null },
    [Symbol(Request internals)]: {
      method: 'POST',
      redirect: 'follow',
      headers: [Headers],
      parsedURL: [Url],
      signal: null
    }
  }
}
devide id recieved 116
Error in update PrismaClientKnownRequestError2 [PrismaClientKnownRequestError]: 
Invalid `prisma.device.findUnique()` invocation:


  The table `public.Device` does not exist in the current database.
    at cb (/Users/workforfilms/help-india/help-india/back/prisma/generated/client/runtime/index.js:34780:17)
    at processTicksAndRejections (internal/process/task_queues.js:85:5) {
  code: 'P2021',
  clientVersion: '2.21.2',
  meta: { table: 'public.Device' }
}
Device with id cannot be found to be updated
Error inn creation PrismaClientKnownRequestError2 [PrismaClientKnownRequestError]: 
Invalid `prisma.device.create()` invocation:


  The table `public.Device` does not exist in the current database.
    at cb (/Users/workforfilms/help-india/help-india/back/prisma/generated/client/runtime/index.js:34780:17)
    at processTicksAndRejections (internal/process/task_queues.js:85:5) {
  code: 'P2021',
  clientVersion: '2.21.2',
  meta: { table: 'public.Device' }
}
===-->Error log on console [GraphQLError [Object]: Cannot return null for non-nullable field Mutation.createDevice.] {
  message: 'Cannot return null for non-nullable field Mutation.createDevice.',
  locations: [ { line: 8, column: 5 } ],
  path: [ 'createDevice' ],
  extensions: { code: 'INTERNAL_SERVER_ERROR', exception: { stacktrace: [Array] } }
}