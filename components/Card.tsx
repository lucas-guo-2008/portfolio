import { ReactNode } from "react";

type CardProps = {
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

export default function Card({children, roomy, interactive, dashed}:CardProps) {
    return (
        <div className={`border rounded-lg overflow-hidden flex flex-col ${dashed ? 'border-dashed border-text-faint bg-surface-muted' : 'bg-surface border-border'} ${interactive ? interactiveStyles : ''}`}>
            <div className={`flex-1 ${roomy ? 'p-5 md:p-6' : 'p-4'}`}>{children}</div>
        </div>
    );
}
