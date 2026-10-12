import { ReactNode } from "react";

type CardProps = {
    header?: ReactNode;   // remove in D11, once /about stops using it
    children : ReactNode;
    roomy?: boolean;
    interactive?: boolean;
    dashed?: boolean;
}

// The card is the link: its title link stretches over it (after:inset-0), so hover and focus live here.
const interactiveStyles = [
    'group relative transition',
    'hover:bg-accent-soft hover:border-accent',
    'motion-safe:hover:-translate-y-0.5 active:translate-y-0',
    'has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-accent has-[a:focus-visible]:outline-offset-2',
].join(' ');

export default function Card({header, children, roomy, interactive, dashed}:CardProps) {
    return (
        <div className={`border rounded-lg overflow-hidden flex flex-col ${dashed ? 'border-dashed border-text-faint bg-surface-muted' : 'bg-surface border-border'} ${interactive ? interactiveStyles : ''}`}>
            {header &&
            <div className="px-4 py-3 md:px-7 md:py-3.5 bg-surface-muted font-mono text-label uppercase tracking-label text-text-muted border-b border-border-subtle">
                {header}
            </div>}
            <div className={`flex-1 ${roomy ? 'p-5 md:p-6' : 'p-4'}`}>{children}</div>
        </div>
    );
}
