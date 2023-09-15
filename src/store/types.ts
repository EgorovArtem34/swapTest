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
    sellableTokenCount: number;
  };
  purchasedToken: {
    purchasedTokenName: tokensEnum;
    purchasedTokenPerOtherToken: number; 
    purchasedTokenInDollars: number;
    purchasedTokenPer1Dollar: number;
    purchasedTokenCount: number;
  };
  differenceValue: {
    inDollars: number,
    inDollarsPercentage: number;
  },
}
