import styles from './footer.module.scss';
import InstagramIcon from "../../../assets/instagram.svg";
import LinkedinIcon from "../../../assets/linkedin.svg";
import DribbbleIcon from "../../../assets/dribbble.svg";
import GithubIcon from "../../../assets/github.svg";
import Arrow from "../../../assets/arrow-up-right.svg";
import { motion } from "framer-motion"

export default function Footer({footer}) {
    return (
        <footer className={styles.footer} id="footer">
            <h3>{footer.question}</h3>
            <h4>{footer.workTogether}</h4>
            <a href={footer.emailLink}>{footer.emailText}</a>
            <div className={styles.footer__icons}>
                <ul>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href={footer.instagramUrl}>
                            <div>
                                <InstagramIcon />
                                <h6>
                                    {footer.instagramTitle}
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href={footer.linkedinUrl}>
                            <div>
                                <LinkedinIcon />
                                <h6>
                                    {footer.linkedinTitle}
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href={footer.dribbbleUrl}>
                            <div>
                                <DribbbleIcon />
                                <h6>
                                    {footer.dribbbleTitle}
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href={footer.githubUrl}>
                            <div>
                                <GithubIcon />
                                <h6>
                                    {footer.githubTitle}
                                </h6>
                            </div>
                            <Arrow />
                        </a>
                    </motion.li>
                </ul>
            </div>
            <div>
                <h6>{footer.copyright}</h6>
                <h6>{footer.developedBy}</h6>
            </div>
        </footer>
    )
}