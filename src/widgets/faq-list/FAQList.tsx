import { useEffect, useState } from "react";
import { FAQItem } from "entities/faq/model/types";
import { faqApi } from "entities/faq/api/api";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";
import BackPageFeat from "features/back-page/back-page-feat";
import { CreditCard, EyeIcon, FolderUploadIcon, ReadyIcon, TimeIcon, UserIcon, WalletIcon } from "shared/iconpack";
import { FaqElement } from "entities/faq/ui/Accordion";
import { Modal } from "shared/ui";

export const FAQList = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [faqList, setFaqList] = useState<FAQItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<FAQItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    faqApi
      .getFAQ()
      .then(({ data }) => setFaqList(data))
      .catch(() => setFaqList([]))
      .finally(() => setLoading(false));
  }, []);

  const iconMap: Record<string, React.ElementType> = {
    "Как заказать карту?": CreditCard,
    "Сколько стоит выпуск карты?": FolderUploadIcon,
    "Как долго занимает выпуск карты?": WalletIcon,
    "Где можно использовать?" : UserIcon,
    "Какие документы нужны?" : FolderUploadIcon,
    "Как заблокировать карту?" : EyeIcon,
    "Как изменить лимит на карте?": TimeIcon,
    "Как активировать карту?" : ReadyIcon
  };

  const openModal = (item: FAQItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return <p className={styles.loading}>{t("loading")}</p>;
  }

  if (!faqList.length) {
    return <p className={styles.empty}>noQuestions</p>;
  }

  return (
    <div>
      <div className={styles.container}>
        {faqList.map((faqItem) => {
          const Icon = iconMap[faqItem.question] || CreditCard;
          return (
            <div key={faqItem.id} onClick={() => openModal(faqItem)}>
              <FaqElement
                id={faqItem.id}
                question={faqItem.question}
                answer={
                  Array.isArray(faqItem.answer)
                    ? faqItem.answer
                    : [faqItem.answer]
                }
                icon={Icon}
              />
            </div>
          );
        })}
      </div>

      <BackPageFeat />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedItem && (
          <div>
            <h2 className={styles.modalTitle}>{t(selectedItem.question)}</h2>
            {Array.isArray(selectedItem.answer) ? (
              selectedItem.answer.map((text, idx) => (
                <p className={styles.modalDis} key={idx}>
                  {t(text)}
                </p>
              ))
            ) : (
              <p className={styles.modalDis}>{t(selectedItem.answer)}</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};
