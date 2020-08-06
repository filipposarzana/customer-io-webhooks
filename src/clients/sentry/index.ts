import * as Sentry from '@sentry/node'
import packageJson from '~/../package.json'
import { weAreInDevelopment } from '~/constants/environment'

Sentry.init({
  debug: weAreInDevelopment,
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  maxBreadcrumbs: 50,
  release: packageJson.version,
})

export { Sentry }
