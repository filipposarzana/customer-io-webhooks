declare namespace NodeJS {
  export interface ProcessEnv {
    BASE_URL: string
    HEALTHCHECK_PORT?: string
    NODE_ENV: 'development' | 'production' | 'test'
    PORT?: string
    SENTRY_DSN: string
    SHARED_SECRET: string
  }
}
