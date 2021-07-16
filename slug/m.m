yarn run v1.22.10
$ next dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Loaded env from /Users/workforfilms/help-india/help-india/front/.env.local
info  - Loaded env from /Users/workforfilms/help-india/help-india/front/.env
info  - Using webpack 4. Reason: custom webpack configuration in next.config.js https://nextjs.org/docs/messages/webpack5
event - compiled successfully
event - build page: /
wait  - compiling...
event - compiled successfully
event - build page: /api/auth/[...nextauth]
wait  - compiling...
event - compiled successfully
[next-auth][warn][jwt_auto_generated_signing_key] 
https://next-auth.js.org/warnings#jwt_auto_generated_signing_key
---===> {
  user: {
    id: 3,
    name: 'wortforfilms',
    email: null,
    emailVerified: null,
    image: 'https://avatars.githubusercontent.com/u/36219867?v=4',
    createdAt: '2021-06-08T20:05:59.994Z',
    updatedAt: '2021-06-08T20:05:59.996Z',
    role: 'CUSTOMER',
    phone: null,
    password: null
  },
  expires: '2021-07-09T11:02:33.919Z',
  accessToken: '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'
}
==-==> {
  session: {
    user: {
      id: 3,
      name: 'wortforfilms',
      email: null,
      emailVerified: null,
      image: 'https://avatars.githubusercontent.com/u/36219867?v=4',
      createdAt: '2021-06-08T20:05:59.994Z',
      updatedAt: '2021-06-08T20:05:59.996Z',
      role: 'CUSTOMER',
      phone: null,
      password: null
    },
    expires: '2021-07-09T11:02:33.919Z',
    accessToken: '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'
  }
}
start registering device 
statrting device detect--->
event - build page: /api/auth/[...nextauth]
wait  - compiling...
event - compiled successfully
---===> null
start registering device 
statrting device detect--->
event - build page: /auth/register
wait  - compiling...
event - compiled successfully
---===> undefined
event - build page: /auth/login
wait  - compiling...
event - compiled successfully
---===> undefined
[next-auth][debug][oauth_callback_protection] Added state to authorization params {
  state: '283fa20cf9b0a641b5e931103373cf8a4fa0f420bf326370a3306b21a2a209af'
}
[next-auth][debug][get_authorization_url] https://github.com/login/oauth/authorize?state=283fa20cf9b0a641b5e931103373cf8a4fa0f420bf326370a3306b21a2a209af&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgithub&scope=user&client_id=aa5dcfdb84fbf8915bab
[next-auth][debug][oauth_callback_protection] Comparing received and expected state {
  state: '283fa20cf9b0a641b5e931103373cf8a4fa0f420bf326370a3306b21a2a209af',
  expectedState: '283fa20cf9b0a641b5e931103373cf8a4fa0f420bf326370a3306b21a2a209af'
}
[next-auth][debug][profile_data] {
  login: 'wortforfilms',
  id: 36219867,
  node_id: 'MDQ6VXNlcjM2MjE5ODY3',
  avatar_url: 'https://avatars.githubusercontent.com/u/36219867?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/wortforfilms',
  html_url: 'https://github.com/wortforfilms',
  followers_url: 'https://api.github.com/users/wortforfilms/followers',
  following_url: 'https://api.github.com/users/wortforfilms/following{/other_user}',
  gists_url: 'https://api.github.com/users/wortforfilms/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/wortforfilms/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/wortforfilms/subscriptions',
  organizations_url: 'https://api.github.com/users/wortforfilms/orgs',
  repos_url: 'https://api.github.com/users/wortforfilms/repos',
  events_url: 'https://api.github.com/users/wortforfilms/events{/privacy}',
  received_events_url: 'https://api.github.com/users/wortforfilms/received_events',
  type: 'User',
  site_admin: false,
  name: null,
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 4,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2018-02-07T05:35:56Z',
  updated_at: '2021-06-08T20:04:50Z',
  private_gists: 0,
  total_private_repos: 0,
  owned_private_repos: 0,
  disk_usage: 1,
  collaborators: 0,
  two_factor_authentication: false,
  plan: {
    name: 'free',
    space: 976562499,
    collaborators: 0,
    private_repos: 10000
  }
}
[next-auth][debug][oauth_callback_response] {
  profile: {
    id: 36219867,
    name: 'wortforfilms',
    email: null,
    image: 'https://avatars.githubusercontent.com/u/36219867?v=4'
  },
  account: {
    provider: 'github',
    type: 'oauth',
    id: 36219867,
    accessToken: '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',
    accessTokenExpires: null,
    refreshToken: undefined,
    idToken: undefined,
    access_token: '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',
    scope: 'user',
    token_type: 'bearer'
  },
  OAuthProfile: {
    login: 'wortforfilms',
    id: 36219867,
    node_id: 'MDQ6VXNlcjM2MjE5ODY3',
    avatar_url: 'https://avatars.githubusercontent.com/u/36219867?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/wortforfilms',
    html_url: 'https://github.com/wortforfilms',
    followers_url: 'https://api.github.com/users/wortforfilms/followers',
    following_url: 'https://api.github.com/users/wortforfilms/following{/other_user}',
    gists_url: 'https://api.github.com/users/wortforfilms/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/wortforfilms/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/wortforfilms/subscriptions',
    organizations_url: 'https://api.github.com/users/wortforfilms/orgs',
    repos_url: 'https://api.github.com/users/wortforfilms/repos',
    events_url: 'https://api.github.com/users/wortforfilms/events{/privacy}',
    received_events_url: 'https://api.github.com/users/wortforfilms/received_events',
    type: 'User',
    site_admin: false,
    name: null,
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 4,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '2018-02-07T05:35:56Z',
    updated_at: '2021-06-08T20:04:50Z',
    private_gists: 0,
    total_private_repos: 0,
    owned_private_repos: 0,
    disk_usage: 1,
    collaborators: 0,
    two_factor_authentication: false,
    plan: {
      name: 'free',
      space: 976562499,
      collaborators: 0,
      private_repos: 10000
    }
  }
}
[next-auth][debug][adapter__get_user_by_provider_account_id] github 36219867
[next-auth][debug][adapter__get_user_by_provider_account_id] github 36219867
[next-auth][debug][adapter__create_user] {
  id: 36219867,
  name: 'wortforfilms',
  email: null,
  image: 'https://avatars.githubusercontent.com/u/36219867?v=4'
}
[next-auth][error][adapter__create_user_error] 
https://next-auth.js.org/errors#adapter__create_user_error PrismaClientValidationError: 
Invalid `prisma.user.create()` invocation:

