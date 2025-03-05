import { Language } from "features/select-languages/types";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface LanguageItemProps {
  language: Language;
  isActive: boolean;
  onClick?: (value: Language["value"]) => void;
}

export function LanguageItem({
  language,
  isActive,
  onClick,
}: LanguageItemProps) {
  return (
    <button
      onClick={() => onClick?.(language.value)}
      className={clsx(styles.button, isActive && styles.active)}
    >
      {isActive && (
        <div className={styles.iconWrapper}>
          <img src={language.icon} />
        </div>
      )}

      <div className={clsx(styles.text, isActive && styles.active)}>
        {language.name}
      </div>
    </button>
  );
}
