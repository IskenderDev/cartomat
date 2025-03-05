import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CloseIcon } from "shared/iconpack";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); 
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : styles.close}`} onClick={onClose}>
      <div className={`${styles.modal} ${isOpen ? styles.open : styles.close}`} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon/>
        </button>
      </div>
    </div>
  );
};
