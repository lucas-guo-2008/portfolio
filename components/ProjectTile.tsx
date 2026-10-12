import Link from "next/link";
import type { Project } from "@/lib/projects";
import Card from "./Card";
import StatusBadge from "./StatusBadge";

type ProjectTileProps = {
    project: Project;
    titleAs?: 'h2' | 'h3';   // h3 under the home groups, h2 on /projects
    clamp?: boolean;
}

export default function ProjectTile({project, titleAs: Title = 'h3', clamp = true}:ProjectTileProps) {
    const { slug, title, status, summary } = project;
    return (
        <Card roomy interactive dashed={status === 'planned'}>
            <div className="h-full flex flex-col gap-3 md:gap-3.5">
                <div className="flex items-center justify-between gap-3">
                    <Title className="text-heading font-display font-bold">
                        <Link
                            href={`/projects/${slug}`}
                            className="after:absolute after:inset-0 transition-colors group-hover:text-accent-strong focus-visible:outline-none"
                        >
                            {title}
                        </Link>
                    </Title>
                    <StatusBadge status={status} />
                </div>

                <p className={`text-body-sm text-text-secondary ${clamp ? 'line-clamp-3 md:line-clamp-4' : ''}`}>{summary}</p>
            </div>
        </Card>
    );
}
