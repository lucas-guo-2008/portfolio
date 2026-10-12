import { splitStackItem } from "@/lib/projects";

type StackListProps = {
    stack: string[];
}

export default function StackList({stack}:StackListProps) {
    return (
        <dl>
            {stack.map(item => {
                const { key, value } = splitStackItem(item);
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
