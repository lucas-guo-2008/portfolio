import Link from 'next/link';
import ProjectTile from '@/components/ProjectTile';
import { projects, type Project } from '@/lib/projects';
import { bio, tagline } from '@/lib/about';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';
const label = 'font-mono text-label uppercase tracking-label';
const built: Project['status'][] = ['live', 'complete'];   // finished, deployed or not

export default function Home() {
  const featured = projects.filter(project => project.featured);
  const groups = [
    { label: 'Built', projects: featured.filter(project => built.includes(project.status)) },
    { label: 'Now and next', projects: featured.filter(project => !built.includes(project.status)) },
  ].filter(group => group.projects.length > 0);

  return (
    <div className="flex flex-col gap-10 md:gap-14 md:pt-1">
      <section className="bg-surface border border-border rounded-lg px-5 py-6 md:px-12 md:pt-12 md:pb-11 flex flex-col gap-3.5 md:gap-4.5">
        <p className={`${label} text-text-muted`}>Lucas Guo</p>
        <h1 className="text-title md:text-display font-display font-bold">{tagline}</h1>
        <p className="max-w-reading text-body text-text-secondary">{bio[0]}</p>
        <Link
          href="/about"
          className={`self-start pt-2.5 pb-0.5 md:pt-0 md:pb-0 md:mt-1 font-mono text-caption text-accent border-b border-accent-border hover:text-accent-strong hover:border-accent-strong ${focusRing}`}
        >
          More about me →
        </Link>
      </section>

      <section className="flex flex-col gap-3 md:gap-3.5">
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-2.5 md:gap-3">
            <h2 className="text-heading font-display font-bold">Projects</h2>
            <p className={`${label} text-text-muted`}>
              {featured.length}
              <span className="hidden md:inline"> {featured.length === 1 ? 'project' : 'projects'}</span>
            </p>
          </div>
          <Link href="/projects" className={`py-3 md:py-0 ${label} text-accent hover:text-accent-strong ${focusRing}`}>
            All projects →
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {groups.map(group => (
            <div key={group.label} className="flex flex-col gap-2">
              <h3 className={`${label} text-text-muted`}>{group.label}</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {group.projects.map(project => <ProjectTile key={project.slug} project={project} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
