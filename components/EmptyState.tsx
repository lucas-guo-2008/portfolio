type EmptyStateProps = {
    title: string;
    content: React.ReactNode;
}

export default function EmptyState({title, content}:EmptyStateProps) {
    return (
        <div className="border border-text-faint border-dashed rounded-lg bg-surface px-5 py-6 md:px-7 md:py-9 flex flex-col gap-1.5">
            <p className="text-heading font-bold font-display">
                {title}
            </p>
            <p className="max-w-reading text-body-sm text-text-secondary">
                {content}
            </p>
        </div>
    );
}
