import { parseEntry } from "@/lib/logs";

type ProseProps = {
    entry: string;
}

export default function Prose({entry}:ProseProps) {
    return (
        <div className="max-w-reading space-y-5 text-body text-text-secondary">
            {parseEntry(entry).map((block, i) => block.kind === 'paragraph'
                ? <p key={i}>{block.text}</p>
                : (
                    <ol key={i} className="space-y-2.5">
                        {block.items.map((item, n) => (
                            <li key={n} className="flex gap-3">
                                <span aria-hidden="true" className="h-fit mt-1 px-1.5 py-0.5 rounded-sm bg-accent-soft font-mono text-label font-bold text-accent-strong">
                                    {n + 1}
                                </span>
                                {item.body.length > 0
                                    ? <div className="min-w-0">
                                        <p className="font-semibold text-text">{item.lead}</p>
                                        <p className="whitespace-pre-line">{item.body.join('\n')}</p>
                                      </div>
                                    : <span className="min-w-0">{item.lead}</span>}
                            </li>
                        ))}
                    </ol>
                ))}
        </div>
    );
}
