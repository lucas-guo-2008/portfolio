import type { ReactNode } from "react";

type SignProps = {
    children: ReactNode;
    tone?: 'marker' | 'finish';
    icon?: boolean;
    className?: string;
    'aria-hidden'?: boolean;
}

const tones: Record<'marker' | 'finish', string> = {
    'marker': 'bg-marker text-on-marker',
    'finish': 'bg-text text-surface',
}

export default function Sign({children, tone = 'marker', icon, className = '', 'aria-hidden': ariaHidden}:SignProps) {
    return (
        <span
            aria-hidden={ariaHidden}
            className={`inline-flex items-center justify-center rounded-sm font-mono text-label font-bold tracking-label uppercase leading-none ${tones[tone]} ${icon ? 'size-5' : 'px-2 py-1.5'} ${className}`}
        >
            {children}
        </span>
    );
}
