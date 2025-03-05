import { Player } from "@lottiefiles/react-lottie-player";

import FileJSON from "shared/assets/json/loader.json";

export const Loader = () => {
  return (
    <Player
      src={FileJSON}
      loop
      autoplay
      renderer={"svg"}
      style={{ height: 400, width: 400 }}
    />
  );
};
