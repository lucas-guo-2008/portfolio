import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { tagline } from '@/lib/about';

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
        <div style={{ flex: 1, display: 'flex', position: 'relative', padding: 72 }}>
          <div style={{ width: 588, display: 'flex', flexDirection: 'column' }}>
            <svg width="96" height="96" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="7" fill={C.surface} />
              <path d="M10 7 V18.5 Q10 23 14.5 23 H21.5" fill="none" stroke={C.accent} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="7" r="2.8" fill={C.accent} />
              <circle cx="24" cy="23" r="3.4" fill={C.marker} />
            </svg>
            <div style={{ marginTop: 48, fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em', color: C.text }}>{tagline}</div>
            <div style={{ marginTop: 24, fontSize: 28, fontWeight: 400, lineHeight: 1.4, color: C.textMuted }}>Lucas Guo · Computer Science, University of Waterloo</div>
          </div>

          <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="384" height="312" viewBox="0 0 640 520">
              <g fill="none" stroke={C.borderSubtle} strokeWidth={12} strokeLinecap="round">
                <path d="M40 80 H620 M40 190 H620 M40 300 H620 M40 410 H620" />
                <path d="M120 30 V500 M250 30 V500 M380 30 V500 M510 30 V500" />
                <path d="M30 500 L330 30" />
              </g>
              <path d="M120 410 V300 H380 V190 H510 V80" fill="none" stroke={C.accent} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="120" cy="410" r="7" fill={C.accent} />
              <circle cx="510" cy="80" r="9" fill={C.marker} />
            </svg>
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
