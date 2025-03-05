import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { Router } from "shared/config/Router";
import { Button } from "shared/ui";
import { ButtonTypes } from "shared/ui/button/button";

import styles from "./styles.module.scss";

export const UserExistMbank = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Button
          onClick={() => navigate(Router.DownloadApp)}
          backgroundColor={ButtonTypes.White}
        >
          {t("no")}
        </Button>
      </div>

      <div className={styles.button}>
        <Button onClick={() => navigate(Router.ScanQR)}>{t("yes")}</Button>
      </div>
    </div>
  );
};
