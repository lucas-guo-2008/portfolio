import type { ReactNode } from 'react';
import ProjectTile from '@/components/ProjectTile';
import Sign from '@/components/Sign';
import type { Project } from '@/lib/projects';

type ProjectGroupsProps = {
  projects: Project[];
  clamp?: boolean;
  children?: ReactNode;
};

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

export default function ProjectGroups({ projects, clamp = true, children }: ProjectGroupsProps) {
  const groups = [
    { label: 'Built', icon: flagIcon, projects: projects.filter(project => built.includes(project.status)) },
    { label: 'Now and next', icon: arrowIcon, projects: projects.filter(project => !built.includes(project.status)) },
  ].filter(group => group.projects.length > 0);

  return (
    <section className="relative flex flex-col gap-12 pb-6 pl-11 before:absolute before:left-2.5 before:top-2 before:bottom-0 before:border-l-2 before:border-dashed before:border-text-faint">
      {groups.map(group => (
        <div key={group.label} className="flex flex-col gap-4">
          <div className="relative flex items-baseline gap-3">
            <Sign icon aria-hidden className="absolute -left-11 top-0.5">{group.icon}</Sign>
            <h2 className="text-heading md:text-title font-display font-bold">{group.label}</h2>
          </div>
          <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
            {group.projects.map(project => <ProjectTile key={project.slug} project={project} titleAs="h3" clamp={clamp} />)}
          </div>
        </div>
      ))}
      {children}
    </section>
  );
}
