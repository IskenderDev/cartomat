import { Arrow } from "shared/iconpack";
import styles from "./styles.module.scss";

interface Props {
  onClick?: () => void;
}

export const BackPage = ({ onClick }: Props) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <Arrow />
    </div>
  );
};
