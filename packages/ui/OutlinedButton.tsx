import { Button } from '@mui/material'
import * as React from 'react'

export const OutlinedButton = ({ children }: React.PropsWithChildren) => {
  return <Button variant="outlined">{children}</Button>
}
