import styles from "./about-me.module.scss";
import Layout from "../../components/layout";
import NextImage from "../../components/image";
import { motion } from "framer-motion";
import { fetchAPI } from '../../lib/api';

const ease = [0.08, 0.37, 0.45, 0.89];

export default function AboutMe({ aboutMe }) {
    return (
        <Layout>
            <div className={styles.about}>
                <motion.div
                    className="container"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.5, duration: 1, ease }
                        }
                    }
                    }
                >
                    <div className={styles.about__hero}>
                        <motion.h2
                            initial={{ x: -100 }}
                            animate={{ x: 0, transition: { delay: 0.5, duration: 1, ease } }}
                        >
                            {aboutMe.Title}
                        </motion.h2>
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, transition: { duration: 1, ease }, opacity: 1 }}
                            className={styles.about__image}
                        >
                            <div>
                                <NextImage
                                    image={aboutMe.image}
                                    height={380}
                                    width={645}
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className="container"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.5, duration: 1, ease }
                        }
                    }
                    }
                >
                    <article className={styles.about__description}>
                        <h3>{aboutMe.Subtitle}</h3>
                        <p>
                            {aboutMe.Description}
                        </p>
                    </article>
                    <article className={styles.about__experience}>
                        <h3>{aboutMe.SubtitleExperience}</h3>
                        <ul>
                            <li>
                                <h4>{aboutMe.Role1}</h4>
                                <h5>{aboutMe.Company1}</h5>
                                <p>{aboutMe.YearWorking1}</p>
                            </li>
                            <li>
                                <h4>{aboutMe.Role2}</h4>
                                <h5>{aboutMe.Company2}</h5>
                                <p>{aboutMe.YearWorking2}</p>
                            </li>
                        </ul>
                    </article>
                </motion.div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const aboutMeRes = await fetchAPI("/about-me", { populate: ["image"] })
    return {
        props: { aboutMe: aboutMeRes.data.attributes },
        revalidate: 1,
    };
}
