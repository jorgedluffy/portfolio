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
        <div className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink shrink-0" />
            {text}
        </div>
    );
}
