import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { GoWelcomePage } from "features/go-welcome-page";
import BackPageFeat from "features/back-page/back-page-feat";

import { ContentBox, QRCode } from "shared/ui";
import { useCardData } from "entities/card/model";
import { SocketService } from "entities/card/api";
import { CardApi } from "entities/card/model/api";
import { startTimer } from "shared/libs/useTimer";
import { useNavigate } from "react-router-dom";
import { Router } from "shared/config/Router";
import { io } from "socket.io-client";
import { SocketCardData } from "entities/card/types";
import { Loader } from "shared/ui/loader";

const socketUrl = import.meta.env.VITE_MBANK_SERVICE_URL;
const socketService = SocketService.getInstance();

const socket = io(socketUrl, {
  transports: ["websocket"],
  autoConnect: false,
});

export const ScanQR = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [connect, setConnect] = useState(false);

  const link = useCardData((s) => s.link);
  const setLink = useCardData((s) => s.setLink);
  const setCardType = useCardData((s) => s.setCardType);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const fetchQR = async () => {
      const { data } = await CardApi.getQR();
      const { qr_str: link, qr_lifetime_in_seconds: lifetime } = data;

      socket.io.opts.query = { qr_str: link };
      socket.connect();
      setLink(link);
      setConnect(true);

      timer = startTimer(() => {
        navigate(Router.LoadingCard);
      }, lifetime * 100);
    };

    fetchQR();

    return () => {
      timer && clearTimeout(timer);

      socketService.off("cart_status");
      socketService.disconnect();
    };
  }, []);

  useEffect(() => {
    // socket.on("connect", () => {
    //   setConnect(true);
    // });

    socket.on("cart_status", ({ status, card_product }: SocketCardData) => {
      if (status === "give") {
        setCardType(card_product);
        navigate(Router.LoadingCard);
        return;
      }

      navigate(Router.RequestMissing);
    });

    return () => {
      socket.off("cart_status");
    };
  }, []);

  return (
    <div className={clsx("container")}>
      <ContentBox
        header={t("check_qr_title")}
        body={
          connect ? (
            <QRCode value={link || ""} description={t("scan_qr_age_limit")} />
          ) : (
            <Loader />
          )
        }
        footer={<GoWelcomePage />}
      />

      <BackPageFeat />
    </div>
  );
};
