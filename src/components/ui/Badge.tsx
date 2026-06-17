import type { JSX } from 'react';
import type { ColorScheme } from '../../types/badge';

interface BadgeProps {
    children: React.ReactNode;
    colorScheme?: ColorScheme;
    showDot?: boolean;
    dotAnimated?: boolean;
    className?: string;
}

/**
 * Pill label. Muted by default.
 *
 * @param colorScheme - Color scheme: 'accent', 'primary' or 'muted' (default).
 * @param showDot     - Shows a dot (accent color).
 * @param dotAnimated  - Makes the dot blink.
 */
export default function Badge({
    children,
    colorScheme = 'muted',
    showDot = false,
    dotAnimated = false,
    className = '',
}: BadgeProps): JSX.Element {
    const colorClass =
        colorScheme === 'accent'
            ? 'text-accent bg-accent/10 border-accent/25 tracking-widest'
            : colorScheme === 'foreground'
              ? 'text-foreground bg-surface'
              : 'text-muted';

    return (
        <span
            className={`inline-flex items-center gap-1.5 font-mono rounded-full border text-xs px-3 py-1 border-border-strong ${colorClass} ${className}`}
        >
            {showDot && (
                <span
                    className={`w-1.5 h-1.5 rounded-full bg-accent shrink-0 ${dotAnimated ? 'animate-blink' : 'opacity-60'}`}
                />
            )}
            {children}
        </span>
    );
}
