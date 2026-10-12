import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ProjectFacts from '@/components/ProjectFacts';
import LogList from '@/components/LogList';
import ComingSoon from '@/components/ComingSoon';
import StatusBadge from '@/components/StatusBadge';
import { getProject, projects } from '@/lib/projects';
import { getLogs } from '@/lib/logs';

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const logs = getLogs(project.slug);

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <PageHeader
        path={
          <>
            <Link
              href="/projects"
              className="text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              projects
            </Link>
            {' / '}{project.slug}
          </>
        }
        badge={<StatusBadge status={project.status} />}
        title={project.title}
        summary={project.summary}
        aside={(project.repo || project.stack.length > 0) &&
          <ProjectFacts repo={project.repo} stack={project.stack} />}
      />
      {project.status === 'planned' ? <ComingSoon content="Stay tuned for updates!" /> : <LogList logs={logs} />}
    </div>
  );
}
