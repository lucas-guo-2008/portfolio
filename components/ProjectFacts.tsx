import { splitStackItem } from "@/lib/projects";
import SocialLink from "./SocialLink";

type ProjectFactsProps = {
    repo?: string;
    stack: string[];
}

const label = "font-mono text-label uppercase tracking-label text-text-muted";

export default function ProjectFacts({repo, stack}:ProjectFactsProps) {
    return (
        <dl className="flex flex-col gap-3 md:gap-3.5">
            {repo && (
                <div>
                    <dt className={label}>Repo</dt>
                    <dd className="mt-1">
                        <SocialLink href={repo}>{repo.replace('https://github.com/', '')}{'\u00a0↗'}</SocialLink>
                    </dd>
                </div>
            )}
            {stack.map(item => {
                const { key, value } = splitStackItem(item);
                return (
                    <div key={item}>
                        {key && <dt className={label}>{key}</dt>}
                        <dd className="mt-1 text-body-sm text-text-secondary">{value}</dd>
                    </div>
                );
            })}
        </dl>
    );
}
