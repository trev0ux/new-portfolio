import styles from './footer.module.scss';
import InstagramIcon from "../../../assets/instagram.svg";
import LinkedinIcon from "../../../assets/linkedin.svg";
import DribbbleIcon from "../../../assets/dribbble.svg";
import GithubIcon from "../../../assets/github.svg";
import Arrow from "../../../assets/arrow-up-right.svg";
import { motion } from "framer-motion"
import { fetchAPI } from '../../../lib/api';

export default function Footer({footer}) {
    console.log(footer)
    return (
        <footer className={styles.footer}>
            <h3>Need a designer or developer?</h3>
            <h4>Lets work together</h4>
            <a href="#">lucas.lopes5@hotmail.com</a>
            <div className={styles.footer__icons}>
                <ul>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href='#'>
                            <div>
                                <InstagramIcon />
                                <h6>
                                    Instagram
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href='#'>
                            <div>
                                <LinkedinIcon />
                                <h6>
                                    Linkedin
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href='#'>
                            <div>
                                <DribbbleIcon />
                                <h6>
                                    Dribbble
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href='#'>
                            <div>
                                <GithubIcon />
                                <h6>
                                    Github
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                </ul>
            </div>
            <div>
                <h6>© Copyright 2022</h6>
                <h6>Developed by Lucas Amorim</h6>
            </div>
        </footer>
    )
}

export async function getStaticProps() {
    const footerRes = await fetchAPI("/footer");
    return {
        props: { footer: footerRes.data },
        revalidate: 1,
    };
}
