import type { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

export default function SocialLink({ href, children }:SocialLinkProps) {
  return (
    <a 
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'} 
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="text-accent text-body-sm font-mono border-b border-accent-border hover:text-accent-strong hover:border-accent-strong focus-visible:ring-accent focus-visible:ring-2 outline-hidden"
      >
      {children}
    </a>
  );
}
