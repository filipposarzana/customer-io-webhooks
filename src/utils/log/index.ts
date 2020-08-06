import chalk from 'chalk'
import { Sentry } from '~/clients/sentry'

type Tag = {
  client: 'asana' | 'drone' | 'github'
  scope: 'command' | 'webhook' | 'util'
}

const fatal = (value: Error, tags: Tag) => {
  Object
    .entries(tags)
    .forEach(([key, value]) => {
      Sentry.configureScope((scope) => {
        scope.setTag(key, value)
      })
    })

  Sentry.captureException(value)
}

const error = (value: string) => console.error(chalk.bold.red(value))

const warning = (value: string) => console.warn(chalk.bold.yellow(value))

const success = (value: string) => console.log(chalk.bold.green(value))

const info = (value: string) => console.info(chalk.bold.blueBright(value))

export const log = {
  error,
  fatal,
  info,
  success,
  warning,
}
