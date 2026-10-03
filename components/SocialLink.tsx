import React from 'react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialLink({ href, children }:SocialLinkProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent text-body-sm font-mono border-b border-accent-border hover:text-accent-strong hover:border-accent-strong focus-visible:ring-accent focus-visible:ring-2 outline-hidden"
    >
      {children}
    </a>
  );
}
