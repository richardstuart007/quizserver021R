const myCorsLocalTest = require('cors')
const debugLog = false
//
// Whitelist of valid hosts
//
const { CORS_WHITELIST_LOCAL_TEST } = require('./../server/serverConstants.js')
//
//  Cors options
//
const corsOptions = {
  origin: CORS_WHITELIST_LOCAL_TEST,
  optionsSuccessStatus: 200,
  methods: ['POST', 'DELETE', 'OPTIONS']
}
if (debugLog) console.log('corsOptions ', corsOptions)

module.exports = myCorsLocalTest(corsOptions)