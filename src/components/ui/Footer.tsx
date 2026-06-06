import type { JSX } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import type { Link } from '@/types/navigation';

const footerLinks: Link[] = [
    { label: 'GitHub', href: 'https://github.com/jorgedluffy', icon: BsGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jorge-sanchez-gon/', icon: BsLinkedin },
];

export default function Footer(): JSX.Element {
    return (
        <footer className="border-t border-border px-8 py-5 font-mono text-xs text-muted">
            <div className="mx-auto flex max-w-3xl items-center justify-between">
                <span>Construido con Next.js · Desplegado en Vercel</span>
                <nav className="flex gap-4">
                    {footerLinks.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
                        >
                            {Icon && <Icon className="h-3.5 w-3.5" />}
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
