import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { GoWelcomePage } from "features/go-welcome-page";
import BackPageFeat from "features/back-page/back-page-feat";

import { ContentBox, QRCode } from "shared/ui";

const link = "https://mbank.kg/lr/mkMy";

export const DownloadMbank = () => {
  const { t } = useTranslation();

  return (
    <div className={clsx("container")}>
      <ContentBox
        header={t("scan_qr")}
        body={<QRCode value={link} description={t("available_on")} />}
        footer={<GoWelcomePage withTimer />}
      />

      <BackPageFeat />
    </div>
  );
};
