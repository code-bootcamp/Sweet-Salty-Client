import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalstyles } from "../src/components/commons/globalstyles/globalstyles";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalstyles} />
        <Component {...pageProps} />
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
