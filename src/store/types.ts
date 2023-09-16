export enum tokensEnum {
  CRYG = "cryg",
  DEL = "del",
}

export interface IConverterState {
  sellableToken: {
    sellableTokenName: tokensEnum;
    sellableTokenPerOtherToken: number;
    sellableTokenPer1Dollar: number;
    sellableTokensInDollars: number;
    sellableTokenCount: number | string;
  };
  purchasedToken: {
    purchasedTokenName: tokensEnum;
    purchasedTokenPerOtherToken: number;
    totalPurchasedTokenCost: number;
    purchasedTokenInDollars: number;
    purchasedTokenPer1Dollar: number;
    purchasedTokenCount: number;
  };
  differenceValue: {
    inDollars: number;
    inDollarsPercentage: number;
  };
}

export interface IConverterCard {
  operation: string;
  token: string;
}

export interface ISelectedTokenState {
  isSelectedToken: boolean;
  selectedToken: string;
  selectedOperationType: string;
}
