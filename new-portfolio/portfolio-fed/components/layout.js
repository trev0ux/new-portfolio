import Footer from './shared/footer/index';
import Header from './shared/header/index';

export default function Layout({ children, header, whiteHeader, whiteFooter, footer, className }) {
    return (
        <>
            <Header whiteHeader={whiteHeader} props={header}/>
            <main className={className}>
                {children}
            </main>
            <Footer footer={footer} className={whiteFooter} />
        </>
    )
}

