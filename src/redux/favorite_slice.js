import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipes = createSlice({
  name: "favorite_recipes",
  initialState: { value: [] },
  reducers: {
    FAVORITE_DETAILS: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { FAVORITE_DETAILS } = favoriteRecipes.actions;

export default favoriteRecipes.reducer;
