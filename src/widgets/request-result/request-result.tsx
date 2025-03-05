import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { AppHeader } from "widgets/header";

import ImageText from "shared/ui/image-text";

import ConfirmedError from "shared/assets/images/confirmed_error.png";
import ConfirmedSuccess from "shared/assets/images/confirmed_success.png";

import styles from "./styles.module.scss";

export enum REQUEST_RESULT {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface Props {
  resultRequest?: REQUEST_RESULT;
}

export const RequestResult = ({
  resultRequest = REQUEST_RESULT.ERROR,
}: Props) => {
  const { t } = useTranslation();

  const RESULT_REQUEST = {
    [REQUEST_RESULT.SUCCESS]: {
      image: ConfirmedSuccess,
      title: t("request_success"),
    },
    [REQUEST_RESULT.ERROR]: {
      image: ConfirmedError,
      title: t("request_error"),
    },
  };

  const data = RESULT_REQUEST[resultRequest];

  return (
    <div className={clsx("container", styles.container)}>
      <div className={styles.header}>
        <AppHeader />
      </div>

      <ImageText
        text={data.title}
        image={data.image}
        imageStyles={styles.img}
      />
    </div>
  );
};
