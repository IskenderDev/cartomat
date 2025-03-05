import clsx from "clsx";

import { GoWelcomePage } from "features/go-welcome-page";
import BackPageFeat from "features/back-page/back-page-feat";

import { ContentBox, QRCode } from "shared/ui";

const link = "some-link";

export const RequestMissing = () => {
  const header = "Заполните заявку в приложении MBANK";
  const description =
    "Отсканировать QR и заполнить анкету для получения карты для ребёнка";

  return (
    <div className={clsx("container")}>
      <ContentBox
        header={header}
        body={<QRCode value={link} description={description} />}
        footer={<GoWelcomePage withTimer />}
      />

      <BackPageFeat />
    </div>
  );
};
