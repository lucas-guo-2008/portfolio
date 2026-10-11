import Card from '@/components/Card';

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
            CS major and Strava monkey
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-reading min-w-0 text-body text-text-secondary border-t md:border-t-0 md:border-l border-border-subtle pt-5 md:pt-0 md:pl-10">
          <p>
            {"I'm a first-year CS major at the University of Waterloo! I'm interested in AI/ML, CV, Economics, and Philosophy. I'm currently working on a portfolio project in React and TypeScript, a Clash of Clans bot using Python and CV, as well as a side project in AI/ML."}
          </p>
          <p>
            {"In my free time, I like going to the gym, running, hiking, snowboarding, and hanging out with friends. I also like collecting Pokemon cards, as well as watching anime and YouTube."}
          </p>
        </div>
      </div>
    </Card>
  );
}
