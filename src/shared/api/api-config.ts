const isDev = import.meta.env.MODE === "development";

export const BaseUrl = {
  BankService: isDev ? "/api" : import.meta.env.VITE_MBANK_SERVICE_URL + "/api",
  CardMachine: isDev ? "/cartomat" : import.meta.env.VITE_CARD_MACHINE_URL,
};
