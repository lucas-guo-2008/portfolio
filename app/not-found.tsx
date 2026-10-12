import Link from 'next/link';
import EmptyState from '@/components/EmptyState';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <EmptyState
      as="h1"
      title="Page not found"
      content={
        <>
          {"There's nothing at this address. "}
          <Link
            href="/"
            className="font-mono text-caption text-accent border-b border-accent-border hover:text-accent-strong hover:border-accent-strong focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Back home →
          </Link>
        </>
      }
    />
  );
}
