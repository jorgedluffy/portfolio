'use client';

import type { JSX } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export function DarkModeToggle(): JSX.Element {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="relative flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Toggle theme"
        >
            <BsSun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <BsMoon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </button>
    );
}
