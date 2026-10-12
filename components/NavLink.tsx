'use client'

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }:NavLinkProps) {
  const pathname = usePathname()
  const isActive = (pathname === href || pathname.startsWith(href+'/'));
  return (
    <Link
      href={href}
      className="group inline-grid px-2 py-3 text-body-sm focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      aria-current={isActive ? "page" : undefined}
      >
        <span aria-hidden="true" className="col-start-1 row-start-1 invisible font-semibold">
            {children}
        </span>
        <span className={`col-start-1 row-start-1 ${isActive ? "font-semibold text-text" : "text-text-muted group-hover:font-semibold group-hover:text-text"}`}>
            {children}
        </span>
    </Link>
  );
}
