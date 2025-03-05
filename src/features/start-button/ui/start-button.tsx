import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { Button } from "shared/ui";

import { Router } from "shared/config/Router";

export const StartButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onGetCard = () => {
    navigate(Router.UserMBANK);
  };

  return <Button onClick={onGetCard}>{t("get_card_offer")}</Button>;
};
