import { socials } from "@/lib/socials";
import SocialLink from "./SocialLink";

export default function Footer() {
    return (
        <footer className="w-full mx-auto max-w-page px-5 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-x-4 gap-y-2 border-t border-border py-8">
                <ul className="flex flex-wrap gap-4 md:gap-10">
                    {socials.map(link => <li key={link.href}><SocialLink href={link.href}>{link.label}</SocialLink></li>)}
                </ul>
                <div className="text-label font-mono tracking-label uppercase text-text-muted">Lucas Guo · 2026</div>
            </div>
        </footer>
    )
}