import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { Button, Timer } from "shared/ui";

import { Router } from "shared/config/Router";
import styles from "./styles.module.scss";

interface GoWelcomePageProps {
  onClick?: () => void;
  withTimer?: boolean;
  timeout?: number;
}

export const GoWelcomePage = ({ onClick, withTimer }: GoWelcomePageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(Router.MainPage);
    onClick?.();
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => onClickNavigate()}>{t("on_main_page")}</Button>;
      {withTimer && (
        <div className={styles.timer}>
          <Timer onFinish={onClickNavigate} />
        </div>
      )}
    </div>
  );
};
