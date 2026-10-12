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
        <div className="bg-surface border border-border rounded-lg overflow-hidden">
            {(path || badge) &&
            <div className="flex items-center justify-between gap-3 px-5 md:px-7 py-3 md:py-3.5 bg-surface-muted border-b border-border-subtle">
                <div className="font-mono text-label uppercase tracking-label text-text-muted">{path}</div>
                {badge}
            </div>}
            <div className="px-5 md:px-7 py-6 md:py-8 md:flex md:gap-14">
                <div className="md:flex-1 min-w-0">
                    <h1 className="text-title md:text-display font-display font-bold">
                        {title}
                    </h1>
                    {summary &&
                    <p className="mt-3.5 md:mt-4 max-w-reading text-body text-text-secondary">
                        {summary}
                    </p>}
                </div>
                {aside &&
                <div className="mt-3.5 pt-3.5 border-t border-border-subtle md:mt-0 md:pt-0 md:border-t-0 md:border-l md:pl-7 md:w-87 md:shrink-0">
                    {aside}
                </div>}
            </div>
        </div>
    );
}
