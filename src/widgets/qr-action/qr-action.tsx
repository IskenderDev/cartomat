import {ReactNode} from "react";

import {TextModels} from "shared/models";

import styles from "./styles.module.scss"

interface Props {
  title?: string,
  description?: string,
  children?: ReactNode,
  titleStyle?: TextModels,
  descriptionStyle?: TextModels,
}

export const QRAction = ({title, description, titleStyle, descriptionStyle, children}: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title} style={titleStyle}>{title}</p>

      <div className={styles.childrenWrapper}>
        {children}
      </div>

      <p className={styles.description} style={descriptionStyle}>{description}</p>
    </div>
  );
};