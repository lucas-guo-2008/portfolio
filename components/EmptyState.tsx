type EmptyStateProps = {
    title: string;
    content: React.ReactNode;
    as?: 'p' | 'h1';
}

export default function EmptyState({title, content, as: Title = 'p'}:EmptyStateProps) {
    return (
        <div className="border border-text-faint border-dashed rounded-lg bg-surface px-5 py-6 md:px-7 md:py-9 flex flex-col gap-1.5">
            <Title className="text-heading font-bold font-display">
                {title}
            </Title>
            <p className="max-w-reading text-body-sm text-text-secondary">
                {content}
            </p>
        </div>
    );
}
