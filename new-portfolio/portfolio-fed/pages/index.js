import { fetchAPI } from '../lib/api';
import styles from "./index.module.scss";
import { motion } from "framer-motion"
import Mouse from '../assets/mouse.svg';
import ProjectListing from '../components/project-listing';
import Link from 'next/link';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};
export default function Index({ projects, homepage }) {
  return (
    <div>
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
            <Link href="/#work" scroll={false}>
              <Mouse />
            </Link>
          </div>
        </section>
      </motion.section>
      <ProjectListing projectListing={projects} />
    </div>
  )
}

export async function getStaticProps() {
  const [projectsRes, homepageRes] = await Promise.all([
    fetchAPI("/projects", { populate: ["image"] }),
    fetchAPI("/homepage"),
  ])
  return {
    props: {
      projects: projectsRes.data,
      homepage: homepageRes.data.attributes,
    },
    revalidate: 1,
  };
}
