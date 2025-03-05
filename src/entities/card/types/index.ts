export type CardType = "bars" | "color";
export type CardStatus = "give" | "cancel";

export interface CardData {
  Product: string;
  Cur: string;
  Dog: string;
  Card: string;
  State: string;
  Pan: string;
  Filial: string;
  Answer: string;
}

export interface SearchCard {
  pan: string;
  card_product: number | string;
}

export interface InstantCardResponse {
  qr_str: string;
  qr_lifetime_in_seconds: number;
}

export interface InitDeviceResponse {
  device_key: string;
}

export interface SocketCardData {
  card_product: CardType;
  status: CardStatus;
}

export interface MBankLink {
  market_link: string;
}
