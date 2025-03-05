import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { UserExistMbank } from "features/user-exist-mbank";
import BackPageFeat from "features/back-page/back-page-feat";

import PhonesImages from "shared/assets/images/phones_screens.png";

import { ContentBox } from "shared/ui";

export const UserMbank = () => {
  const { t } = useTranslation();

  return (
    <div className={clsx("container")}>
      <ContentBox
        header={t("first_step")}
        body={<img src={PhonesImages} />}
        footer={<UserExistMbank />}
      />

      <BackPageFeat />
    </div>
  );
};
