import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://fwtevcs7vumh.usemoralis.com:2053/server"
      appId="9OF6oYr4VwjXdTbyspCMtmleW0u3xud5pSRoNdQA"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
