import { FAQList } from "widgets/faq-list";
import styles from './styles.module.scss'
import HelpImg from 'shared/assets/images/FAQ_help.png';
import { t } from "i18next";

export const FaqPage = () => {
  return (
    <div className={styles.FAQPage}>
      <div className={styles.title}>
        <h2 className={styles.titleText}>{t("faqTitle")}</h2>
        <img src={HelpImg} alt="help" />
      </div>
      <FAQList />
    </div>
  );
};
