import Link from "next/link";
import type { Project } from "@/lib/projects";
import Card from "./Card";
import StatusBadge from "./StatusBadge";

type ProjectTileProps = {
    project: Project;
    titleAs?: 'h2' | 'h3';
    clamp?: boolean;
    wide?: boolean;
}

export default function ProjectTile({project, titleAs: Title = 'h3', clamp = true, wide = false}:ProjectTileProps) {
    const { slug, title, status, summary, event } = project;
    const heading = (
        <Title className="text-heading font-display font-bold">
            <Link
                href={`/projects/${slug}`}
                className="after:absolute after:inset-0 transition-colors group-hover:text-accent-strong focus-visible:outline-none"
            >
                {title}
            </Link>
        </Title>
    );
    const eventLine = event && [event.name, event.date, event.award].filter(Boolean).join(' · ');

    if (wide) return (
        <Card roomy interactive dashed={status === 'planned'}>
            <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap lg:gap-10">
                <div className="contents lg:flex lg:flex-col lg:gap-1.5 lg:flex-none lg:w-72">
                    <div className="order-1 flex-1 min-w-0 lg:order-none lg:flex-none">{heading}</div>
                    {eventLine && <p className="order-3 w-full -mt-1.5 font-mono text-caption text-text-muted lg:order-none lg:mt-0">{eventLine}</p>}
                </div>
                <div className="order-2 shrink-0 lg:order-last">
                    <StatusBadge status={status} />
                </div>
                <p className="order-4 w-full text-body-sm text-text-secondary line-clamp-3 md:line-clamp-4 lg:order-none lg:w-auto lg:flex-1 lg:min-w-0 lg:line-clamp-none">{summary}</p>
            </div>
        </Card>
    );

    return (
        <Card roomy interactive dashed={status === 'planned'}>
            <div className="h-full flex flex-col gap-3 md:gap-3.5">
                <div className="flex items-center justify-between gap-3">
                    {heading}
                    <StatusBadge status={status} />
                </div>

                {eventLine && <p className="-mt-1.5 font-mono text-caption text-text-muted">{eventLine}</p>}

                <p className={`text-body-sm text-text-secondary ${clamp ? 'line-clamp-3 md:line-clamp-4' : ''}`}>{summary}</p>
            </div>
        </Card>
    );
}
