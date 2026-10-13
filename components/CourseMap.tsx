type CourseMapProps = {
  variant?: 'full' | 'band';
  className?: string;
};

const kmMarkers = [
  { cx: 120, cy: 355 },
  { cx: 250, cy: 300 },
  { cx: 380, cy: 245 },
  { cx: 510, cy: 135 },
];

export default function CourseMap({ variant = 'full', className = '' }: CourseMapProps) {
  const full = variant === 'full';
  return (
    <svg viewBox={full ? '0 0 640 520' : '60 150 520 300'} preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={className}>
      <g fill="none" className="stroke-border-subtle" strokeWidth={12} strokeLinecap="round">
        <path d="M40 80 H620 M40 190 H620 M40 300 H620 M40 410 H620" />
        <path d="M120 30 V500 M250 30 V500 M380 30 V500 M510 30 V500" />
        <path d="M30 500 L330 30" />
      </g>

      <path d="M120 410 V300 H380 V190 H510 V80" fill="none" className="stroke-accent"
            strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="120" cy="410" r="7" className="fill-accent" />
      {full && <text x="134" y="432" className="fill-accent font-mono" fontSize={11} letterSpacing={1.5}>START</text>}

      {kmMarkers.map(({ cx, cy }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="11" className="fill-surface stroke-marker" strokeWidth={2.5} />
          {full && <text x={cx} y={cy + 4} className="fill-marker font-mono" fontSize={11} fontWeight={700} textAnchor="middle">{i + 1}</text>}
        </g>
      ))}

      <g transform="translate(510 80)">
        <path d="M0 0 V-34" className="stroke-text" strokeWidth={2} />
        <rect x="0" y="-34" width="24" height="16" className="fill-surface stroke-text" strokeWidth={1.5} />
        <path d="M0 -34 h6 v4 h-6z M12 -34 h6 v4 h-6z M6 -30 h6 v4 h-6z M18 -30 h6 v4 h-6z M0 -26 h6 v4 h-6z M12 -26 h6 v4 h-6z M6 -22 h6 v4 h-6z M18 -22 h6 v4 h-6z" className="fill-text" />
      </g>
    </svg>
  );
}
