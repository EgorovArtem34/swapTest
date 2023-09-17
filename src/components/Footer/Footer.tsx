import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.copyright}>
          Copyright. @ 2023 Corp Name Все права защищены
        </p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="#" className={styles.link}>
            Пользовательское соглашение
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Политика конфиденциальности
          </a>
        </li>
      </ul>
    </footer>
  );
};
