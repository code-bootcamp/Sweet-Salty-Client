import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/layout/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        {/* 글로벌 스타일을 적용하기 위한 것 */}
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}
export default MyApp;
