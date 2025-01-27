import { configureStore, combineSlices } from "@reduxjs/toolkit";

// slices
import shuffle_triger from "./shuffle_triger_slice";
import favorite_slice from "./favorite_slice";

let allReducers = combineSlices({
  shuffle_triger: shuffle_triger,
  favorite_slice: favorite_slice,
});

export const store = configureStore({
  reducer: allReducers,
});
