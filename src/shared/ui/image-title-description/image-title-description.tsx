import { TextModels } from "shared/models";

import styles from "./styles.module.scss";

interface Props extends TextModels {
  image: string;
  text: string;
  description: string;
  imageStyles?: string;
}

export const ImageTitleDescription = ({
  image,
  text,
  fontSize,
  fontWeight,
  lineHeight,
  imageStyles,
  description,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} className={imageStyles} alt="" />
      </div>

      <p style={{ fontSize, fontWeight, lineHeight }} className={styles.text}>
        {text}
      </p>

      <p className={styles.description}>{description}</p>
    </div>
  );
};
