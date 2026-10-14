import { resumeUrl, socials } from "@/lib/socials";

const link = "text-accent border-b border-accent-border hover:text-accent-strong hover:border-accent-strong focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

export default function ContactLinks() {
    const links = socials
        .filter(social => social.hero)
        .map(social => ({ href: social.href, label: social.label, external: social.href.startsWith('http') }));
    if (resumeUrl) links.push({ href: resumeUrl, label: 'Résumé', external: true });

    return (
        <ul className="flex flex-wrap items-center gap-x-4.5 gap-y-2 font-mono text-caption">
            {links.map(({ href, label, external }) => (
                <li key={label}>
                    <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className={link}
                    >
                        {external ? `${label} ↗` : label}
                    </a>
                </li>
            ))}
        </ul>
    );
}
