import type { ReactNode } from "react";

type PageHeaderProps = {
    title: string;
    summary?: string;
    path?: ReactNode;
    badge?: ReactNode;
    aside?: ReactNode;
}

export default function PageHeader({title, summary, path, badge, aside}:PageHeaderProps) {
    return (
        <header className="flex flex-col md:flex-row gap-8 md:gap-14 md:items-start">
            <div className="flex-1 min-w-0 flex flex-col gap-4">
                {(path || badge) &&
                <div className="flex flex-wrap items-center gap-3.5">
                    {path && <div className="font-mono text-caption text-text-muted">{path}</div>}
                    {badge}
                </div>}
                <h1 className="text-display md:text-hero font-display font-bold">{title}</h1>
                {summary && <p className="max-w-reading text-body text-text-secondary">{summary}</p>}
            </div>
            {aside &&
            <div className="md:w-87 md:shrink-0 bg-surface border border-border rounded-lg p-5">
                {aside}
            </div>}
        </header>
    );
}
