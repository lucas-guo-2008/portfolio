import type { Project } from "@/lib/projects";

type StatusBadgeProps = {
    status: Project['status'];
}

const statusBadges: Record<Project['status'], {label: string; dot: string}> = {
    'live': {label: 'bg-live-soft text-live border-live-border', dot: 'bg-live'},
    'building': {label: 'bg-accent-soft text-accent border-accent-border', dot: 'bg-accent'},
    'planned': {label: 'bg-surface-muted text-text-muted border-text-faint border-dashed', dot: 'border border-text-muted'},
}

export default function StatusBadge({status} : StatusBadgeProps) {
    return (
        <span className={`px-3 py-1 border rounded-full text-label font-mono uppercase tracking-label inline-flex items-center gap-1.5 ${statusBadges[status].label}`}>
            <span className={`size-2 rounded-full shrink-0 ${statusBadges[status].dot}`} aria-hidden="true"></span>
            {status}
        </span>
    );
}