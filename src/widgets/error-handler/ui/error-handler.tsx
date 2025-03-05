import clsx from "clsx";
import { AppHeader } from "widgets/header";

import { ImageTitleDescription } from "shared/ui/image-title-description";

import styles from "./styles.module.scss";
import { useErrorTypes, ErrorTypes } from "../lib";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Router } from "shared/config/Router";

interface Props {
  typeError?: ErrorTypes;
}

export const ErrorHandler = ({ typeError = ErrorTypes.Unknown }: Props) => {
  const { ERRORS } = useErrorTypes();
  const navigate = useNavigate();

  const data = ERRORS[typeError];
  const online = navigator.onLine;

  useEffect(() => {
    if (online) {
      navigate(Router.MainPage);
    }
  }, [online]);

  return (
    <div className={clsx("container", styles.container)}>
      <div className={styles.header}>
        <AppHeader />
      </div>

      <ImageTitleDescription {...data} />
    </div>
  );
};
