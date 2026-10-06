import Link from 'next/link';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="flex flex-row justify-between items-center py-4 md:py-8 w-full mx-auto max-w-page px-5 md:px-12">
        <div>
          <Link className="text-heading font-display font-bold focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2" href="/">lucasguo</Link>
        </div>
        <nav className="flex gap-8 md:gap-16">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}