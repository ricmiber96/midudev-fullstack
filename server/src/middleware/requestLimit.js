const rateLimit = require('express-rate-limit')

const apiLimit = rateLimit({
  windowMs: 10 * 60 * 60 * 1000, // 10 minutes
  max: 100 // Limit to 100 request for IP
})

module.exports = apiLimit
