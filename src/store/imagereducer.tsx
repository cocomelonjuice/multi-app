import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
  base64Image: string;
}

export const initialState: ImageState = {
  base64Image: '',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string>) {
      state.base64Image = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;

export default imageSlice.reducer;
