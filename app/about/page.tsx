import Card from '@/components/Card';
import { bio, tagline } from '@/lib/about';

export const metadata = {
  title: "About me"
}

export default function AboutPage() {
  return (
    <Card header="about">
      <div className="flex flex-col md:flex-row gap-5 md:gap-14 py-2 md:px-3 md:py-6">
        <div className="flex flex-col gap-2 md:gap-3 md:w-95 md:shrink-0">
          <h1 className="text-title md:text-display font-display font-bold">Lucas Guo</h1>
          <p className="text-heading font-display font-medium text-text-secondary">
            {tagline}
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-reading min-w-0 text-body text-text-secondary border-t md:border-t-0 md:border-l border-border-subtle pt-5 md:pt-0 md:pl-10">
          {bio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </Card>
  );
}
