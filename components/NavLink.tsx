import type { ReactNode } from 'react';
import Link from 'next/link';

interface NavlinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }:NavlinkProps) {
  return (
    <Link
      href={href}
      className="group inline-grid focus-visible:ring-accent focus-visible:ring-2 outline-hidden"
      >
        <span aria-hidden="true" className="col-start-1 row-start-1 invisible font-bold">
            {children}
        </span>
        <span className="col-start-1 row-start-1 group-hover:font-bold">
            {children}
        </span>
    </Link>
  );
}
