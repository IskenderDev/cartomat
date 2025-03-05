import { create } from "zustand";
import { CardData, CardType } from "../types";

interface UseCardDataStore {
  data?: CardData;
  link?: string;
  cardType?: CardType;
  setData: (value: CardData) => void;
  setLink: (value: string) => void;
  setCardType: (value: CardType) => void;
}

export const useCardData = create<UseCardDataStore>((set) => ({
  setData: (data) => set({ data }),
  setLink: (link) => set({ link }),
  setCardType: (cardType) => set({ cardType }),
}));
