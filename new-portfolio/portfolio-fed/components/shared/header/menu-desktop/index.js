import Link from 'next/link';
import Image from 'next/image';
import styles from "./menu-desktop.module.scss";
import { MenuToggle } from '../menu-mobile/menu-toggle';


export default function Navbar({ toggle, lightHeader, resumeLink, isDarkTheme, darkTheme }) {
    return (
        <nav className={`${styles.navbar} ${lightHeader ? styles["navbar--light"] : ""}`} >
            <Link href="/">
                <div className={styles.navbar__logo}>
                    <h1>
                        Lucas Amorim
                    </h1>
                </div>
            </Link>
            <div>
                <div className={styles.navbar__items}>
                    <ul>
                        <li className="nav-item">
                            <Link href="/about-me">
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#work" scroll={false}>
                                Work
                            </Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href={`${resumeLink}`} passHref={true}>Resume</Link></li>
                        <li className="nav-item">
                            <Link href="/#footer" scroll={false}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <button className={styles.navbar__theme} onClick={isDarkTheme}>
                                <Image src={darkTheme ? "/sun.png" : "/moon.png"} width={30} height={30} alt={darkTheme ? "light-mode" : "/moon.png"} />
                            </button>
                        </li>
                    </ul>
                </div>
                <MenuToggle toggle={toggle} />
            </div>
        </nav>
    )
};
