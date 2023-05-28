import App from "next/app";
import Head from "next/head";
import { createContext, useState } from "react";
import { fetchAPI } from "../lib/api";
import "../styles/globals.scss";
import localFont from 'next/font/local';
import Layout from "../components/shared/layout";


// Store Strapi Global object in context
export const GlobalContext = createContext({});

const sora = localFont({
  src: [
    {
      path: '../public/fonts/Sora/Sora-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Sora/Sora-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Sora/Sora-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Sora/Sora-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Sora/Sora-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

const MyApp = ({ Component, pageProps, header, footer }) => {
  const { global } = pageProps;
  const [darkTheme, setDarkTheme] = useState(true);
  const isDarkTheme = () => setDarkTheme(!darkTheme);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
        <title>{global.attributes.SiteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="I create meaningful experiences to the web." />
        <meta name="keywords" content="front-end developer, ui designer" />
        <meta name="msapplication-TileColor" content="#1D1E21" />
        <meta name="theme-color" content="#1D1E21" />
        <link rel="canonical" href={global.url} />
        <meta property="og:type" content="website" />
      </Head>
      <main className={sora.className}>
        <GlobalContext.Provider value={global.attributes}>
            <Layout header={header} footer={footer} darkTheme={darkTheme} isDarkTheme={isDarkTheme}>
              <Component {...pageProps} />
            </Layout>
        </GlobalContext.Provider>
      </main>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const [headerRes, globalRes, footerRes] = await Promise.all([
    fetchAPI("/header"),
    fetchAPI("/global", {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    }),
    fetchAPI("/footer")
  ]);
  // Pass the data to our page via props
  return { 
    ...appProps, 
    pageProps: { global: globalRes.data },
    header: headerRes.data.attributes,
    footer: footerRes.data.attributes
   };
};

export default MyApp;