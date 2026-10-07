type EmptyStateProps = {
    title: string;
    content: React.ReactNode;
}

export default function EmptyState({title, content}:EmptyStateProps) {
    return (
        <div className="border border-text-faint border-dashed rounded-lg bg-surface p-6 flex flex-col gap-2">
            <p className="text-heading md:text-heading font-bold font-display">
                {title}
            </p>
            <p className="max-w-reading text-body-sm text-text-muted">
                {content}
            </p>
        </div>
    );
}