import type { ReactNode } from "react";

type Tone = 'marker' | 'finish';

type SignProps = {
    children: ReactNode;
    tone?: Tone;
    state?: 'done' | 'current' | 'upcoming';
    icon?: boolean;
    className?: string;
    'aria-hidden'?: boolean;
}

const tones: Record<Tone, { solid: string; outline: string; ring: string }> = {
    'marker': { solid: 'bg-marker text-on-marker', outline: 'bg-surface text-marker border border-marker', ring: 'outline-2 outline-offset-2 outline-marker' },
    'finish': { solid: 'bg-text text-surface', outline: 'bg-surface text-text border border-text', ring: 'outline-2 outline-offset-2 outline-text' },
}

export default function Sign({children, tone = 'marker', state, icon, className = '', 'aria-hidden': ariaHidden}:SignProps) {
    const colors = state === 'upcoming' ? tones[tone].outline
        : state === 'current' ? `${tones[tone].solid} ${tones[tone].ring}`
        : tones[tone].solid;
    return (
        <span
            aria-hidden={ariaHidden}
            className={`inline-flex items-center justify-center gap-1 rounded-sm font-mono text-label font-bold tracking-label uppercase leading-none ${colors} ${icon ? 'size-5' : 'px-2 py-1.5'} ${className}`}
        >
            {state === 'done' &&
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-2.5 shrink-0">
                <path d="M5 12l5 5 9-10" />
            </svg>}
            {children}
        </span>
    );
}
