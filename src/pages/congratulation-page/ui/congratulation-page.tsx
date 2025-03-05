import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { startTimer } from "shared/libs/useTimer";

import CardImage from "shared/assets/images/card_image.png";
import ATMIcon from "shared/assets/icons/atm_icon.svg";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Router } from "shared/config/Router";
import { CardMachineMessages, CartomatApi } from "entities/cartomat/model";
import { captureCard } from "entities/cartomat/libs";
import { useCardData } from "entities/card/model";
import { CardApi } from "entities/card/model/api";

const WAITING_TIME = 60_000;

export const CongratulationPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cardInfo = useCardData((s) => s.data);
  const slug = useCardData((s) => s.link);

  useEffect(() => {
    CartomatApi.ejectCard();

    const handleCardStatus = async () => {
      try {
        const response = await CartomatApi.cardStatus();
        const { message } = response.data;

        if (message === CardMachineMessages.CardExtracted) {
          await CardApi.link({ slug, body: { card_data: cardInfo } });
        } else {
          captureCard();
        }
      } catch (error) {
        console.error("Error handling card status:", error);
      } finally {
        navigate(Router.MainPage);
      }
    };

    const timer = startTimer(handleCardStatus, WAITING_TIME);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.subTitle}>{t("your_card_ready")}</p>
          <p className={styles.title}>{t("congratulation")}</p>
        </div>

        <div className={styles.card}>
          <img src={CardImage} alt="" />
        </div>

        <div className={styles.footer}>
          <p className={styles.title}>{t("get_your_card")}</p>

          <img src={ATMIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
