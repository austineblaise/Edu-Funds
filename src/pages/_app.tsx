import { App } from "konsta/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { celo, celoAlfajores } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ConnectWalletButtonProvider } from "@/context/ConnectContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    celo,
    celoAlfajores,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [celoAlfajores]
      : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Edu Funds",
  projectId: "684b1d74-8de4-8005-a6b3-391b1456e02c",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
export default function MyApp({ Component, pageProps }: AppProps) {
  const [deviceType, setDeviceType] = useState<any>(null);
  const maintenance = false;

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isAndroid = userAgent.match(/Android/i);
    const isIOS = userAgent.match(/iPhone|iPad|iPod/i);
    const isLaptop = !isAndroid && !isIOS;

    if (isAndroid) {
      setDeviceType("android");
    } else if (isIOS) {
      setDeviceType("ios");
    } else {
      setDeviceType("laptop");
    }
  }, []);
  const theme = deviceType === "ios" ? "ios" : "material";

  if (maintenance) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Edu funds is currently under maintenance
        </h1>
      </div>
    );
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ConnectWalletButtonProvider>
          <App dark={true} safeAreas={true} theme={theme}>
            <Component {...pageProps} />

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              className="z-[9999]"
            />
          </App>
        </ConnectWalletButtonProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
