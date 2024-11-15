import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InfoState {
    info: any
}

const initialState: InfoState = {
  info: [],
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    getInfoRequest: () => {
        console.log('request')
    },
    getInfoSuccess: (state, action: PayloadAction<any>) => {
        console.log({action})
        state.info = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getInfoRequest, getInfoSuccess } = infoSlice.actions

export default infoSlice.reducer;
