import type { JSX } from 'react';

interface Highlight {
    value: string;
    labelTop: string;
    labelBottom: string;
}

interface HighlightBarProps {
    highlights: Highlight[];
}

/**
 * Row of key achievements, each showing a value and a two-line label.
 *
 * @param highlights - List of items to display. Each item has a `value`, `labelTop` and `labelBottom`.
 */
export default function HighlightBar({ highlights }: HighlightBarProps): JSX.Element {
    return (
        <div className="flex flex-col sm:flex-row border border-border rounded-xl overflow-hidden divide-y divide-border sm:divide-y-0 sm:divide-x">
            {highlights.map((highlight, index) => (
                <div
                    key={index}
                    className="px-5 sm:px-7 py-4 flex flex-col gap-0.5 flex-1 bg-surface"
                >
                    <span className="text-3xl text-accent leading-none tracking-tight tabular-nums">
                        {highlight.value}
                    </span>
                    <span className="font-mono text-muted/70 leading-snug flex flex-col">
                        <span>{highlight.labelTop}</span>
                        <span>{highlight.labelBottom}</span>
                    </span>
                </div>
            ))}
        </div>
    );
}
