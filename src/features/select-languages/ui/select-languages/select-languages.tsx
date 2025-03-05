import { useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageItem } from "../language-item";
import { Language } from "features/select-languages/types";

import styles from "./styles.module.scss";
import { LanguagesMap } from "features/select-languages/model";

export const SelectLanguages = () => {
  const { i18n } = useTranslation();

  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const handleSelectLanguage = (value: Language["value"]) => {
    i18n.changeLanguage(value);
    setActiveLanguage(value);
  };

  return (
    <div className={styles.container}>
      {LanguagesMap.map((item) => {
        return (
          <LanguageItem
            key={item.value}
            language={item}
            isActive={item.value === activeLanguage}
            onClick={handleSelectLanguage}
          />
        );
      })}
    </div>
  );
};
