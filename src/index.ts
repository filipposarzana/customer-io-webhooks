require('dotenv').config()

import bodyParser from 'body-parser'
import express from 'express'
import { Sentry } from '~/clients/sentry'
import { log } from '~/utils/log'
import { getHealthCheckPort } from '~/utils/ports/getHealthCheckPort'
import { getMainPort } from '~/utils/ports/getMainPort'

const app = express()
const port = getMainPort()

// Middlewares before controllers
app.use(Sentry.Handlers.requestHandler())
app.use(bodyParser.json())

app.post('/webhooks', (req, res) => {
  console.log(req.headers)
  console.log(req.body)

  if (req.header('X-Hook-Secret') !== process.env.SHARED_SECRET) {
    res.sendStatus(422)

    return
  }

  res.sendStatus(200)
})

// Middlewares after controllers
app.use(Sentry.Handlers.errorHandler())

app.listen(port, async () => {
  log.success(`Listening on port ${port}!`)
})

// HealthCheck setup
const healthCheck = express()
const healthCheckPort = getHealthCheckPort()

healthCheck.get('/live', (_, res) => {
  res.sendStatus(200)
})

healthCheck.get('/ready', (_, res) => {
  res.sendStatus(200)
})

healthCheck.listen(healthCheckPort, () => {
  log.success(`Heartbeat on port ${healthCheckPort}!`)
})
