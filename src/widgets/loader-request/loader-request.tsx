import { useTranslation } from "react-i18next";

import { Loader } from "shared/ui/loader";

import CartomatImage from "shared/assets/webp/cartomat.webp";
import styles from "./styles.module.scss";

export const LoaderRequest = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <Loader />
      </div>

      <img src={CartomatImage} height={"65%"} alt="no image" />

      <div className={styles.text}>
        <h1>{t("dont_leave")}</h1>
      </div>
    </div>
  );
};
