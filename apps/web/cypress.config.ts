import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'cypress'

loadEnvConfig(process.env.PWD || '')

const baseUrl = process.env.NEXT_PUBLIC_URL

export default defineConfig({
  e2e: {
    baseUrl,
    // eslint-disable-next-line unused-imports/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
