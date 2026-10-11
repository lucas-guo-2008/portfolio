import type { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'accent' | 'muted';
}

const socialLinkStyles: Record<'accent' | 'muted', string> = {
    'accent': 'text-body-sm text-accent border-accent-border hover:text-accent-strong hover:border-accent-strong',
    'muted': 'text-caption text-text-secondary border-transparent hover:border-text-secondary',
}

export default function SocialLink({ href, children, variant='accent' }:SocialLinkProps) {
  return (
    <a 
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'} 
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className={`font-mono border-b focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${socialLinkStyles[variant]}`}
      >
      {children}
    </a>
  );
}
