import _QRCode from "react-qr-code";

import styles from "./styles.module.scss";

interface QRCodeProps {
  bgColor?: string;
  fgColor?: string;
  level?: string;
  size?: number;
  title?: string;
  value: string;
  description?: string;
}

export function QRCode({ size = 310, description, ...props }: QRCodeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.qrWrapper}>
        <_QRCode size={size} {...props} />
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
}
