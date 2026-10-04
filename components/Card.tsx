import { ReactNode } from "react";

type CardProps = {
    header?: ReactNode;
    children : ReactNode;
}

export default function Card({header, children}:CardProps) {
    return (
        <div className="bg-surface border border-border rounded-lg overflow-hidden">
            {header && 
            <div className="p-4 bg-surface-muted border-b border-border-subtle">
                {header}
            </div>}
            <div className="p-4">{children}</div>
        </div>
    );
}