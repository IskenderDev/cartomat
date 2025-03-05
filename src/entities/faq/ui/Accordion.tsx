import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

interface AccordionProps {
  id: number;
  question: string;
  answer: string[];
  icon: React.ElementType;
}

export const FaqElement = ({
  id,
  question,
  answer,
  icon: Icon,
}: AccordionProps) => {
  const { t } = useTranslation();

  console.log(id);

  return (
    <div className={styles.accordion}>
      <Icon className={styles.icon} />
      <p className={styles.question}>
        <span>{t(question)}</span>
      </p>
      <div className={`${styles.answerWrapper}`}>
        <div className={styles.answerContent}>
          {answer.map((text, idx) => (
            <p key={idx}>
              <span className={styles.answerNumber}>{idx + 1}.</span> {t(text)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
