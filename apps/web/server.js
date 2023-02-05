/* eslint-disable no-console */
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
console.log('is dev', dev)
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

console.log(`PORT: ${port}`)

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error('Error preparing server')
    console.error(ex.stack)
    process.exit(1)
  })
