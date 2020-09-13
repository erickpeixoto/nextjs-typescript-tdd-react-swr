/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_TOKEN: string
      API_HOST: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
    }
  }
}
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
