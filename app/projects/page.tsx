import ProjectGroups from '@/components/ProjectGroups';
import { projects } from '@/lib/projects';

export const metadata = {
  title: "Projects"
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-5 md:gap-7 pt-2 md:pt-3">
      <h1 className="text-display md:text-hero font-display font-bold">Projects</h1>
      <ProjectGroups projects={projects} clamp={false} />
    </div>
  );
}
