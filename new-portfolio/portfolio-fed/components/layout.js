import Footer from './shared/footer/index';
import Header from './shared/header/index';

export default function Layout({ children, header, lightHeader, whiteFooter, footer, className }) {
    return (
        <>
            <Header lightHeader={lightHeader} props={header}/>
            <div className={className} id="container">
                {children}
            </div>
            <Footer footer={footer} className={whiteFooter} />
        </>
    )
}

