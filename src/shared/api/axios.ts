import axios from "axios";
import { getLocalStorage } from "shared/libs/storage";
import i18n from "i18next";

export const $api = axios.create();

$api.defaults.withCredentials = true;
$api.defaults.responseType = "json";
axios.defaults.headers.common["Accept-Language"] = i18n.language;

$api.interceptors.request.use(async (config) => {
  const token = getLocalStorage("token");

  if (token) {
    config.headers["X-Kartomat-Key"] = token;
  }

  return config;
});
