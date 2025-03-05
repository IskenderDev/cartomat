import AppRouter from "./router";
import ReactDOM from "react-dom/client";

import "shared/config/i18/i18";
import "shared/config/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(<AppRouter />);

postMessage({ payload: "removeLoading" }, "*");
