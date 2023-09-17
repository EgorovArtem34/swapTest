import styles from "./chooseToken.module.scss";
import backSvg from "../../assets/svg/back.svg";
import searchSvg from "../../assets/svg/search.svg";
import { Button } from "../../ui/Button/Button";
import { tokens } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { unsetIsSelectedToken } from "../../store/slices/selectedTokenSlice";
import { tokensEnum } from "../../store/types";
import {
  setPurchasedToken,
  setSellableToken,
} from "../../store/slices/converterSlice";

export const ChooseToken = () => {
  const dispatch = useAppDispatch();
  const {
    sellableToken: { sellableTokenCount, sellableTokenName },
    purchasedToken: { purchasedTokenCount },
  } = useAppSelector((state) => state.converterSlice);
  const { selectedOperationType, isSelectedToken } = useAppSelector(
    (state) => state.selectedTokenSlice
  );

  const handleBack = () => {
    dispatch(unsetIsSelectedToken());
  };
  const handleSelect = (tokenType: tokensEnum) => {
    switch (selectedOperationType) {
      case "sell":
        dispatch(setSellableToken(tokenType));
        break;
      case "purchase":
        dispatch(setPurchasedToken(tokenType));
        break;
      default:
        break;
    }
    dispatch(unsetIsSelectedToken());
  };

  return (
    <div
      className={isSelectedToken ? styles.modal : ""}
      onClick={handleBack}
      onKeyDown={handleBack}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styles.container} ${isSelectedToken && styles.active}`}
      >
        <div className={styles.header}>
          <Button
            variant="transparent"
            aria-label="вернуться назад"
            onClick={handleBack}
          >
            <img src={backSvg} alt="назад" />
          </Button>
          <h3 className={styles.title}>Выберите токен</h3>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="search"
            placeholder="Search by name or paste number"
            className={styles.inputSearch}
            disabled
          />
          <div className={styles.inputLoupe}>
            <img src={searchSvg} alt="поиск" />
          </div>
        </div>
        <div className={styles.btns}>
          {Object.keys(tokens).map((tokenKey) => (
            <Button
              variant="chooseBtn"
              key={tokenKey}
              onClick={() => handleSelect(tokens[tokenKey].name as tokensEnum)}
              aria-label={`выбрать токен ${tokenKey}`}
            >
              <img
                src={tokens[tokenKey].image}
                alt="логотип"
                className={styles[tokenKey]}
              />
              {tokenKey.toLocaleUpperCase()}
            </Button>
          ))}
        </div>
        <div className={styles.searchedTokens}>
          {Object.keys(tokens).map((tokenKey) => (
            <div className={styles.tokenContainer} key={tokenKey}>
              <Button
                variant="chooseBtnSearched"
                onClick={() =>
                  handleSelect(tokens[tokenKey].name as tokensEnum)
                }
                aria-label={`выбрать токен ${tokenKey}`}
              >
                <img
                  src={tokens[tokenKey].image}
                  alt="логотип"
                  className={styles[tokenKey]}
                />
                {tokenKey.toLocaleUpperCase()}
              </Button>
              <p>
                {sellableTokenName === tokenKey
                  ? sellableTokenCount
                  : purchasedTokenCount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
