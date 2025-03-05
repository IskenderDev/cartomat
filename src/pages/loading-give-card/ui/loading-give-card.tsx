import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Loader } from "shared/ui/loader";
import { VideoPlayer } from "shared/ui/video-player";

import LoadingGiveCardVideo from "shared/assets/videos/loading_get_card.mp4";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Router } from "shared/config/Router";
import { BoxTypesMap, useCardData } from "entities/card/model";
import { searchCard } from "../api";
import { CardMachineMessages, CartomatApi } from "entities/cartomat/model";
import { delay } from "shared/libs/delay";
import { encryptCardPAN } from "entities/card/libs";

/*
  TODOS: 
  2. Чтение его данных и отправка на бэк (с форматированием данных) 
  4. Обработка при ошибке чтении карты 
*/

const LOADING_TIME = 60_000;

export const LoadingGiveCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cardType = useCardData((s) => s.cardType);
  const setCardData = useCardData((s) => s.setData);

  const requiredBox = cardType && BoxTypesMap[cardType];

  const handleMissingBox = () => {
    const params = new URLSearchParams();
    params.set("error-type", "some-name-error");

    navigate({
      pathname: Router.ErrorPage,
      search: params.toString(),
    });
  };

  const processCard = async () => {
    if (!requiredBox) return;

    try {
      CartomatApi.initialize();
      await delay(2_000);

      await CartomatApi.giveCard(requiredBox);
      await delay(2_000);

      const { data } = await CartomatApi.readCard(2);
      const { message: pan } = data;

      if (!pan || pan === CardMachineMessages.ReadingError) {
        handleMissingBox();
      }

      const cardData = await searchCard({
        pan: encryptCardPAN(pan),
        card_product: cardType,
      });

      setCardData(cardData);
    } catch (error) {
      console.error("Ошибка обработки карты:", error);
      handleMissingBox();
    }
  };

  useEffect(() => {
    if (!requiredBox) {
      handleMissingBox();
      return;
    }

    processCard();

    const timer = setTimeout(() => {
      navigate(Router.Congratulation);
    }, LOADING_TIME);

    return () => clearTimeout(timer);
  }, [requiredBox]);

  return (
    <div className={styles.container}>
      <VideoPlayer src={LoadingGiveCardVideo} />

      <div className={styles.content}>
        <h3>{t("your_card_give_you")}</h3>
        <Loader />
      </div>
    </div>
  );
};
