import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { getProject } from '@/lib/projects';

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
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
    />
  );
}
