interface IToken {
  name: string;
  image: string;
}

export interface ITokens {
  [key: string]: IToken;
}

export interface IExchangeRate {
  perDollar: number;
  perDel: number;
}
