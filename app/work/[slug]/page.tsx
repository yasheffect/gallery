import { projectsData } from '../../data/projects';
import ClientPage from './ClientPage';

export function generateStaticParams() {
  return projectsData
    .filter(project => project.slug !== 'nike-run-for-life')
    .map((project) => ({
      slug: project.slug,
    }));
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  return <ClientPage params={params} />;
}
