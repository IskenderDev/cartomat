import { VideoPlayer } from "shared/ui/video-player";
import { SelectLanguages } from "features/select-languages/ui/select-languages";
import { StartButton } from "features/start-button/ui";
import WelcomeVideo from "shared/assets/webm/welcome.webm";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Router } from "shared/config/Router";
import { ErrorTypes } from "widgets/error-handler/lib";
import { GoFaqPage } from "features/go-faq-page/ui";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

/*
  TODO: 
  1. Проверка на наличие карт в боксах перед началом
    - Если нет, то navigate на страницу "Нет карт" 
  2. Проверка есть подключние к интернету
    - Если нет, то navigate на страницу "Нету интернета" 
*/

export const Welcome = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!navigator.onLine) {
      const params = new URLSearchParams();
      params.set("error-type", ErrorTypes.NoConnection);

      navigate({
        pathname: Router.ErrorPage,
        search: params.toString(),
      });
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>MBANK JUNIOR</p>
        <p className={styles.subTitle}>{t("get_card")}</p>
      </div>

      <div className={styles.content}>
        <StartButton />

        <div className={styles.footer}>
          <SelectLanguages />
          <GoFaqPage />
        </div>
      </div>

      <div className={styles.videoWrapper}>
        <VideoPlayer src={WelcomeVideo} />
      </div>
    </div>
  );
};
