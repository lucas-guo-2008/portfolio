import { socials } from "@/lib/socials";
import SocialLink from "./SocialLink";

export default function Footer() {
    return (
        // mt adds to <main>'s bottom padding: 12 + 36 = 48px at 390, 32 + 40 = 72px at md
        <footer className="mt-9 md:mt-10 bg-surface border-t border-border">
            <div className="w-full mx-auto max-w-page px-5 md:px-12 py-5 md:py-7 flex flex-col md:flex-row justify-between md:items-center gap-3">
                <ul className="grid grid-cols-2 gap-x-4 md:flex md:flex-wrap md:gap-6">
                    {socials.map(link => (
                        <li key={link.label} className="py-3 md:py-0 last:col-span-2">
                            {link.href
                                ? <SocialLink href={link.href} variant='muted'>{link.label}</SocialLink>
                                : <span className="text-caption font-mono text-text-secondary border-b border-transparent">{link.label}</span>}
                        </li>
                    ))}
                </ul>
                <div className="text-label font-mono tracking-label uppercase text-text-muted">Lucas Guo · 2026</div>
            </div>
        </footer>
    )
}
