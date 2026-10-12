type ComingSoonProps = {
    content: React.ReactNode;
}

export default function ComingSoon({content}:ComingSoonProps) {
    return (
        <section className="border border-text-faint border-dashed rounded-lg bg-surface px-5 py-7 md:px-8 md:py-10 flex flex-col gap-2 md:gap-2.5">
            <h2 className="text-heading font-bold font-display">Coming soon</h2>
            <p className="max-w-reading text-body text-text-secondary">
                {content}
            </p>
        </section>
    );
}
