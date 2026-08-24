import { projectsData } from '../../data/projects';
import ClientPage from './ClientPage';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  return <ClientPage params={params} />;
}
