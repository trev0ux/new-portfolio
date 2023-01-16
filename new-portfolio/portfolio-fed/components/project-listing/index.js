import Project from '../project-item/index';
import styles from './project-listing.module.scss';


export default function ProjectListing({ projectListing }) {
    return (
        <>
            <div className={styles.projectListing}>
                <h2>
                    💻 Featured work
                </h2>
                <section>
                    {projectListing.map((project, id) => (
                            <Project key={id} slug={project.attributes.slug} image={project.attributes.image} headline={project.attributes.Headline} content={project.attributes.content} />
                    ))}
                </section>
            </div>
        </>
    )
}

