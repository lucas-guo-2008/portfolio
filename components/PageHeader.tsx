import type { ReactNode } from "react";

type PageHeaderProps = {
    title: string;
    summary?: string;
    path?: ReactNode;
    badge?: ReactNode;
}

export default function PageHeader({title, summary, path, badge}:PageHeaderProps) {
    return (
        <div className="bg-surface border border-border rounded-lg overflow-hidden">
            {(path || badge) &&
            <div className="flex items-center justify-between gap-3 px-5 md:px-7 py-3 md:py-3.5 bg-surface-muted border-b border-border-subtle">
                <div className="font-mono text-label uppercase tracking-label text-text-muted">{path}</div>
                {badge}
            </div>}
            <div className="px-5 md:px-7 py-6 md:py-8">
                <h1 className="text-title md:text-display font-display font-bold">
                    {title}
                </h1>
                {summary &&
                <p className="mt-3.5 md:mt-4 max-w-reading text-body text-text-secondary">
                    {summary}
                </p>}
            </div>
        </div>
    );
}
