import { ReactNode } from "react";

type CardProps = {
    header?: ReactNode;
    children : ReactNode;
    roomy?: boolean;
    interactive?: boolean;
}

export default function Card({header, children, roomy, interactive}:CardProps) {
    return (
        <div className={`bg-surface border border-border rounded-lg overflow-hidden flex flex-col ${interactive ? 'relative hover:border-accent' : ''}`}>
            {header &&
            <div className="p-4 bg-surface-muted font-mono text-label uppercase tracking-label border-b border-border-subtle">
                {header}
            </div>}
            <div className={`flex-1 ${roomy ? 'p-5 md:p-6' : 'p-4'}`}>{children}</div>
        </div>
    );
}
