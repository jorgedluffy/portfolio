import type { JSX } from 'react';

interface ButtonProps {
    color: 'primary' | 'secondary';
    children: React.ReactNode;
    href?: string;
    download?: string | boolean;
    onClick?: React.MouseEventHandler;
}

const base = 'inline-flex items-center gap-1.5 font-mono px-5 py-2.5 rounded-lg tracking-wide';

const colors = {
    primary: 'text-black bg-accent hover:opacity-90 active:scale-95 transition-opacity',
    secondary:
        'border border-border-strong text-muted hover:border-muted hover:text-foreground transition-colors',
};

/**
 * Polymorphic button: renders `<a>` when `href` is provided, `<button>` when `onClick` is provided.
 *
 * @param color    - `primary` accent background (green), `secondary` borderless dark outline.
 * @param children - Button content (text, icons…).
 * @param href     - When provided, the component acts as a navigation link.
 * @param download - When provided alongside `href`, triggers a file download. Pass a string to set the suggested filename.
 * @param onClick  - When provided (and no href), the component acts as an action button.
 */
export default function Button({
    color,
    children,
    href,
    download,
    onClick,
}: ButtonProps): JSX.Element {
    const className = `${base} ${colors[color]}`;

    if (href !== undefined) {
        return (
            <a href={href} download={download} onClick={onClick} className={className}>
                {children}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
