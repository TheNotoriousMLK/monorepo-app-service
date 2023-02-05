import './globals.css'

import { MuiTheme } from '@hms/ui'
import { ReactNode } from 'react'

import { ReduxProvider } from '~/src/app/components/ReduxProvider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ReduxProvider>
          <MuiTheme>{children}</MuiTheme>
        </ReduxProvider>
      </body>
    </html>
  )
}
