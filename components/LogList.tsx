'use client';

import { useState } from "react";
import type { Log } from "@/lib/logs";
import Button from "./Button";
import EmptyState from "./EmptyState";
import LogRow from "./LogRow";

type LogListProps = {
    logs: Log[];
}

export default function LogList({logs}:LogListProps) {
    const [open, setOpen] = useState<Set<number>>(new Set());

    function toggle(i: number) {
        setOpen(prev => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });
    }

    return (
        <section className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 md:min-h-9.5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-baseline gap-3">
                    <h2 className="text-heading font-display font-bold">Build log</h2>
                    <p className="font-mono text-label uppercase tracking-label text-text-muted">
                        {logs.length} {logs.length === 1 ? 'entry' : 'entries'}
                    </p>
                </div>
                {logs.length > 0 &&
                <div className="flex gap-2">
                    <Button onClick={() => setOpen(new Set(logs.map((_, i) => i)))}>Open all</Button>
                    <Button onClick={() => setOpen(new Set())}>Close all</Button>
                </div>}
            </div>
            {logs.length > 0
                ? <div className="flex flex-col gap-2">
                    {logs.map((log, i) => (
                        <LogRow key={log.title} log={log} open={open.has(i)} onToggle={() => toggle(i)} />
                    ))}
                  </div>
                : <EmptyState title="No logs yet" content="Nothing written for this project so far. Entries land here as the build moves along." />}
        </section>
    );
}
