export default function LogDate({date} : {date: string}) {
    const day = date.split(" ")[0];
    const comment = date.indexOf(' ') > -1 ? date.slice(date.indexOf(' ')+1) : undefined;

    return (
        <span className="inline-flex gap-2">
            <time dateTime={day} className="text-num font-mono">{day}</time>
            {comment && (<span className="text-num font-mono text-text-muted">{comment}</span>)}
        </span>
    );
}
