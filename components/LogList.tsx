import type { Log } from "@/lib/logs";
import LogRow from "./LogRow";

type LogListProps = {
    logs: Log[];
}

export default function LogList({logs}:LogListProps) {
    return (
        <div className="flex flex-col gap-2">
            {logs.map(log => <LogRow key={log.title} log={log} />)}
        </div>
    );
}
