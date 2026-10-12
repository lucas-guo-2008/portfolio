import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export const metadata = {
  title: "Projects"
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-5 md:gap-7 pt-2 md:pt-3 finish-line">
      <div className="flex items-baseline gap-3 md:gap-4">
        <h1 className="text-title md:text-display font-display font-bold">Projects</h1>
        <p className="font-mono text-label uppercase tracking-label text-text-muted">
          {projects.length} {projects.length === 1 ? 'project' : 'projects'}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-3 items-start">
        {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}
