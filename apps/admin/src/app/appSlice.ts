import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from './store'

export interface AppState {
  greeting: string
}

const initialState: AppState = {
  greeting: 'Hello World!',
}

export const appSlice = createSlice({
  name: 'app',

  initialState,

  reducers: {
    setGreeting: (state, { payload }: PayloadAction<string>) => {
      state.greeting = payload
    },
  },
})

export const { setGreeting } = appSlice.actions

export const selectGreeting = (state: RootState) => state.app.greeting

export const appReducer = appSlice.reducer
