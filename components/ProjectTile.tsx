import Link from "next/link";
import type { Project } from "@/lib/projects";
import { getLogs, type Log } from "@/lib/logs";
import Card from "./Card";
import StatusBadge from "./StatusBadge";

type ProjectTileProps = {
    project: Project;
}

function meta(project: Project, logs: Log[]): string {
    if (project.status === 'planned') {
        return 'Coming soon';
    }
    if (logs.length === 0) {
        return 'No logs yet';
    }
    const lastDate = logs[logs.length - 1].date.split(' ')[0];
    return `${logs.length} ${logs.length === 1 ? 'log' : 'logs'} · last ${lastDate}`;
}

export default function ProjectTile({project}:ProjectTileProps) {
    const { slug, title, status, summary } = project;
    return (
        <Card roomy interactive>
            <div className="h-full flex flex-col gap-3 md:gap-3.5">
                <div className="flex items-center justify-between gap-3">
                    <h4 className="text-heading font-display font-bold">
                        <Link
                            href={`/projects/${slug}`}
                            className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                        >
                            {title}
                        </Link>
                    </h4>
                    <StatusBadge status={status} />
                </div>

                <div className="flex-1">
                    <p className="line-clamp-3 md:line-clamp-4 text-body-sm text-text-secondary">{summary}</p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border-subtle">
                    <p className="font-mono text-caption text-text-muted">{meta(project, getLogs(slug))}</p>
                    <span className="shrink-0 font-mono text-label uppercase tracking-label text-accent">View →</span>
                </div>
            </div>
        </Card>
    );
}
