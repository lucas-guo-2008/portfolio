import ProjectTile from '@/components/ProjectTile';
import { projects } from '@/lib/projects';

export const metadata = {
  title: "Projects"
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-5 md:gap-7 pt-2 md:pt-3">
      <h1 className="text-display md:text-hero font-display font-bold">Projects</h1>
      <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => <ProjectTile key={project.slug} project={project} titleAs="h2" clamp={false} />)}
      </div>
    </div>
  );
}
