import {
  converterTextOperations,
  exchangeRates,
  tokens,
} from "../../utils/constants";
import styles from "./converterCard.module.scss";
import arrowSvg from "../../assets/svg/arrow.svg";

interface IConverterCard {
  operation: string;
  token: string;
}

export const ConverterCard = ({ operation, token }: IConverterCard) => {
  const tokenData = tokens[token];

  return (
    <div className={operation === "sale" ? styles.sale : styles.purchase}>
      <p className={styles.operationType}>
        {converterTextOperations[operation]}
      </p>
      <div className={styles.data}>
        <div className={styles.name}>
          <img src={tokenData.image} alt="иконка" />
          <span className={styles.text}>{tokenData.name}</span>
          <img src={arrowSvg} alt="стрелка" />
        </div>
        <span className={styles.value}>1</span>
      </div>

      <div className={styles.description}>
        <span>{token.toUpperCase()}</span>
        <span>
          ~{exchangeRates[token]?.perDollar}
          {operation === "sale" ? "" : ""}
        </span>
      </div>
    </div>
  );
};
