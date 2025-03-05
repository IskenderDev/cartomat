import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { convertSeconds } from "shared/libs/convertSeconds";

interface TimerProps {
  timeout?: number;
  onFinish: () => void;
}

export function Timer({ timeout = 120_000, onFinish }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(timeout / 1000);

  useEffect(() => {
    setTimeLeft(timeout / 1000);

    const timer = setTimeout(onFinish, timeout);
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [timeout]);

  return <div className={styles.timer}>{convertSeconds(timeLeft)}</div>;
}
