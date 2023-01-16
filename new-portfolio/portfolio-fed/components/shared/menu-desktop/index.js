import Link from 'next/link'
import styles from "./menu-desktop.module.scss";
import Logo from "../../../assets/logo.svg"
import { MenuToggle } from '../menu-mobile/menu-toggle';


export default function Navbar({ toggle, whiteHeader }) {
    return (
        <nav className={`${styles.navbar} ${whiteHeader ? styles["navbar--white"] : ""}`} >
            <Link href="/">
                <div className={styles.navbar__logo}>
                    <Logo />
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
                            <a>About me</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about-me">
                            <a>Work</a>
                        </Link>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#">Resume</a></li>
                </ul>
            </div>
            <MenuToggle toggle={toggle} />
        </nav>
    )
};
