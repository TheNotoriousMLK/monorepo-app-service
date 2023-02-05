'use client'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { PropsWithChildren } from 'react'

import { EmotionRegistry } from './EmotionRegistry'
import { theme } from './theme'

export const MuiTheme = ({ children }: PropsWithChildren) => {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </EmotionRegistry>
  )
}
