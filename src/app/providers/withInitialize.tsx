import { useInitializeCartomat } from "entities/card/libs/useInitializeCartomat";
import { useOpenCartomat } from "entities/cartomat/libs";
import { CartomatApi } from "entities/cartomat/model";
import { ReactNode, useEffect } from "react";
import { clearLocalStorage } from "shared/libs/storage";

interface WithInitializeProps {
  children: ReactNode;
}

export const WithInitialize = ({ children }: WithInitializeProps) => {
  const { initCartomat } = useInitializeCartomat();
  const { openCartomat } = useOpenCartomat();

  useEffect(() => {
    initCartomat();
    openCartomat();

    return () => {
      CartomatApi.close();
      clearLocalStorage();
    };
  }, []);

  return <>{children}</>;
};
