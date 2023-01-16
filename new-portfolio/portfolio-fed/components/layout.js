import Footer from './shared/footer/index';
import Header from './shared/header/index';
import * as React from "react";

export default function Layout({ children, className, whiteHeader, whiteFooter, footer }) {
    console.log(footer)
    return (
        <>
            <Header whiteHeader={whiteHeader}/>
            <main className={className}>
                {children}
            </main>
            <Footer className={whiteFooter} />
        </>
    )
}

export async function getStaticProps() {
    const footerRes = await fetchAPI("api/footer");
    return {
        props: { footer: footerRes.data },
        revalidate: 1,
    };
}