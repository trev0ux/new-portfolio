import NextImage from "../../components/shared/image";
import { fetchAPI } from '../../lib/api';
import ReactMarkdown from 'react-markdown';
import styles from "./project.module.scss";
import { motion } from "framer-motion";

const ease = [0.08, 0.37, 0.45, 0.89];

export default function Project({ props }) {
  return (
    <div className='container'>
      <div className={styles.project}>
        <header className={styles.project__header}>
          <motion.div
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
              <h2>{props?.attributes.Headline}</h2>
              <div>
                <ReactMarkdown>
                  {props?.attributes.Roles}
                </ReactMarkdown>
              </div>
            </aside>
          </motion.div>
          <motion.div initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, transition: { duration: 1, ease }, opacity: 1 }}
            className={styles.project__image}
          >
            {props?.attributes.Banner && (
              <NextImage
                image={props?.attributes.Banner}
                height={450}
                width={450}
                priority
                objectFit="cover"
                alt={props?.attributes.Headline}
              />
            )}
          </motion.div>
        </header>
        <section>
          <article className={styles.project__content}>
            <ReactMarkdown>
              {props?.attributes.content}
            </ReactMarkdown>
          </article>
        </section>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const projectItem = await fetchAPI("/projects", { fields: ["slug"] });
  return {
    paths: projectItem.data.map((item) => ({
      params: {
        slug: item.attributes.slug.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectRes = await fetchAPI("/projects", { populate: ["image", "Banner"], filters: { slug: params.slug } });
  return {
    props: {
      props: projectRes.data[0],
    },
    revalidate: 1,
  };
}
