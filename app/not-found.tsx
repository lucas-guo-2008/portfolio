import Link from 'next/link';
import CourseMap from '@/components/CourseMap';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="flex flex-col gap-4.5 py-12 md:py-24">
      <div aria-hidden="true" className="mb-6 h-32 md:h-48 max-w-2xl">
        <CourseMap variant="band" className="block w-full h-full" />
      </div>
      <h1 className="text-display md:text-hero font-display font-bold">Page not found</h1>
      <p className="text-body text-text-secondary">There&apos;s nothing at this address.</p>
      <Link
        href="/"
        className="self-start font-mono text-caption text-accent border-b border-accent-border hover:text-accent-strong hover:border-accent-strong focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        Back to the start →
      </Link>
    </section>
  );
}
