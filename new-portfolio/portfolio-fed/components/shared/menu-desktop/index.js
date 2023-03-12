import Link from 'next/link'
import styles from "./menu-desktop.module.scss";
import { MenuToggle } from '../menu-mobile/menu-toggle';


export default function Navbar({ toggle, lightHeader, resumeLink }) {
    return (
        <nav className={`${styles.navbar} ${lightHeader ? styles["navbar--light"] : ""}`} >
            <Link href="/">
                <div className={styles.navbar__logo}>
                    <h1>
                        Lucas Amorim
                    </h1>
                </div>
            </Link>
            <button className={styles.navbar__toggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
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
                </ul>
            </div>
            <MenuToggle toggle={toggle} />
        </nav>
    )
};
