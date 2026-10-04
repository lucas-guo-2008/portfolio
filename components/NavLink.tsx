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
      className="group inline-grid focus-visible:ring-accent focus-visible:ring-2 outline-hidden"
      aria-current={isActive ? "page" : undefined}
      >
        <span aria-hidden="true" className="col-start-1 row-start-1 invisible font-bold">
            {children}
        </span>
        <span className={`col-start-1 row-start-1 ${isActive ? "font-bold" : "group-hover:font-bold"}`}>
            {children}
        </span>
    </Link>
  );
}
