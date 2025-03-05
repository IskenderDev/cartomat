import { CardData, SearchCard } from "entities/card/types";
import { CardApi } from "entities/card/model/api";

export const searchCard = async (data: SearchCard): Promise<CardData> => {
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key as keyof SearchCard].toString());
  }

  const response = await CardApi.search({ body: formData });

  return response.data;
};
