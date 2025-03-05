import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

export enum ButtonTypes {
  White = "white",
  Yellow = "yellow",
  Orange = "orange",
}

interface Props {
  backgroundColor?: ButtonTypes;
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({
  backgroundColor = ButtonTypes.Yellow,
  onClick,
  children,
}: Props) => {
  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        className={clsx(styles.button, styles[backgroundColor])}
      >
        {children}
      </button>
    </div>
  );
};
