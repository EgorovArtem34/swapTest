import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConverterState, tokensEnum } from "../types";
import { exchangeRates } from "../../utils/constants";

const updateDifferenceValue = (
  state: IConverterState,
  isSameToken: boolean = false
) => {
  const currentExchangeRate = isSameToken
    ? 1
    : state.sellableToken.sellableTokenName === "del"
    ? exchangeRates.del.perCryg
    : exchangeRates.cryg.perDel;
  state.purchasedToken.totalPurchasedTokenCost =
    +state.sellableToken.sellableTokenCount * currentExchangeRate;

  const differenceTokensInDollar =
    state.sellableToken.sellableTokensInDollars -
    state.purchasedToken.purchasedTokenInDollars;
  state.differenceValue.inDollars = differenceTokensInDollar;
  state.differenceValue.inDollarsPercentage = isSameToken
    ? 0
    : (differenceTokensInDollar /
        state.purchasedToken.purchasedTokenInDollars) *
      100;
};

const defineCostInOtherToken = (
  state: IConverterState,
  token: tokensEnum,
  otherToken: tokensEnum
) => {
  if (token === otherToken) {
    state.sellableToken.sellableTokenPerOtherToken = 1;
    state.purchasedToken.purchasedTokenPerOtherToken = 1;
  } else {
    state.sellableToken.sellableTokenPerOtherToken =
      token === tokensEnum.CRYG
        ? exchangeRates.cryg.perDel
        : exchangeRates.del.perCryg;
    state.purchasedToken.purchasedTokenPerOtherToken =
      token === tokensEnum.CRYG
        ? exchangeRates.cryg.perDel
        : exchangeRates.del.perCryg;
  }
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
    totalPurchasedTokenCost: exchangeRates.cryg.perDel,
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
      defineCostInOtherToken(
        state,
        payload,
        state.purchasedToken.purchasedTokenName
      );

      state.sellableToken.sellableTokenPer1Dollar =
        exchangeRates[payload].perDollar;
      state.sellableToken.sellableTokensInDollars =
        state.sellableToken.sellableTokenPer1Dollar *
        +state.sellableToken.sellableTokenCount;
      updateDifferenceValue(
        state,
        payload === state.purchasedToken.purchasedTokenName
      );
    },
    setSellableTokenCount: (
      state,
      { payload }: PayloadAction<number | string>
    ) => {
      state.sellableToken.sellableTokenCount = payload;

      state.sellableToken.sellableTokensInDollars =
        state.sellableToken.sellableTokenPer1Dollar *
        +state.sellableToken.sellableTokenCount;
      updateDifferenceValue(
        state,
        state.sellableToken.sellableTokenName ===
          state.purchasedToken.purchasedTokenName
      );
    },
    setPurchasedToken: (state, { payload }: PayloadAction<tokensEnum>) => {
      state.purchasedToken.purchasedTokenName = payload;
      defineCostInOtherToken(
        state,
        payload,
        state.purchasedToken.purchasedTokenName
      );
      state.purchasedToken.purchasedTokenPer1Dollar =
        exchangeRates[payload].perDollar;

      state.purchasedToken.purchasedTokenInDollars =
        state.purchasedToken.purchasedTokenPer1Dollar *
        state.purchasedToken.purchasedTokenCount;

      updateDifferenceValue(
        state,
        payload === state.sellableToken.sellableTokenName
      );
    },
  },
});

export const {
  setSellableToken,
  setSellableTokenCount,
  setPurchasedToken,
} = converterSlice.actions;
export default converterSlice.reducer;
