import styles from "./header.module.scss";
import logoSvg from "../../assets/svg/logo.svg";
import languageSvg from "../../assets/svg/language.svg";
import decimalSvg from "../../assets/svg/decimal.svg";
import walletSvg from "../../assets/svg/wallet.svg";
import arrowSvg from "../../assets/svg/arrow.svg";
import { Button } from "../../ui/Button/Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoAndNavContainer}>
          <div className={styles.logoContainer}>
            <a href="/" className={styles.mainLink}>
              <img src={logoSvg} alt="логотип" className={styles.logo} />
              Canyon Swap
            </a>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="/" className={`${styles.link} ${styles.active}`}>
                  Главная
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#" className={styles.link}>
                  Лендинг
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#" className={styles.link}>
                  FAQ
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#" className={styles.link}>
                  Обратная связь
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.interface}>
          <Button variant="interface" aria-label="сменить язык">
            <img src={languageSvg} alt="язык" />
            RU
            <img src={arrowSvg} alt="стрелка" />
          </Button>

          <Button variant="interface">
            <img src={decimalSvg} alt="логотип" />
            Decimal
          </Button>

          <Button variant="interface" aria-label="подключение кошелька">
            <img src={walletSvg} alt="кошелек" />
            Connect wallet
          </Button>
        </div>
      </div>
    </header>
  );
};
