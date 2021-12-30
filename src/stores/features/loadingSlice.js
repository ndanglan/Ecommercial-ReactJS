import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.show = true;
    },
    hideLoading: (state) => {
      state.show = false;
    }
  }
})

const getShow = (state) => state.loading.show;

export { getShow };
export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer