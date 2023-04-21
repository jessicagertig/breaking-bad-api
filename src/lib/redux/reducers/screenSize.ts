import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store';

interface ScreenState {
  screenWidth: number;
  isSmallScreen: boolean;
}

const initialState: ScreenState = {
  screenWidth: 0,
  isSmallScreen: false,
};

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    updateScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
      state.isSmallScreen = action.payload < 1200;
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(HYDRATE, (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.screen,
  //     };
  //   });
  // }
});

export const { updateScreenWidth } = screenSlice.actions;
export const selectScreenWidth = (state: RootState) => state.screen;
export default screenSlice.reducer;