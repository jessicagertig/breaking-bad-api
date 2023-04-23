import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ScreenState {
  width: number;
  isSmallScreen: boolean;
}

const initialState: ScreenState = {
  width: 0,
  isSmallScreen: false,
};

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    updateScreenWidth: (state, action) => {
      state.width = action.payload.width;
      state.isSmallScreen = action.payload.width < 1200;
    }
  },
});

export const { updateScreenWidth } = screenSlice.actions;
export const selectScreenWidth = (state: RootState) => state.screen;
export default screenSlice.reducer;