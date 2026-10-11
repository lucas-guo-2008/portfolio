type StackListProps = {
    stack: string[];
}

function splitItem(item: string) {
    const i = item.indexOf(':');
    if (i === -1) return { key: null, value: item };
    return { key: item.slice(0, i).trim(), value: item.slice(i + 1).trim() };
}

export default function StackList({stack}:StackListProps) {
    return (
        <dl>
            {stack.map(item => {
                const { key, value } = splitItem(item);
                return (
                    <div key={item} className="flex flex-col sm:flex-row sm:gap-3 py-2 border-t border-border-subtle text-body-sm">
                        {key && <dt className="font-mono text-caption text-text-muted sm:w-30 sm:shrink-0 sm:pt-px">{key}</dt>}
                        <dd className="text-text-secondary min-w-0">{value}</dd>
                    </div>
                );
            })}
        </dl>
    );
}
