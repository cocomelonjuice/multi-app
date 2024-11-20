import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TaskState } from './taskreducer';

export interface InfoState {
    info: Info.InfoItem[],
}

export const initialState: InfoState = {
  info: [],
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    getInfoRequest: () => {},
    getInfoSuccess: (state, action: PayloadAction<InfoState>) => {
        state.info = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getInfoRequest, getInfoSuccess } = infoSlice.actions

export type initState = TaskState & InfoState

export default infoSlice.reducer;
