import type { JSX } from 'react';

interface BadgeProps {
    children: React.ReactNode;
    isAccent?: boolean;
    showDot?: boolean;
    className?: string;
}

/**
 * Pill label. Muted by default;
 *
 * @param isAccent - Switches to accent color scheme.
 * @param showDot  - Shows a blinking dot (accent color).
 */
export default function Badge({
    children,
    isAccent = false,
    showDot = false,
    className = '',
}: BadgeProps): JSX.Element {
    return (
        <span
            className={`inline-flex items-center gap-1.5 font-mono rounded-full border text-xs ${
                isAccent
                    ? 'text-accent bg-accent/10 border-accent/25 tracking-widest px-3 py-1'
                    : 'text-muted border-border-strong px-2 py-0.5'
            } ${className}`}
        >
            {showDot && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink shrink-0" />
            )}
            {children}
        </span>
    );
}
