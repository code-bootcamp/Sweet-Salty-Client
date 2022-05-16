import '../styles/globals.css'
import { Global } from '@emotion/react'
import { globalstyles } from "../src/components/commons/globalstyles/globalstyles";
import Layout from "../src/components/commons/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {
  return  (
    <>
      <Global styles={globalstyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