{
  data: {
    name: 'wortforfilms',
?   email?: String | null,
    image: 'https://avatars.githubusercontent.com/u/36219867?v=4',
?   emailVerified?: DateTime | null,
+   role: {
+     create?: RoleCreateWithoutUserInput | RoleUncheckedCreateWithoutUserInput,
+     connectOrCreate?: RoleCreateOrConnectWithoutUserInput,
+     connect?: RoleWhereUniqueInput
+   },
?   createdAt?: DateTime,
?   updatedAt?: DateTime,
?   phone?: String | null,
?   password?: String | null,
?   Post?: {
?     create?: PostCreateWithoutAuthorInput | PostCreateWithoutAuthorInput | PostUncheckedCreateWithoutAuthorInput | PostUncheckedCreateWithoutAuthorInput,
?     connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput,
?     connect?: PostWhereUniqueInput | PostWhereUniqueInput
?   }
  }
}

Argument role for data.role is missing.

Note: Lines with + are required, lines with ? are optional.

    at Document.validate (webpack-internal:///./prisma/generated/client/runtime/index.js:374:130)
    at NewPrismaClient._executeRequest (webpack-internal:///./prisma/generated/client/runtime/index.js:411:3706)
    at eval (webpack-internal:///./prisma/generated/client/runtime/index.js:411:1953)
    at AsyncResource.runInAsyncScope (async_hooks.js:172:16)
    at NewPrismaClient._request (webpack-internal:///./prisma/generated/client/runtime/index.js:411:1928)
    at Object.then (webpack-internal:///./prisma/generated/client/runtime/index.js:411:4983)
    at processTicksAndRejections (internal/process/task_queues.js:85:5) {
  clientVersion: '2.23.0'
}
---===> undefined
event - build page: /api/auth/[...nextauth]
wait  - compiling...
event - compiled successfully

