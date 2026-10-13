type BibProps = {
    number: string;
    event: string;
    category: string;
    className?: string;
}

const pins = ['top-2.5 left-2.5', 'top-2.5 right-2.5', 'bottom-2.5 left-2.5', 'bottom-2.5 right-2.5'];

export default function Bib({number, event, category, className = ''}:BibProps) {
    return (
        <div className={`relative w-80 max-w-full bg-surface border border-border rounded-md shadow-bib overflow-hidden ${className}`}>
            {pins.map(pin => (
                <span key={pin} aria-hidden="true" className={`absolute size-2.25 rounded-full bg-page border border-text-faint ${pin}`} />
            ))}
            <p className="bg-marker text-on-marker font-mono text-label font-bold tracking-label uppercase text-center py-2 px-6">{event}</p>
            <p className="text-center font-display font-bold text-bib tabular-nums pt-3.5 pb-2">{number}</p>
            <h1 className="text-center font-display font-bold text-heading uppercase tracking-label">Lucas Guo</h1>
            <p className="text-center font-mono text-label uppercase tracking-label text-text-muted pt-1.5 pb-5.5">{category}</p>
        </div>
    );
}
