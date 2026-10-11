import type { Phase } from "@/lib/projects";

type PhaseListProps = {
    phases: Phase[];
}

export default function PhaseList({phases}:PhaseListProps) {
    return (
        <ol>
            {phases.map((phase, i) => (
                <li key={phase.comment} className="py-2 border-t border-border-subtle text-body-sm text-text-secondary">
                    <span className="font-mono text-caption font-medium text-accent-strong">Phase {i + 1}</span>{' '}
                    <b className="font-semibold text-text">({phase.comment}):</b> {phase.description}
                </li>
            ))}
        </ol>
    );
}
