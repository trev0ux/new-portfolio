import Project from '../project-item/index';
import styles from './project-listing.module.scss';
import { motion } from "framer-motion"

export default function ProjectListing({ projectListing }) {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <>
            <section className={styles.projectListing}>
                <h2>
                    💻 Featured work
                </h2>
                <motion.ul 
                    variants={container}
                    initial="hidden"
                    animate="visible">
                    {projectListing.map((project, id) => (
                        <motion.li
                            key={id}
                            variants={item}
                        >
                            <Project
                                slug={project?.attributes.slug}
                                externalLink={project.attributes.externalLink}
                                image={project.attributes.image}
                                headline={project.attributes.Headline}
                                content={project.attributes.content}
                                tags={project.attributes.tags}
                                company={project.attributes.company}
                                shortDescription={project.attributes.shortDescription}
                            />
                        </motion.li>
                    ))}
                </motion.ul>
            </section>
        </>
    )
}

