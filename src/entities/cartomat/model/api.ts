import { $api } from "shared/api";
import { routesApi } from "../api";
import { AxiosResponse } from "axios";

export const CartomatApi = {
  openCardMachine: () => {
    return $api.post(routesApi.openCardMachine);
  },

  close: () => {
    return $api.post(routesApi.close);
  },

  initialize: () => {
    return $api.post(routesApi.initialize);
  },

  capture: () => {
    return $api.post(routesApi.capture);
  },

  retrieve: () => {
    return $api.post(routesApi.retrieve);
  },

  cardStatus: (): Promise<AxiosResponse<{ message: string }>> => {
    return $api.post(routesApi.cardStatus);
  },

  readCard: (box: number): Promise<AxiosResponse<{ message: string }>> => {
    return $api.post(routesApi.readCard(box));
  },

  giveCard: (box: number) => {
    return $api.post(routesApi.giveCard(box));
  },

  ejectCard: () => {
    return $api.post(routesApi.ejectCard);
  },
};
