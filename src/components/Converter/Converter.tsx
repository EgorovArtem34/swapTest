import { useState } from "react";
import { Button } from "../../ui/Button/Button";
import styles from "./сonverter.module.scss";
import infoSvg from "../../assets/svg/info.svg";
import walletLargeSvg from "../../assets/svg/walletLarge.svg";
import arrowNextSvg from "../../assets/svg/arrowNext.svg";
import { ConverterCard } from "../ConverterCard/ConverterCard";
import { useAppSelector } from "../../hooks/hooks";
import { ChooseToken } from "../ChooseToken/ChooseToken";

export const Converter = () => {
  const [activeTab, setActiveTab] = useState("Swap");
  const {
    sellableToken: {
      sellableTokenName,
      sellableTokenPerOtherToken,
      sellableTokenPer1Dollar,
    },
    purchasedToken: { purchasedTokenName },
  } = useAppSelector((state) => state.converterSlice);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ChooseToken />
        <ul className={styles.tabs}>
          <li>
            <Button
              variant="transparentIsActive"
              isActive={activeTab === "Swap"}
              onClick={() => setActiveTab("Swap")}
            >
              Swap
            </Button>
          </li>
          <li>
            <Button
              variant="transparentIsActive"
              isActive={activeTab === "Pools"}
              onClick={() => setActiveTab("Pools")}
            >
              Pools
            </Button>
          </li>
        </ul>

        <div className={styles.converter}>
          <div className={styles.cards}>
            <ConverterCard operation="sell" token={sellableTokenName} />
            <ConverterCard operation="purchase" token={purchasedTokenName} />
            <Button variant="converter">
              <div className={styles.ellipse}>
                <img
                  src={arrowNextSvg}
                  className={styles.arrowNext}
                  alt="стрелка"
                />
              </div>
            </Button>
          </div>
          <div className={styles.exchangeRate}>
            <img src={infoSvg} alt="информация" />
            <p className={styles.exchangeRateText}>
              {`1 ${sellableTokenName.toUpperCase()} = ${sellableTokenPerOtherToken.toFixed(
                3
              )}
                  ${purchasedTokenName.toUpperCase()} `}
              <span className={styles.dollars}>
                ({`$${sellableTokenPer1Dollar.toFixed(2)}`})
              </span>
            </p>
          </div>

          <Button variant="wallet">
            <img
              src={walletLargeSvg}
              alt="кошелек"
              className={styles.walletSvg}
            />
            Сonnect walley
          </Button>
        </div>
      </div>
    </main>
  );
};
