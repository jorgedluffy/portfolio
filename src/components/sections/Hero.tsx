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
        <section id="hero" className="py-16 md:py-24 border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight md:leading-none tracking-tight text-foreground mb-2 animate-fade-up [animation-delay:0.15s]">
                    Jorge Sánchez González
                </h1>

                <h2 className="mt-7 text-2xl sm:text-2xl md:text-4xl font-light leading-tight md:leading-none tracking-tight text-foreground animate-fade-up [animation-delay:0.2s]">
                    Full Stack <span className="text-accent italic">Junior Dev</span>
                </h2>

                <h3 className="mt-4 text-md sm:text-lg md:text-xl font-light leading-tight md:leading-none tracking-tight text-foreground animate-fade-up [animation-delay:0.2s]">
                    React · Angular · Node.js · Java
                </h3>

                <div className="mt-7 mb-7 animate-fade-up [animation-delay:0.1s]">
                    <Badge colorScheme="accent" showDot dotAnimated>
                        Alicante · disponibilidad inmediata
                    </Badge>
                </div>

                <p className="text-muted leading-relaxed mb-10 animate-fade-up [animation-delay:0.3s]">
                    Doble titulación DAM + DAW, experiencia real en Indra y NTT Data, y proyectos
                    propios desplegados en Vercel con Angular, React y Node.js.
                </p>

                <div className="mb-10 w-full animate-fade-up [animation-delay:0.4s]">
                    <HighlightBar highlights={highlights} />
                </div>

                <div className="flex flex-wrap gap-2.5 justify-center animate-fade-up [animation-delay:0.5s]">
                    <Button color="primary" href="#projects">
                        ver proyectos <FiArrowRight />
                    </Button>
                    <Button color="secondary" href="/cvJorge.pdf" download="cvJorge.pdf">
                        <FiDownload /> descargar CV
                    </Button>
                </div>
            </div>
        </section>
    );
}
