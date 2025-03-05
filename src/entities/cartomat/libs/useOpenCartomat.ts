import { CartomatApi } from "../model";

export const useOpenCartomat = () => {
  const openCartomat = () => {
    CartomatApi.openCardMachine();
  };

  return { openCartomat };
};
