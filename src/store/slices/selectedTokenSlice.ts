import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISelectedTokenState, tokensEnum } from "../types";

const initialState: ISelectedTokenState = {
  isSelectedToken: false,
  selectedToken: "",
  selectedOperationType: "",
};

const selectedTokenSlice = createSlice({
  name: "selectedToken",
  initialState,
  reducers: {
    setSelectedToken: (state, { payload }: PayloadAction<tokensEnum>) => {
      state.selectedToken = payload;
      state.isSelectedToken = false;
    },
    setSelectedOperationType: (state, { payload }: PayloadAction<string>) => {
      state.selectedOperationType = payload;
      state.isSelectedToken = true;
    },
    unsetIsSelectedToken: (state) => {
      state.isSelectedToken = false;
      state.selectedToken = "";
      state.selectedOperationType = "";
    },
  },
});

export const {
  setSelectedToken,
  unsetIsSelectedToken,
  setSelectedOperationType,
} = selectedTokenSlice.actions;
export default selectedTokenSlice.reducer;
