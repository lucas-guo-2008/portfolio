import Link from 'next/link';
import ContactLinks from '@/components/ContactLinks';
import CourseMap from '@/components/CourseMap';
import ProjectGroups from '@/components/ProjectGroups';
import { projects } from '@/lib/projects';
import { bio, location, name, tagline } from '@/lib/about';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';
const linkLook = `font-mono text-caption text-accent border-b border-accent-border hover:text-accent-strong hover:border-accent-strong ${focusRing}`;
const textLink = `self-start pt-2.5 pb-0.5 md:pt-0 md:pb-0 md:mt-1 ${linkLook}`;

export default function Home() {
  const featured = projects.filter(project => project.featured);
  const hasMore = projects.some(project => !project.featured);

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

      <ProjectGroups projects={featured}>
        {hasMore && <Link href="/projects" className={textLink}>All projects →</Link>}
      </ProjectGroups>
    </div>
  );
}
