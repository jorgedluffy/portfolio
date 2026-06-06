'use client';

import { useState, type JSX } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { DarkModeToggle } from './DarkModeToggle';
import type { Link } from '@/types/navigation';

const links: Link[] = [
    { label: 'sobre mí', href: '#about' },
    { label: 'proyectos', href: '#projects' },
    { label: 'experiencia', href: '#experience' },
    { label: 'skills', href: '#skills' },
    { label: 'formación', href: '#education' },
    { label: 'contacto', href: '#contact' },
];

export default function Navbar(): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky border-b border-border backdrop-blur-md top-0 z-50 bg-background/80">
            <nav className="relative mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-8 ">
                <a href="#hero" onClick={() => setOpen(false)} className="font-mono tracking-wide">
                    <span className="text-accent">{'//'}</span> Jorge Sánchez González
                </a>

                <ul
                    className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-14 flex-col border-b border-border bg-background px-8 md:static md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:px-0`}
                >
                    {links.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block py-3 transition-colors hover:text-foreground md:py-0"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <DarkModeToggle />

                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-border-strong transition-colors hover:border-accent hover:text-accent md:hidden"
                        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={open}
                    >
                        {open ? <BsX className="h-5 w-5" /> : <BsList className="h-5 w-5" />}
                    </button>
                </div>
            </nav>
        </header>
    );
}
