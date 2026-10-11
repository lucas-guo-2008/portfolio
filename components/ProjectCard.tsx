import Link from "next/link";
import type { Project } from "@/lib/projects";
import Card from "./Card";
import StatusBadge from "./StatusBadge";
import PhaseList from "./PhaseList";
import StackList from "./StackList";

type ProjectCardProps = {
    project: Project;
}

const sectionLabel = "font-mono text-label uppercase tracking-label text-text-muted";

export default function ProjectCard({project}:ProjectCardProps) {
    const { slug, title, status, summary, phases, stack } = project;
    return (
        <Card roomy interactive>
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-heading font-display font-bold">
                        <Link
                            href={`/projects/${slug}`}
                            className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                        >
                            {title}
                        </Link>
                    </h2>
                    <StatusBadge status={status} />
                </div>

                <section>
                    <h3 className={sectionLabel}>Goal</h3>
                    <p className="mt-1.5 text-body-sm text-text-secondary">{summary}</p>
                </section>

                {phases.length > 0 && (
                    <section>
                        <h3 className={`${sectionLabel} mb-2`}>Approach &amp; Roadmap</h3>
                        <PhaseList phases={phases} />
                    </section>
                )}

                {stack.length > 0 && (
                    <section>
                        <h3 className={`${sectionLabel} mb-2`}>Tech Stack &amp; Implementation</h3>
                        <StackList stack={stack} />
                    </section>
                )}

                <div className="pt-3.5 border-t border-border-subtle font-mono text-label uppercase tracking-label text-accent">
                    View project →
                </div>
            </div>
        </Card>
    );
}
