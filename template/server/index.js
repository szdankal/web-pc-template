const express = require('express')
const Builder = require('nuxt').Builder
const Nuxt = require('nuxt').Nuxt
const cookieParser = require('cookie-parser')

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.NODE_ENV === 'production' ? 80 : 3000
console.log(process.env.NODE_ENV, 'envc')
app.set('port', port)


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')

config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(cookieParser())

// Give nuxt middleware to express
app.use(nuxt.render)
// Listen the server
app.listen(port, host)
console.log(`Server listening on ${host}:${port}`) // eslint-disable-line no-console
