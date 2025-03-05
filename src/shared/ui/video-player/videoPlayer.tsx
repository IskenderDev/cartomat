import clsx from "clsx";
import { VideoHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
  classNameWrapper?: string;
}

export const VideoPlayer = ({
  classNameWrapper,
  autoPlay = true,
  loop = true,
  ...props
}: Props) => {
  return (
    <div className={clsx(classNameWrapper, styles.container)}>
      <video autoPlay={autoPlay} loop={loop} {...props} />
    </div>
  );
};
