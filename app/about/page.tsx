import Image from 'next/image';
import Link from 'next/link';
import Bib from '@/components/Bib';
import type { ReactNode } from 'react';
import { bib, bio, funFact, location, photo, profile, tagline } from '@/lib/about';
import { projects } from '@/lib/projects';
import { dashboardUrl, resumeUrl, socials, type Social } from '@/lib/socials';

export const metadata = {
  title: "About me"
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';
const sectionHeading = 'text-heading md:text-title font-display font-bold';
const socialBox = 'flex items-center justify-between gap-2.5 px-4 py-3.5 bg-surface border border-border rounded-lg';
const socialHover = `hover:bg-accent-soft hover:border-accent hover:text-accent-strong transition-colors ${focusRing}`;

export default function AboutPage() {
  const workingOn = projects.filter(p => p.status === 'building').map(p => (
    <Link key={p.slug} href={`/projects/${p.slug}`} className={`text-accent hover:text-accent-strong ${focusRing}`}>{p.title}</Link>
  ));
  const findMe: Social[] = resumeUrl ? [{ href: resumeUrl, label: 'Résumé', handle: 'PDF' }, ...socials] : socials;
  const rows: { label: string; items: ReactNode[] }[] = profile.map(row => ({
    label: row.label,
    items: 'derived' in row ? workingOn : row.items,
  }));

  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
        <div className={photo ? 'relative md:w-115 md:shrink-0 md:pb-30' : 'md:shrink-0'}>
          {photo && <Image src={photo.src} alt={photo.alt} width={720} height={900}
                           className="w-full max-w-90 aspect-4/5 object-cover rounded-lg border border-border" />}
          <Bib {...bib} className={photo ? 'mt-6 mx-auto -rotate-2 md:mt-0 md:mx-0 md:absolute md:right-0 md:bottom-0 md:-rotate-3' : '-rotate-2'} />
        </div>
        <div className="flex-1 min-w-0 max-w-reading flex flex-col gap-4.5">
          <p className="font-mono text-caption tracking-wide text-text-muted">{location}</p>
          <p className="text-title md:text-display font-display font-bold">{tagline}</p>
          <p className="text-body text-text-secondary">{bio[1]}</p>
          {funFact &&
          <p className="px-4 py-3 bg-surface border border-dashed border-text-faint rounded-lg text-body-sm text-text-secondary">
            <b className="font-display">Fun fact:</b> {funFact}
          </p>}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className={sectionHeading}>Athlete profile</h2>
        <dl className="bg-surface border border-border rounded-lg divide-y divide-border-subtle">
          {rows.map(row => (
            <div key={row.label} className="flex flex-col gap-1 md:flex-row md:gap-4 px-5 py-3.5">
              <dt className="md:w-50 md:shrink-0 font-mono text-caption text-text-muted">{row.label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-body text-text">
                  {row.items.map((item, i) => (
                    <li key={i}>
                      {i > 0 && <span aria-hidden="true" className="pr-1.5 text-text-faint">·</span>}
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {dashboardUrl &&
      <a href={dashboardUrl} target="_blank" rel="noopener noreferrer"
         className={`flex items-center justify-between gap-4 px-6 py-5.5 bg-surface border border-border rounded-lg motion-safe:hover:-translate-y-0.5 active:translate-y-0 ${socialHover}`}>
        <span className="flex flex-col gap-1.5">
          <span className="text-heading font-display font-bold">Running, gym and sleep stats are on the Life Dashboard</span>
          <span className="text-body-sm text-text-secondary">Tracked and charted on my other site.</span>
        </span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5.5 shrink-0">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </a>}

      <section className="flex flex-col gap-4">
        <h2 className={sectionHeading}>Find me</h2>
        <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {findMe.map(({ href, label, handle }) => {
            const newTab = !href.startsWith('mailto:');
            return (
              <li key={label}>
                <a href={href} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined}
                   className={`${socialBox} ${socialHover}`}>
                  <span className="font-display font-bold">{label}</span>
                  <span className="font-mono text-caption text-text-muted">{[handle, newTab && '↗'].filter(Boolean).join(' ')}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
