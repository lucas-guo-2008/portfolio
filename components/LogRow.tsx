'use client';

import { useId, useState } from "react";
import type { Log } from "@/lib/logs";
import LogDate from "./LogDate";
import Prose from "./Prose";

type LogRowProps = {
    log: Log;
}

export default function LogRow({log}:LogRowProps) {
    const [open, setOpen] = useState(false);
    const panelId = useId();

    return (
        <div className="bg-surface border border-border rounded-lg overflow-hidden hover:border-accent">
            <h3>
                {/* The whole header row is the button: a big hit target that Tab + Enter can reach */}
                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpen(!open)}
                    className={`group w-full min-h-14 px-5 py-4 flex items-center justify-between gap-3 text-left focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2 ${open ? 'bg-surface-muted' : ''}`}
                >
                    <span className="font-serif text-log font-semibold">{log.title}</span>
                    <span className="shrink-0 font-mono text-label uppercase tracking-label text-accent border-b border-transparent group-hover:text-accent-strong group-hover:border-accent-strong">
                        {open ? 'Hide' : 'Read'}
                    </span>
                </button>
            </h3>
            {open && (
                <div id={panelId} className="px-5 pt-5 pb-6 border-t border-border-subtle">
                    <LogDate date={log.date} />
                    <div className="mt-3.5">
                        <Prose entry={log.entry} />
                    </div>
                </div>
            )}
        </div>
    );
}
