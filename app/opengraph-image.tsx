import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { name, tagline } from '@/lib/about';

export const alt = 'Lucas Guo: CS major and Strava monkey';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const C = {
  page: '#F3F1EC',
  surface: '#FFFFFF',
  text: '#0E1216',
  textSecondary: '#323A42',
  textMuted: '#6B6455',
  borderSubtle: '#E7E2D7',
  accent: '#4E52D8',
  marker: '#C2410C',
};

const font = (file: string) => readFile(join(process.cwd(), 'assets/fonts', file));
const [spaceGroteskRegular, spaceGroteskBold] = await Promise.all([font('SpaceGrotesk-Regular.ttf'), font('SpaceGrotesk-Bold.ttf')]);

const squares = Array.from({ length: size.width / 8 }, (_, i) => i);

function FinishRow({ offset }: { offset: number }) {
  return (
    <div style={{ display: 'flex' }}>
      {squares.map(i => (
        <div key={i} style={{ width: 8, height: 8, background: (i + offset) % 2 === 0 ? C.textSecondary : 'transparent' }} />
      ))}
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: C.page }}>
        <div style={{ flex: 1, display: 'flex', position: 'relative', padding: 72, overflow: 'hidden' }}>
          <svg width="760" height="618" viewBox="0 0 640 520" style={{ position: 'absolute', right: -140, top: -80 }}>
            <g fill="none" stroke={C.borderSubtle} strokeWidth={12} strokeLinecap="round">
              <path d="M40 80 H620 M40 190 H620 M40 300 H620 M40 410 H620" />
              <path d="M120 30 V500 M250 30 V500 M380 30 V500 M510 30 V500" />
              <path d="M30 500 L330 30" />
            </g>
            <path d="M120 410 V300 H380 V190 H510 V80" fill="none" stroke={C.accent} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="120" cy="410" r="11" fill={C.accent} />
            <circle cx="510" cy="80" r="14" fill={C.marker} />
          </svg>

          <div style={{ width: 660, display: 'flex', flexDirection: 'column' }}>
            <svg width="88" height="88" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="7" fill={C.surface} />
              <path d="M10 7 V18.5 Q10 23 14.5 23 H21.5" fill="none" stroke={C.accent} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="7" r="2.8" fill={C.accent} />
              <circle cx="24" cy="23" r="3.4" fill={C.marker} />
            </svg>
            <div style={{ marginTop: 36, fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.035em', color: C.text }}>{name}</div>
            <div style={{ marginTop: 16, fontSize: 44, fontWeight: 400, lineHeight: 1.1, color: C.textSecondary }}>{tagline}</div>
            <div style={{ marginTop: 20, fontSize: 28, fontWeight: 400, color: C.textMuted }}>CS · University of Waterloo</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <FinishRow offset={0} />
          <FinishRow offset={1} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Space Grotesk', data: spaceGroteskRegular, style: 'normal', weight: 400 },
        { name: 'Space Grotesk', data: spaceGroteskBold, style: 'normal', weight: 700 },
      ],
    },
  );
}
