import Link from 'next/link';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="flex flex-row justify-between items-center h-14 md:h-16.5 w-full mx-auto max-w-page px-5 md:px-12">
        <div>
          <Link className="text-heading font-display font-bold focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2" href="/">lucasguo</Link>
        </div>
        {/* Links carry their own px-2 for tap targets; md:-mr-2 keeps the last word flush with the page edge */}
        <nav className="flex gap-1 md:gap-2.5 md:-mr-2">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}