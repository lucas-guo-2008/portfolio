import { useId } from "react";
import type { Log } from "@/lib/logs";
import LogDate from "./LogDate";
import Prose from "./Prose";

type LogRowProps = {
    log: Log;
    day: number;
    open: boolean;
    onToggle: () => void;
}

export default function LogRow({log, day, open, onToggle}:LogRowProps) {
    const panelId = useId();

    return (
        <div>
            <h3>
                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={onToggle}
                    className={`group w-full flex items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2 ${open ? 'bg-surface-muted' : ''}`}
                >
                    <span className="flex-1 min-w-0 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                        <span className="font-serif text-log font-semibold group-hover:text-accent-strong transition-colors">{log.title}</span>
                        <span className="sr-only">, </span>
                        <span className="order-first shrink-0 flex items-baseline gap-1.5 font-mono text-caption text-text-muted md:w-30 md:flex-col md:items-start md:gap-0.5">
                            <span className="font-bold text-text text-caption md:text-num-lg">Day {String(day).padStart(2, '0')}</span>
                            <span className="sr-only">, </span>
                            <span aria-hidden="true" className="md:hidden">·</span>
                            <LogDate date={log.date} />
                        </span>
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                         className={`size-4.5 shrink-0 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}>
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </button>
            </h3>
            {open && (
                <div id={panelId} className="px-5 pb-6 pt-1 md:pl-39">
                    <Prose entry={log.entry} />
                </div>
            )}
        </div>
    );
}
