import Link from 'next/link';
import ContactLinks from '@/components/ContactLinks';
import CourseMap from '@/components/CourseMap';
import ProjectTile from '@/components/ProjectTile';
import Sign from '@/components/Sign';
import { projects, type Project } from '@/lib/projects';
import { bio, location, name, tagline } from '@/lib/about';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';
const linkLook = `font-mono text-caption text-accent border-b border-accent-border hover:text-accent-strong hover:border-accent-strong ${focusRing}`;
const textLink = `self-start pt-2.5 pb-0.5 md:pt-0 md:pb-0 md:mt-1 ${linkLook}`;
const built: Project['status'][] = ['live', 'complete'];

const flagIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M0 0h3v3H0zM6 0h3v3H6zM3 3h3v3H3zM9 3h3v3H9zM0 6h3v3H0zM6 6h3v3H6zM3 9h3v3H3zM9 9h3v3H9z" />
  </svg>
);
const arrowIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Home() {
  const featured = projects.filter(project => project.featured);
  const groups = [
    { label: 'Built', icon: flagIcon, projects: featured.filter(project => built.includes(project.status)) },
    { label: 'Now and next', icon: arrowIcon, projects: featured.filter(project => !built.includes(project.status)) },
  ].filter(group => group.projects.length > 0);

  return (
    <div className="flex flex-col">
      <section className="relative py-12 md:py-24">
        <CourseMap className="hidden xl:block absolute right-0 top-0 h-full w-1/2 pointer-events-none" />
        <div className="relative flex flex-col gap-4.5 max-w-reading xl:max-w-xl">
          <p className="font-mono text-caption tracking-wide text-text-muted"><span className="font-medium text-text">{name}</span> · {location}</p>
          <h1 className="text-display md:text-hero font-display font-bold">{tagline}</h1>
          <p className="text-body text-text-secondary">{bio[0]}</p>
          <div className="flex flex-wrap items-center gap-x-4.5 gap-y-2">
            <Link href="/about" className={linkLook}>More about me →</Link>
            <span aria-hidden="true" className="hidden md:inline text-text-faint">|</span>
            <ContactLinks />
          </div>
        </div>
        <div aria-hidden="true" className="xl:hidden mt-10 h-32 md:h-48 max-w-2xl">
          <CourseMap variant="band" className="block w-full h-full" />
        </div>
      </section>

      <section className="relative flex flex-col gap-12 pb-6 pl-11 before:absolute before:left-2.5 before:top-2 before:bottom-0 before:border-l-2 before:border-dashed before:border-text-faint">
        {groups.map(group => (
          <div key={group.label} className="flex flex-col gap-4">
            <div className="relative flex items-baseline gap-3">
              <Sign icon aria-hidden className="absolute -left-11 top-0.5">{group.icon}</Sign>
              <h2 className="text-heading md:text-title font-display font-bold">{group.label}</h2>
            </div>
            <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
              {group.projects.map(project => <ProjectTile key={project.slug} project={project} titleAs="h3" />)}
            </div>
          </div>
        ))}
        <Link href="/projects" className={textLink}>All projects →</Link>
      </section>
    </div>
  );
}
