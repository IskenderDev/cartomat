import { useTranslation } from "react-i18next";

import UnknownImage from "shared/assets/images/warning_image.png";
import CollectionImage from "shared/assets/images/collection.png";
import SettingsImage from "shared/assets/images/settings_image.png";
import NoInternetImage from "shared/assets/images/no_internet.png";

export enum ErrorTypes {
  Unknown = "unknown",
  Collection = "collection",
  TechnicalWorks = "technicalWorks",
  NoConnection = "no_connection",
}

export function useErrorTypes() {
  const { t } = useTranslation();

  const ERRORS = {
    [ErrorTypes.Unknown]: {
      image: UnknownImage,
      text: t("unknown_error.title"),
      description: t("unknown_error.sub_title"),
    },
    [ErrorTypes.Collection]: {
      image: CollectionImage,
      text: t("collection.title"),
      description: t("collection.sub_title"),
    },
    [ErrorTypes.TechnicalWorks]: {
      image: SettingsImage,
      text: t("no_connection.title"),
      description: t("no_connection.sub_title"),
    },
    [ErrorTypes.NoConnection]: {
      image: NoInternetImage,
      text: t("technical_works.title"),
      description: t("technical_works.sub_title"),
    },
  };

  return { ERRORS };
}
