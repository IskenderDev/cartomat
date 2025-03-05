import { Language } from "../types";

import RUSIcon_image from "shared/assets/icons/rus_icon.svg";
import KGZIcon_image from "shared/assets/icons/kgz_icon.svg";
import ENGIcon_image from "shared/assets/icons/eng_icon.svg";

export const LanguagesMap: Language[] = [
  {
    name: "Рус",
    icon: RUSIcon_image,
    value: "ru",
  },
  {
    name: "Кыр",
    icon: KGZIcon_image,
    value: "kg",
  },
  {
    name: "Eng",
    icon: ENGIcon_image,
    value: "en",
  },
];
