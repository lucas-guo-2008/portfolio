import Link from 'next/link';
import ContactLinks from '@/components/ContactLinks';
import CourseMap from '@/components/CourseMap';
import ProjectTile from '@/components/ProjectTile';
import Sign from '@/components/Sign';
import { projects } from '@/lib/projects';
import { intro, name } from '@/lib/about';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';
const linkLook = `font-mono text-caption text-accent border-b border-accent-border hover:text-accent-strong hover:border-accent-strong ${focusRing}`;
export default function Home() {
  const featured = projects.filter(project => project.featured);
  const hasMore = projects.some(project => !project.featured);

  return (
    <div className="flex flex-col">
      <section className="relative py-12 md:py-24">
        <CourseMap className="hidden xl:block absolute right-0 top-0 h-full w-1/2 pointer-events-none" />
        <div className="relative flex flex-col gap-4.5 max-w-reading xl:max-w-xl">
          <h1 className="text-display md:text-hero font-display font-bold">{name}</h1>
          <p className="text-heading font-display font-medium text-text-secondary">{intro}</p>
          <div className="flex flex-wrap items-center gap-x-4.5 gap-y-2">
            <Link href="/about" className={linkLook}>More about me →</Link>
            <span aria-hidden="true" className="hidden md:inline text-text-faint">|</span>
            <ContactLinks />
          </div>
        </div>
        <div aria-hidden="true" className="hidden md:block xl:hidden mt-10 h-48 max-w-2xl">
          <CourseMap variant="band" className="block w-full h-full" />
        </div>
      </section>

      <section className="relative flex flex-col gap-4 pb-6 pl-11 before:absolute before:left-2.5 before:top-2 before:bottom-0 before:border-l-2 before:border-dashed before:border-text-faint">
        <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <Sign icon aria-hidden className="absolute -left-11 top-0.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
            </svg>
          </Sign>
          <h2 className="text-heading md:text-title font-display font-bold">Featured projects</h2>
          {hasMore && <Link href="/projects" className={linkLook}>All {projects.length} projects →</Link>}
        </div>
        <div className="flex flex-col gap-3.5">
          {featured.map(project => <ProjectTile key={project.slug} project={project} titleAs="h3" wide />)}
        </div>
      </section>
    </div>
  );
}
