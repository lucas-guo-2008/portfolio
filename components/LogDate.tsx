import { formatLogDate } from "@/lib/logs";

export default function LogDate({date} : {date: string}) {
    const { iso, label, suffix } = formatLogDate(date);
    return (
        <span className="font-mono text-num text-text-muted">
            <time dateTime={iso}>{label}</time>
            {suffix && <> · {suffix}</>}
        </span>
    );
}
