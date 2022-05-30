import "../styles/globals.css";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalstyles } from "../src/components/commons/globalstyles/globalstyles";
import Layout from "../src/components/commons/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps } : any) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalstyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
