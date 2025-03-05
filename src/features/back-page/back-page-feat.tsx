import { useNavigate } from "react-router";

import { BackPage } from "shared/ui/back-page";

import styles from "./styles.module.scss";

interface BackPageFeatProps {
  onClick?: () => void;
}

const BackPageFeat = ({ onClick }: BackPageFeatProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.();
    navigate(-1);
  };

  return (
    <div className={styles.button}>
      <BackPage onClick={handleClick} />;
    </div>
  );
};

export default BackPageFeat;
