import type { Project } from "@/lib/projects";

type StatusBadgeProps = {
    status: Project['status'];
}

const statusBadges: Record<Project['status'], {label: string; dot: string}> = {
    'live': {label: 'bg-live-soft text-live border-live-border', dot: 'bg-live'},
    'complete': {label: 'bg-live-soft text-live border-live-border', dot: ''},
    'building': {label: 'bg-accent-soft text-accent border-accent-border', dot: 'bg-accent'},
    'planned': {label: 'bg-surface-muted text-text-muted border-text-faint border-dashed', dot: 'border border-text-muted'},
}

export default function StatusBadge({status} : StatusBadgeProps) {
    return (
        <span className={`group-hover:bg-surface px-3 py-1 border rounded-full text-label font-mono uppercase tracking-label inline-flex items-center gap-1.5 ${statusBadges[status].label}`}>
            {status === 'complete'
                ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-2.5 shrink-0">
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                : <span className={`size-2 rounded-full shrink-0 ${statusBadges[status].dot}`} aria-hidden="true"></span>}
            {status}
        </span>
    );
}