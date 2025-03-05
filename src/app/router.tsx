import { HashRouter, Route, Routes } from "react-router-dom";

import { Router } from "shared/config/Router";

import { Welcome } from "pages/welcome/ui";
import { UserMbank } from "pages/user-mbank";
import { DownloadMbank } from "pages/download-mbank/ui";
import { ScanQR } from "pages/scan-qr/ui";
import { RequestMissing } from "pages/request-missing/ui";
import { LoadingGiveCard } from "pages/loading-give-card/ui";
import { CongratulationPage } from "pages/congratulation-page/ui";
import { ErrorHandlerPage } from "pages/error-handler-page";
import { WithInitialize } from "./providers";
import { FaqPage } from "pages/faq-page/ui";

const RouterPages = () => {
  return (
    <WithInitialize>
      <HashRouter>
        <Routes>
          <Route path={Router.MainPage} element={<Welcome />} />
          <Route path={Router.UserMBANK} element={<UserMbank />} />
          <Route path={Router.DownloadApp} element={<DownloadMbank />} />
          <Route path={Router.ScanQR} element={<ScanQR />} />
          <Route path={Router.RequestMissing} element={<RequestMissing />} />
          <Route path={Router.LoadingCard} element={<LoadingGiveCard />} />
          <Route
            path={Router.Congratulation}
            element={<CongratulationPage />}
          />
          <Route path={Router.ErrorPage} element={<ErrorHandlerPage />} />
          <Route path={Router.FAQ_Page} element={<FaqPage />} />
        </Routes>
      </HashRouter>
    </WithInitialize>
  );
};

export default RouterPages;
