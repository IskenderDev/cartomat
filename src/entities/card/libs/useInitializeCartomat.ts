import { CardApi } from "entities/card/model/api";
import { clearLocalStorage, setLocalStorage } from "shared/libs/storage";

export const useInitializeCartomat = () => {
  const initCartomat = async () => {
    clearLocalStorage();

    const cartomatToken = import.meta.env.VITE_CARD_TOKEN;
    const cartomatId = await window.electron.getCartomatId();

    const body = { device_id: cartomatId };
    const headers = { "X-Kartomat-Key": cartomatToken };

    const response = await CardApi.init({ body, headers });
    const token = response.data?.device_key;

    setLocalStorage({ key: "token", value: token });
  };

  return { initCartomat };
};
