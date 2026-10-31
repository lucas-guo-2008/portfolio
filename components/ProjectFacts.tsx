import { splitStackItem, type Project } from "@/lib/projects";
import SocialLink from "./SocialLink";

type ProjectFactsProps = Pick<Project, 'repo' | 'stack' | 'role' | 'event' | 'links'>;

const label = "font-mono text-label uppercase tracking-label text-text-muted";

export default function ProjectFacts({repo, stack, role, event, links}:ProjectFactsProps) {
    return (
        <dl className="flex flex-col gap-3 md:gap-3.5">
            {role && (
                <div>
                    <dt className={label}>My part</dt>
                    <dd className="mt-1 text-body-sm text-text-secondary">{role}</dd>
                </div>
            )}
            {event && (
                <div>
                    <dt className={label}>Event</dt>
                    <dd className="mt-1 text-body-sm text-text-secondary">
                        {[event.name, event.date, event.award].filter(Boolean).join(' · ')}
                    </dd>
                </div>
            )}
            {repo && (
                <div>
                    <dt className={label}>Repo</dt>
                    <dd className="mt-1">
                        <SocialLink href={repo}>{repo.replace('https://github.com/', '')}{' ↗'}</SocialLink>
                    </dd>
                </div>
            )}
            {links && links.length > 0 && (
                <div>
                    <dt className={label}>Links</dt>
                    {links.map(link => (
                        <dd key={link.href} className="mt-1">
                            <SocialLink href={link.href}>{link.label}{' ↗'}</SocialLink>
                        </dd>
                    ))}
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
