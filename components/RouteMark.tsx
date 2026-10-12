// Route L: the same drawing as app/icon.svg, colored from tokens instead of hex values.
type RouteMarkProps = {
  size?: number;
  tile?: 'page' | 'surface';
};

export default function RouteMark({ size = 24, tile = 'page' }: RouteMarkProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <rect width="32" height="32" rx="7" className={tile === 'surface' ? 'fill-surface' : 'fill-page'} />
      <path d="M10 7 V18.5 Q10 23 14.5 23 H21.5" fill="none" className="stroke-accent"
            strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="7" r="2.8" className="fill-accent" />
      <circle cx="24" cy="23" r="3.4" className="fill-marker" />
    </svg>
  );
}
