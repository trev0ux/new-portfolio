/* eslint-disable react/jsx-key */
import Layout from '../components/layout';
import { fetchAPI } from '../lib/api';

import ProjectListing from '../components/project-listing';
import HeroSection from '../components/hero-section';

export default function Home({ projects, homepage }) {
  console.log(projects)
  return (
    <Layout>
      <HeroSection hero={homepage}/>
      <ProjectListing projectListing={projects} />
    </Layout>
  )
}


export async function getStaticProps() {
  const [projectsRes, homepageRes] = await Promise.all([
    fetchAPI("/projects", { populate: ["image"]}),
    fetchAPI("/homepage")
  ])
  //const homepage = await fetchAPI("/homepage")
  return {
    props: { projects: projectsRes.data, homepage: homepageRes.data.attributes },
    revalidate: 1,
  };
}
