import type { Phase } from "@/lib/projects";
import Sign from "./Sign";

type RoadmapProps = {
    phases: Phase[];
}

// The road is the <ol>'s ::before (the grey band) and ::after (the dashed centre line, md+ only).
// Below md it runs down the left; md+ it runs across, one equal column per phase.
const road = [
    'relative flex flex-col gap-5.5 pl-10',
    'before:absolute before:left-1 before:inset-y-0 before:w-3.5 before:rounded-full before:bg-border-subtle',
    'md:grid md:grid-flow-col md:auto-cols-fr md:gap-5 md:pl-0',
    'md:before:inset-x-0 md:before:top-1.5 md:before:w-auto md:before:h-3.5',
    'md:after:absolute md:after:inset-x-3 md:after:top-3 md:after:border-t-2 md:after:border-dashed md:after:border-surface',
].join(' ');

export default function Roadmap({phases}:RoadmapProps) {
    if (phases.length === 0) return null;
    return (
        <section className="flex flex-col gap-5.5">
            <h2 className="text-heading md:text-title font-display font-bold">Roadmap</h2>
            <ol className={road}>
                {phases.map((phase, i) => {
                    const last = i === phases.length - 1;
                    return (
                        <li key={phase.comment} className="relative z-10 flex flex-col gap-2">
                            {/* Below md the sign gets its own line, pulled left onto the road, so it never covers the title */}
                            <Sign tone={last ? 'finish' : 'marker'} className="self-start -ml-10 md:ml-0">
                                {last ? 'FINISH' : `KM ${i + 1}`}
                            </Sign>
                            <p className="font-display font-bold text-body">{phase.comment}</p>
                            <p className="text-body-sm text-text-secondary">{phase.description}</p>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
