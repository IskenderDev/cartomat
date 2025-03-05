import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface ContentBoxProps {
  header: string;
  body: ReactNode;
  footer: ReactNode;
}

export function ContentBox({ header, body, footer }: ContentBoxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}
