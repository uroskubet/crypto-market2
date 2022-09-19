import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

import { CoinMarketProvider } from "../contex/context";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://gqasdf4tkkiu.usemoralis.com:2053/server"
      appId="TL0YJzCoVXgYv0fMKfzmgD52UaoaMllZI1DxTJWJ"
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  );
}

export default MyApp;
