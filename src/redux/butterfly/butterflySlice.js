import { createSlice } from '@reduxjs/toolkit';
  
const butterflySlice = createSlice({
    name: "buterfly",
    initialState: {
        isVisible: false,
    },
    reducers: {
        showButterfly(state) {
            state.isVisible = true;
        },
        hideButterfly(state) {
            state.isVisible = false;
        },
    },
});

export const butterflyReducer = butterflySlice.reducer;

export const { showButterfly, hideButterfly } = butterflySlice.actions;