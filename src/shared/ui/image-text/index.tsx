import {TextModels} from "shared/models";

import styles from './styles.module.scss';

interface Props extends TextModels {
  image: string,
  text: string,
  imageStyles?: string
}

const ImageText = ({image, text, fontSize, fontWeight, lineHeight, imageStyles}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} className={imageStyles} alt=""/>
      </div>

      <p style={{fontSize, fontWeight, lineHeight}} className={styles.text}>{text}</p>
    </div>
  );
};

export default ImageText;