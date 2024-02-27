import { FxPortalClient } from "@maticnetwork/maticjs-fxportal";
import Constants from "../constants/constants";

export const fxPortalClientInit: any = new FxPortalClient({
    network: Constants.NETWORK,
    version: Constants.VERSION,
    parent: {
      provider: Constants.RPC_ETH,
      defaultConfig: {
        from: "0x0",
      },
    },
    child: {
      provider: Constants.RPC_POLYGON,
      defaultConfig: {
        from: "0x0",
      },
    },
    erc20: {
      rootTunnel: Constants.ROOT_TUNNEL,
      childTunnel: Constants.CHILD_TUNNEL,
    },
  });