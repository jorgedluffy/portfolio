import type { JSX } from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import HighlightBar from '../ui/HighlightBar';

const highlights = [
    { value: '3', labelTop: 'Proyectos propios', labelBottom: 'desplegados' },
    { value: '3', labelTop: 'apps migradas', labelBottom: 'Angular v16→v21' },
    { value: '+2k', labelTop: 'tests unitarios', labelBottom: 'JUnit + Mockito' },
];

export default function Hero(): JSX.Element {
    return (
        <section id="hero" className="py-24 border-b border-border">
            <div className="max-w-4xl mx-auto px-8 flex flex-col items-center text-center">
                <h1 className="text-7xl font-light leading-none tracking-tight text-foreground mb-2 animate-fade-up [animation-delay:0.15s]">
                    Jorge Sánchez González
                </h1>

                <div className="mb-7 animate-fade-up [animation-delay:0.1s]">
                    <Badge text="Alicante · disponibilidad inmediata" />
                </div>

                <h2 className="mt-7 mb-7 text-5xl md:text-6xl font-light leading-none tracking-tight text-foreground  animate-fade-up [animation-delay:0.2s]">
                    <span className="block">Full Stack</span>
                    <span className="block text-accent italic">Junior Dev</span>
                </h2>

                <p className="text-muted leading-relaxed mb-10 animate-fade-up [animation-delay:0.3s]">
                    Doble titulación DAM + DAW, experiencia real en Indra y NTT Data, y proyectos
                    propios desplegados con React, Node.js y Docker.
                </p>

                <div className="mb-10 animate-fade-up [animation-delay:0.4s]">
                    <HighlightBar highlights={highlights} />
                </div>

                <div className="flex gap-2.5 animate-fade-up [animation-delay:0.5s]">
                    <Button color="primary" href="#projects">
                        ver proyectos <FiArrowRight />
                    </Button>
                    <Button color="secondary" href="/">
                        <FiDownload /> descargar CV
                    </Button>
                </div>
            </div>
        </section>
    );
}
