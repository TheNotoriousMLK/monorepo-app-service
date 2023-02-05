import { createTheme } from '@mui/material/styles'
import { Roboto_Flex } from '@next/font/google'

const roboto = Roboto_Flex({
  subsets: ['latin'],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export { theme }
