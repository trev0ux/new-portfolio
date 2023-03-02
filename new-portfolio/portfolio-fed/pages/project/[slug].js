import Layout from '../../components/layout';
import NextImage from "../../components/image";
import { fetchAPI } from '../../lib/api';
import ReactMarkdown from 'react-markdown';
import styles from "./project.module.scss";
import { motion } from "framer-motion";

const ease = [0.08, 0.37, 0.45, 0.89];

export default function projectItem({ project, footer }) {
  console.log(project);
  return (
    <Layout className="white-bg" whiteFooter="footer--white" whiteHeader={true} footer={footer}>
      <div className='container'>
        <div className={styles.project}>
          <header className={styles.project__header}> 
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
              <aside>
                <h2>{project.attributes.Headline}</h2>
                <div>
                  <ReactMarkdown>
                    {project.attributes.Roles}
                  </ReactMarkdown>
                </div>
              </aside>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, transition: { duration: 1, ease }, opacity: 1 }}
              className={styles.project__image}
            >
              <NextImage
                image={project.attributes.Banner}
                height={450}
                width={920}
                objectFit="cover"
                alt={project.attributes.Headline}
              />
            </motion.div>
          </header>
          <section>
            <article className={styles.project__content}>
              <ReactMarkdown>
                {project.attributes.content}
              </ReactMarkdown>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const projectItem = await fetchAPI("/projects", { fields: ["slug"] });
  return {
    paths: projectItem.data.map((item) => ({
      params: {
        slug: item.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [projectRes, footerRes] = await Promise.all([
    fetchAPI("/projects", { populate: ["image", "Banner"], filters: {slug: params.slug}}),
    fetchAPI("/footer"),
  ])
  return {
    props: { project: projectRes.data[0], footer: footerRes.data.attributes },
    revalidate: 1,
  };
}
