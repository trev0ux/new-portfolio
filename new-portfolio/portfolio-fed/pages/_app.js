import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import "../styles/globals.scss";
import localFont from 'next/font/local';
import { Sora } from 'next/font/google';
// Store Strapi Global object in context
export const GlobalContext = createContext({});

const bogart = localFont({
  src: [
    {
      path: '../assets/Bogart/BOGARTBOLDTRIAL.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/Bogart/BOGARTLIGHTTRIAL.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/Bogart/BOGARTMEDIUMTRIAL.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/Bogart/BOGARTREGULARTRIAL.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  console.log(global.attributes);

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
      <main className={`${sora.className} ${bogart.className}`}>
        <GlobalContext.Provider value={global.attributes}>
          <Component {...pageProps} />
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
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;