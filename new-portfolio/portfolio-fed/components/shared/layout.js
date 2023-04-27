import Footer from './footer/index';
import Header from './header/index';
import { useEffect } from "react";
import Canvas from './canvas';

export default function Layout({ children, header, footer, className, isDarkTheme, darkTheme }) {
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--background-color",
      darkTheme ? "#13273a" : "rgb(252 250 193)"
    );
    root?.style.setProperty("--main-text-color", darkTheme ? "#fefdf9" : "rgb(46 64 91)");
    root?.style.setProperty("--link-text-color", darkTheme ? "#fefdf9" : "rgb(46 64 91)");
    root?.style.setProperty("--sub-text-color", darkTheme ? "#A9ACBB" : "rgb(46 64 91)");
    root?.style.setProperty("--tags-color", darkTheme ? "rgb(159,76,37)" : "#fdfcf6");
    root?.style.setProperty("--company-name", darkTheme ? "#A9ACBB" : "rgb(46 64 91)");
    root?.style.setProperty("--footer-bg", darkTheme ? "rgb(159,76,37)" : "#fdfcf6");
    root?.style.setProperty("--footer-text", darkTheme ? "#ffff" : "#262833");
    root?.style.setProperty("--footer-text-hover", darkTheme ? "#262833" : "#fdfcf6");
  }, [darkTheme]);

  return (
    <>
      <Canvas />
        <Header props={header} isDarkTheme={isDarkTheme} darkTheme={darkTheme} />
        <div className={className} id="container">
          {children}
        </div>
        <Footer footer={footer} />
    </>
  )
}

