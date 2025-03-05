import clsx from "clsx";
import styles from "./styles.module.scss";

interface Props {
  isActive?: boolean;
}

export const ArrowDownIcon = ({ isActive = false }: Props) => {
  return (
    <div className={clsx(isActive ? styles.active : styles.unactive)}>
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.1055 14.0175L18.1347 22.9883L9.16394 14.0175"
          stroke="#ffffff"
          strokeWidth="2.55596"
        />
      </svg>
    </div>
  );
};
