import styles from "./hero-section.module.scss";
import { motion } from "framer-motion"
import Mouse from '../../assets/mouse.svg';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export default function HeroSection({hero}) {
    return (
        <>
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
                            {hero.Title}
                        </motion.h1>
                        <motion.p variants={itemVariants}>
                            {hero.Description}
                        </motion.p>
                        <Mouse />
                    </div>
                </section>
            </motion.section>
        </>
    )
}
