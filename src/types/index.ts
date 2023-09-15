interface IToken {
  name: string;
  image: string;
}

export interface ITokens {
  [key: string]: IToken;
}

export interface IExchangeRate {
  cryg: {
    perDollar: number;
    perDel: number;
  };
  del: {
    perDollar: number;
    perCryg: number;
  };
}
