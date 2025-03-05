import { ReactNode } from "react";

import LogoFull from "shared/assets/icons/mbank_logo_icon.svg";

import styles from "./styles.module.scss";

interface Props {
  action?: ReactNode;
}

export const AppHeader = ({ action }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={LogoFull} alt="" />
      </div>

      {action}
    </div>
  );
};
