import type { JSX } from 'react';

interface BadgeProps {
    text: string;
}

/**
 * Small status pill with a blinking dot.
 *
 * @param text - Text displayed inside the pill.
 */
export default function Badge({ text }: BadgeProps): JSX.Element {
    return (
        <div className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-accent bg-accent/10 border border-accent/25 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink shrink-0" />
            {text}
        </div>
    );
}
