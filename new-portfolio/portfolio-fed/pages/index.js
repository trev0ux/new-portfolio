import Home from "./home";
import { fetchAPI } from '../lib/api';

export default function Index({ projects, homepage, footer, header }) {
  return (
    <Home projects={projects} homepage={homepage} footer={footer} header={header} />
  )
}

export async function getStaticProps() {
  const [headerRes, projectsRes, homepageRes, footerRes] = await Promise.all([
    fetchAPI("/header"),
    fetchAPI("/projects", { populate: ["image"] }),
    fetchAPI("/homepage"),
    fetchAPI("/footer"),
  ])
  //const homepage = await fetchAPI("/homepage")
  return {
    props: {
      header: headerRes.data.attributes,
      projects: projectsRes.data,
      homepage: homepageRes.data.attributes,
      footer: footerRes.data.attributes
    },
    revalidate: 1,
  };
}
