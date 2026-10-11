import { ReactNode } from "react";

type CardProps = {
    header?: ReactNode;
    children : ReactNode;
    roomy?: boolean;         // p-6 body instead of p-4 (project cards)
    interactive?: boolean;   // the whole card is a link: border turns accent on hover
}

export default function Card({header, children, roomy, interactive}:CardProps) {
    return (
        <div className={`bg-surface border border-border rounded-lg overflow-hidden ${interactive ? 'relative hover:border-accent' : ''}`}>
            {header &&
            <div className="p-4 bg-surface-muted font-mono text-label uppercase tracking-label border-b border-border-subtle">
                {header}
            </div>}
            <div className={roomy ? 'p-6' : 'p-4'}>{children}</div>
        </div>
    );
}
