//------------------------------------------------------------------------
//  Database (Railway 10)
//------------------------------------------------------------------------
exports.REMOTE_KNEX_CLIENT = 'pg'
exports.REMOTE_KNEX_PORT = 6436
exports.REMOTE_KNEX_HOST = 'containers-us-west-71.railway.app'
exports.REMOTE_KNEX_USER = 'postgres'
exports.REMOTE_KNEX_PWD = 'cfMC0QKSa86EIbpBdqfk'
exports.REMOTE_KNEX_DATABASE = 'railway'
exports.REMOTE_URL_PORT = 9001
//------------------------------------------------------------------------
//  Database (Local 10)
//------------------------------------------------------------------------
exports.LOCAL_KNEX_CLIENT = 'pg'
exports.LOCAL_KNEX_HOST = '127.0.0.1'
exports.LOCAL_KNEX_USER = 'richa'
exports.LOCAL_KNEX_PWD = 'london'
exports.LOCAL_KNEX_DATABASE = 'Quiz010'
exports.LOCAL_URL_PORT = 8001
//------------------------------------------------------------------------
//  Database (Local TEST)
//------------------------------------------------------------------------
exports.LOCAL_URL_PORT_TEST = 8080
//------------------------------------------------------------------------
//  URL
//------------------------------------------------------------------------
exports.URL_TABLES = '/QuizTables'
exports.URL_REGISTER = '/QuizRegister'
exports.URL_SIGNIN = '/QuizSignin'
//---------------------------------------------------------------------
//  corsWhitelist
//---------------------------------------------------------------------
exports.CORS_WHITELIST_LOCAL = [
  'http://localhost:8003',
  'http://localhost:9003',
  'http://localhost:9013'
]
exports.CORS_WHITELIST_LOCAL_TEST = [
  'https://test.com',
  'http://localhost:8003',
  'http://localhost:9003',
  'http://localhost:9013'
]
exports.CORS_WHITELIST_LOCAL_REMOTE = [
  'https://quizdataentry010-production.up.railway.app/',
  'http://localhost:9002',
  'http://localhost:9012',
  'https://quizclient010-production.up.railway.app/',
  'http://localhost:9003',
  'http://localhost:9013'
]
exports.CORS_WHITELIST_REMOTE = [
  'https://quizclient010-production.up.railway.app/',
  'http://localhost:9003',
  'https://quizdataentry010-production.up.railway.app/',
  'http://localhost:9002'
]
