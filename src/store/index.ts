import { configureStore } from "@reduxjs/toolkit";
import converterSlice from "./slices/converterSlice";

const store = configureStore({
  reducer: {
    converterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
