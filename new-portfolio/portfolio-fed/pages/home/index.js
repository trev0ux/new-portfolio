/* eslint-disable react/jsx-key */
import styles from "./home.module.scss";
import Layout from '../../components/layout';
import { motion } from "framer-motion"
import Mouse from '../../assets/mouse.svg';
import ProjectListing from '../../components/project-listing';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export default function Home({ projects, homepage, footer, header }) {
    return (
        <Layout header={header} footer={footer}>
            <motion.section
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
                <section className={styles.hero}>
                    <div className='container'>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible
                            }}
                            style={
                                {
                                    "--base-width": "35vw",
                                    top: "-18vw",
                                }
                            }
                        >
                            {homepage.Title}
                        </motion.h1>
                        <motion.p variants={itemVariants}>
                            {homepage.Description}
                        </motion.p>
                        <Mouse />
                    </div>
                </section>
            </motion.section>
            <ProjectListing projectListing={projects} />
        </Layout>
    )
}

