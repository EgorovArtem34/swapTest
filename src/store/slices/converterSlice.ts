import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConverterState, tokensEnum } from "../types";
import { exchangeRates } from "../../utils/constants";

const updateDifferenceValue = (state: IConverterState) => {
  const differenceTokensInDollar =
    state.sellableToken.sellableTokensInDollars -
    state.purchasedToken.purchasedTokenInDollars;
  state.differenceValue.inDollars = differenceTokensInDollar;
  state.differenceValue.inDollarsPercentage =
    (differenceTokensInDollar / state.purchasedToken.purchasedTokenInDollars) *
    100;
};

const initialState: IConverterState = {
  sellableToken: {
    sellableTokenName: tokensEnum.CRYG,
    sellableTokenPerOtherToken: exchangeRates.cryg.perDel,
    sellableTokenPer1Dollar: exchangeRates.cryg.perDollar,
    sellableTokensInDollars: exchangeRates.cryg.perDollar,
    sellableTokenCount: 1,
  },
  purchasedToken: {
    purchasedTokenName: tokensEnum.DEL,
    purchasedTokenPerOtherToken: exchangeRates.del.perCryg,
    purchasedTokenPer1Dollar: exchangeRates.del.perDollar,
    purchasedTokenInDollars: exchangeRates.del.perDollar,
    purchasedTokenCount: 1,
  },
  differenceValue: {
    inDollars: exchangeRates.cryg.perDollar - exchangeRates.del.perDollar,
    inDollarsPercentage:
      ((exchangeRates.cryg.perDollar - exchangeRates.del.perDollar) /
        exchangeRates.del.perDollar) *
      100,
  },
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    setSellableToken: (state, { payload }: PayloadAction<tokensEnum>) => {
      state.sellableToken.sellableTokenName = payload;
      state.sellableToken.sellableTokenPerOtherToken =
        payload === tokensEnum.CRYG
          ? exchangeRates.cryg.perDel
          : exchangeRates.del.perCryg;

      state.sellableToken.sellableTokenPer1Dollar =
        exchangeRates[payload].perDollar;
      state.sellableToken.sellableTokensInDollars =
        state.sellableToken.sellableTokenPer1Dollar *
        state.sellableToken.sellableTokenCount;
      updateDifferenceValue(state);
      // const differenceTokensInDollar =
      //   state.sellableToken.sellableTokensInDollars -
      //   state.purchasedToken.purchasedTokenInDollars;
      // state.differenceValue.inDollars = differenceTokensInDollar;
      // state.differenceValue.inDollarsPercentage =
      //   (differenceTokensInDollar /
      //     state.purchasedToken.purchasedTokenInDollars) *
      //   100;
    },
    setSellableTokenCount: (state, { payload }: PayloadAction<number>) => {
      state.sellableToken.sellableTokenCount = payload;

      state.sellableToken.sellableTokensInDollars =
        state.sellableToken.sellableTokenPer1Dollar *
        state.sellableToken.sellableTokenCount;
      updateDifferenceValue(state);
      // const differenceTokensInDollar =
      //   state.sellableToken.sellableTokensInDollars -
      //   state.purchasedToken.purchasedTokenInDollars;
      // state.differenceValue.inDollars = differenceTokensInDollar;
      // state.differenceValue.inDollarsPercentage =
      //   (differenceTokensInDollar /
      //     state.purchasedToken.purchasedTokenInDollars) *
      //   100;
    },
    setPurchasedToken: (state, { payload }: PayloadAction<tokensEnum>) => {
      state.purchasedToken.purchasedTokenName = payload;
      state.purchasedToken.purchasedTokenPerOtherToken =
        payload === tokensEnum.CRYG
          ? exchangeRates.cryg.perDel
          : exchangeRates.del.perCryg;

      state.purchasedToken.purchasedTokenPer1Dollar =
        exchangeRates[payload].perDollar;

      state.purchasedToken.purchasedTokenInDollars =
        state.purchasedToken.purchasedTokenPer1Dollar *
        state.purchasedToken.purchasedTokenCount;

      updateDifferenceValue(state);
      // const differenceTokensInDollar =
      //   state.sellableToken.sellableTokensInDollars -
      //   state.purchasedToken.purchasedTokenInDollars;
      // state.differenceValue.inDollars = differenceTokensInDollar;
      // state.differenceValue.inDollarsPercentage =
      //   (differenceTokensInDollar /
      //     state.purchasedToken.purchasedTokenInDollars) *
      //   100;
    },
    setPurchasedTokenCount: (state, { payload }: PayloadAction<number>) => {
      state.purchasedToken.purchasedTokenCount = payload;

      state.purchasedToken.purchasedTokenInDollars =
        state.purchasedToken.purchasedTokenPer1Dollar *
        state.purchasedToken.purchasedTokenCount;
      updateDifferenceValue(state);
      // const differenceTokensInDollar =
      //   state.sellableToken.sellableTokensInDollars -
      //   state.purchasedToken.purchasedTokenInDollars;
      // state.differenceValue.inDollars = differenceTokensInDollar;
      // state.differenceValue.inDollarsPercentage =
      //   (differenceTokensInDollar /
      //     state.purchasedToken.purchasedTokenInDollars) *
      //   100;
    },
  },
});

export const {
  setSellableToken,
  setSellableTokenCount,
  setPurchasedToken,
  setPurchasedTokenCount,
} = converterSlice.actions;
export default converterSlice.reducer;
