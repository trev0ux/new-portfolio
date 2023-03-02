import styles from "./about-me.module.scss";
import Layout from "../../components/layout";
import NextImage from "../../components/image";
import { motion } from "framer-motion";
import { fetchAPI } from '../../lib/api';
import ReactMarkdown from 'react-markdown';

const ease = [0.08, 0.37, 0.45, 0.89];

export default function props({ header, props, footer }) {
    return (
        <Layout header={header} footer={footer}>
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
                            {props.title}
                        </motion.h2>
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, transition: { duration: 1, ease }, opacity: 1 }}
                            className={styles.about__image}
                        >
                            <div>
                                <NextImage
                                    image={props.image}
                                    height={380}
                                    width={645}
                                    objectFit="cover"
                                    alt="Lucas Amorim imagem"
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
                        <h3>{props.subtitle}</h3>
                        <p>
                            {props.description}
                        </p>
                    </article>
                    <article className={styles.about__experience}>
                        <h3>{props.subtitleExperience}</h3>
                        <div className={styles.about__experienceList}>
                            <ReactMarkdown>
                                {props.experience}
                            </ReactMarkdown>
                        </div>
                    </article>
                </motion.div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const [headerRes, propsRes, footerRes] = await Promise.all([
        fetchAPI("/header"),
        fetchAPI("/about-me", { populate: ["image"] }),
        fetchAPI("/footer")
    ])
    return {
        props: { 
            header: headerRes.data.attributes, 
            props: propsRes.data.attributes, 
            footer: footerRes.data.attributes 
        },
        revalidate: 1,
    };
}
