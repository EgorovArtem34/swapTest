import { useState } from "react";
import { Button } from "../../ui/Button/Button";
import styles from "./сonverter.module.scss";
import infoSvg from "../../assets/svg/info.svg";
import walletLargeSvg from "../../assets/svg/walletLarge.svg";
import { ConverterCard } from "../ConverterCard/ConverterCard";

export const Converter = () => {
  const [activeTab, setActiveTab] = useState("Swap");

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ul className={styles.tabs}>
          <li>
            <Button
              variant="transparent"
              isActive={activeTab === "Swap"}
              onClick={() => setActiveTab("Swap")}
            >
              Swap
            </Button>
          </li>
          <li>
            <Button
              variant="transparent"
              isActive={activeTab === "Pools"}
              onClick={() => setActiveTab("Pools")}
            >
              Pools
            </Button>
          </li>
        </ul>

        <div className={styles.converter}>
          <div className={styles.cards}>
            <ConverterCard operation="sell" token="cryg" />
            <ConverterCard operation="purchase" token="del" />
          </div>
          <div className={styles.exchangeRate}>
            <img src={infoSvg} alt="информация" />
            <p className={styles.exchangeRateText}>
              1 {"token"} = <span className={styles.dollars}>(number)</span>
            </p>
          </div>

          <Button variant="wallet">
            <img src={walletLargeSvg} alt="кошелек" />
            Сonnect walley
          </Button>
        </div>
      </div>
    </main>
  );
};
