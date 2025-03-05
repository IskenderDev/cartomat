import { $api } from "shared/api";
import { routesApi } from "../api";
import { InitDeviceResponse, InstantCardResponse, MBankLink } from "../types";
import { AxiosResponse } from "axios";

interface BodyType {
  [key: string]: unknown;
}

interface ParamsType {
  [key: string]: unknown;
}

interface HeaderType {
  [key: string]: string;
}

interface CardApiProps {
  slug?: string;
  body?: BodyType | FormData;
  params?: ParamsType;
  headers?: HeaderType;
}

type AxiosPromiseResponse = Promise<AxiosResponse<InitDeviceResponse, unknown>>;

export const CardApi = {
  getQR: (): Promise<AxiosResponse<InstantCardResponse, unknown>> => {
    return $api.post(routesApi.getQr);
  },

  getMarketLink: (): Promise<AxiosResponse<MBankLink, unknown>> => {
    return $api.get(routesApi.marketLink);
  },

  init: ({ body, headers }: CardApiProps): AxiosPromiseResponse => {
    return $api.post(routesApi.init, body, { headers });
  },

  search: ({ body }: CardApiProps) => {
    return $api.post(routesApi.searchCard, body);
  },

  link: ({ slug, body }: CardApiProps) => {
    return $api.post(routesApi.linkCard(slug!), body);
  },
};
