require('dotenv').config()

import ngrok from 'ngrok'
import { log } from '~/utils/log'
import { getMainPort } from '~/utils/ports/getMainPort'

(async () => {
  log.info('Starting ngrok...')

  const url = await ngrok.connect({
    proto: 'http',
    port: getMainPort(),
  })

  log.info(`ngrok ready on ${url}`)
  log.info('You can copy&paste it to you .env BASE_URL')
})()
