import {
  converterTextOperations,
  exchangeRates,
  tokens,
} from "../../utils/constants";
import styles from "./converterCard.module.scss";
import arrowSvg from "../../assets/svg/arrow.svg";
import { IExchangeRate } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Button } from "../../ui/Button/Button";
import { IConverterCard } from "../../store/types";
import { setSellableTokenCount } from "../../store/slices/converterSlice";
import { setSelectedOperationType } from "../../store/slices/selectedTokenSlice";

export const ConverterCard = ({ operation, token }: IConverterCard) => {
  const dispatch = useAppDispatch();
  const tokenData = tokens[token];
  const {
    sellableToken: { sellableTokenCount },
    purchasedToken: { totalPurchasedTokenCost },
    differenceValue: { inDollarsPercentage },
  } = useAppSelector((state) => state.converterSlice);

  const handleChange = (newValue: string) => {
    const currentNewValue = newValue === "" ? newValue : +newValue;
    dispatch(setSellableTokenCount(currentNewValue));
  };

  const handleToken = () => {
    dispatch(setSelectedOperationType(operation));
  };

  return (
    <div className={operation === "sell" ? styles.sell : styles.purchase}>
      <p className={styles.operationType}>
        {converterTextOperations[operation]}
      </p>
      <div className={`${styles.data} ${styles[`data-${operation}`]}`}>
        <div className={styles.name}>
          <img
            src={tokenData.image}
            alt="иконка"
            className={styles[`img-${token}`]}
          />
          <span className={styles.text}>
            {tokenData.name.toLocaleUpperCase()}
          </span>
          <Button
            variant="transparent"
            onClick={handleToken}
            aria-label="выбрать валюту"
          >
            <img src={arrowSvg} alt="стрелка" className={styles.arrowSelect} />
          </Button>
        </div>
        {operation === "sell" ? (
          <input
            type="number"
            className={styles.input}
            value={sellableTokenCount}
            onChange={(e) => handleChange(e.target.value)}
            required
            placeholder="количество"
            min={1}
            id="sellableTokenInput"
          />
        ) : (
          <span className={styles.totalCost}>
            {totalPurchasedTokenCost.toFixed(6)}
          </span>
        )}
      </div>

      <div className={styles.description}>
        <span>{token.toUpperCase()}</span>
        <span>
          ~${exchangeRates[token as keyof IExchangeRate]?.perDollar}
          {operation === "purchase" && (
            <span>{` (${inDollarsPercentage.toFixed(2)}%)`}</span>
          )}
        </span>
      </div>
    </div>
  );
};
