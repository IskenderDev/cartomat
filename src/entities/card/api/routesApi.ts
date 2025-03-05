import { BaseUrl } from "shared/api";

const { BankService } = BaseUrl;

const requestWrapper = (url: string) => `${BankService}/device/${url}/`;

export const routesApi = {
  init: requestWrapper("init"),
  issueCard: requestWrapper("issue_card"),
  getQr: requestWrapper("get_qr"),
  linkCard: (slug: string) => requestWrapper(`${slug}/link_card`),
  marketLink: requestWrapper("market_link"),
  searchCard: requestWrapper("search_card"),
} as const;
