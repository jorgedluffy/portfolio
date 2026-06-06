'use client';

import type { JSX, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: ReactNode }): JSX.Element {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
    );
}
