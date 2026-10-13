import type { CSSProperties } from "react";
import type { Phase } from "@/lib/projects";
import Sign from "./Sign";

type RoadmapProps = {
    phases: Phase[];
    current?: number;
}

type StopState = 'done' | 'current' | 'upcoming';

const road = [
    'relative flex flex-col gap-5.5 pl-10',
    'before:absolute before:left-1 before:inset-y-0 before:w-3.5 before:rounded-full before:bg-border-subtle',
    'after:absolute after:left-2.5 after:inset-y-2 after:border-l-2 after:border-dashed after:border-surface',
    'md:grid md:grid-flow-col md:auto-cols-fr md:gap-5 md:pl-0',
    'md:before:inset-x-0 md:before:top-1.5 md:before:w-auto md:before:h-3.5',
    'md:after:inset-x-3 md:after:top-3 md:after:bottom-auto md:after:border-l-0 md:after:border-t-2',
].join(' ');

const srLabel: Record<StopState, string> = {
    'done': 'Done: ',
    'current': 'In progress: ',
    'upcoming': 'Up next: ',
}

export default function Roadmap({phases, current}:RoadmapProps) {
    if (phases.length === 0) return null;
    const progress = current === undefined ? undefined
        : `${Math.min(100, (current + 0.5) / phases.length * 100)}%`;

    return (
        <section className="flex flex-col gap-5.5">
            <h2 className="text-heading md:text-title font-display font-bold">Roadmap</h2>
            <div className="relative">
                <ol className={road}>
                    {phases.map((phase, i) => {
                        const last = i === phases.length - 1;
                        const state: StopState | undefined = current === undefined ? undefined
                            : i < current ? 'done' : i === current ? 'current' : 'upcoming';
                        return (
                            <li key={phase.comment} className="relative z-10 flex flex-col gap-2">
                                {state && <span className="sr-only">{srLabel[state]}</span>}
                                <Sign tone={last ? 'finish' : 'marker'} state={state} className="self-start -ml-10 md:ml-0">
                                    {last ? 'FINISH' : `KM ${i + 1}`}
                                </Sign>
                                <p className={`font-display font-bold text-body ${state === 'upcoming' ? 'text-text-muted' : ''}`}>
                                    {phase.comment}
                                    {state === 'current' &&
                                    <span className="ml-1.5 font-mono text-label tracking-label uppercase text-accent">Now</span>}
                                </p>
                                <p className={`text-body-sm ${state === 'upcoming' ? 'text-text-muted' : 'text-text-secondary'}`}>{phase.description}</p>
                            </li>
                        );
                    })}
                </ol>
                {progress &&
                <div
                    aria-hidden="true"
                    style={{ '--progress': progress } as CSSProperties}
                    className="absolute rounded-full bg-accent left-1 top-0 w-3.5 h-(--progress) md:left-0 md:top-1.5 md:h-3.5 md:w-(--progress)"
                />}
            </div>
        </section>
    );
}
