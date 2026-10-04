type PageHeaderProps = {
    title: string;
    summary?: string;
    path?: string;
}

export default function PageHeader({title, summary, path}:PageHeaderProps) {
    return (
        <div className="border border-border rounded-lg overflow-hidden">
            {path && 
            <div className="font-mono text-label uppercase py-4 px-6 border-b border-border bg-surface-muted">
                {path}
            </div>}
            <div className="bg-surface px-6">
                <h1 className="text-title md:text-display font-display font-bold py-4">
                    {title}
                </h1>
                {summary && 
                <p className="max-w-reading text-body pb-6">
                    {summary}
                </p>}
            </div>
        </div>
    );
}