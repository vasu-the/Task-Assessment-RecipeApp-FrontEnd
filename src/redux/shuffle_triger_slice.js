import { createSlice } from "@reduxjs/toolkit";

const shuffleTriger = createSlice({
  name: "shuffle_triger",
  initialState: { value: false },
  reducers: {
    TRIGER_SHUFFLE: (state) => {
      
      state.value = !state.value
    },
  },
});

export const { TRIGER_SHUFFLE } = shuffleTriger.actions;

export default shuffleTriger.reducer;
