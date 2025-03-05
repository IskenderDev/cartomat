import { BaseUrl } from "shared/api";

const { CardMachine: baseUrl } = BaseUrl;

export const routesApi = {
  openCardMachine: `${baseUrl}/open-card-machine`,
  close: `${baseUrl}/close`,
  initialize: `${baseUrl}/initialize`,
  capture: `${baseUrl}/capture`,
  retrieve: `${baseUrl}/retrieve`,
  cardStatus: `${baseUrl}/card-status`,
  readCard: (box: number) => `${baseUrl}/read-card-data-from-${box}-box`,
  giveCard: (box: number) => `${baseUrl}/give-card-from-${box}-box`,
  ejectCard: `${baseUrl}/eject-card`,
} as const;
