import { configureStore } from "@reduxjs/toolkit";
import converterSlice from "./slices/converterSlice";
import selectedTokenSlice from "./slices/selectedTokenSlice";

const store = configureStore({
  reducer: {
    converterSlice,
    selectedTokenSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
