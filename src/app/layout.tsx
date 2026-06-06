import type { JSX } from 'react';
import { DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
    display: 'swap',
});

const dmMono = DM_Mono({
    weight: ['400', '500'],
    subsets: ['latin'],
    variable: '--font-dm-mono',
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): JSX.Element {
    return (
        <html
            lang="es"
            suppressHydrationWarning
            className={`scroll-smooth ${dmSans.variable} ${dmMono.variable}`}
        >
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
