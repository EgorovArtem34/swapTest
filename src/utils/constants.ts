import crygLogo from "../assets/images/cryg.png";
import delLogo from "../assets/images/del.png";
import { IExchangeRate, ITokens } from "../types";

export const tokens: ITokens = {
  cryg: {
    name: "CRYG",
    image: crygLogo,
  },
  del: {
    name: "DEL",
    image: delLogo,
  },
};

export const converterTextOperations: Record<string, string> = {
  sell: 'Вы продаете',
  purchase: 'Вы покупаете',
}

export const exchangeRates: Record<string, IExchangeRate> = {
  cryg: {
    perDollar: 333.73,
    perDel: 714.543016,
  },
  del: {
    perDollar: 331.62,
    perDel: 0.0013988,
  },
}
