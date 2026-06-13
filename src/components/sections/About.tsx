import type { JSX } from 'react';
import Image from 'next/image';

const paragraphs = [
    'Desarrollador Full Stack Junior con doble titulación en DAM y DAW.',
    'Me reconvertí al sector tech en 2022 tras más de una década trabajando en entornos de alta demanda en Madrid y Londres.',
    'Desde entonces he trabajado en proyectos reales en Indra y NTT Data — migraciones Angular v16 a v21, más de 2.000 tests unitarios con JUnit y Mockito en producción — y desarrollado proyectos propios con React, Node.js, MongoDB y Docker.',
    'Busco un equipo donde pueda contribuir desde el primer día en frontend y backend, y donde la actitud cuente tanto como la experiencia.',
];

const tags = [
    'remoto',
    'híbrido',
    'presencial',
    'inglés B1+',
    'coche propio',
    'abierto a movilidad',
];

export default function About(): JSX.Element {
    return (
        <section id="about" className="py-16 md:py-24 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="flex items-baseline gap-3 mb-10">
                    <h2 className="text-xl text-foreground">Sobre mí</h2>
                </div>

                <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-[1fr_auto] md:items-start">
                    <div>
                        <div className="space-y-3.5 mb-5">
                            {paragraphs.map((p, i) => (
                                <p key={i} className="leading-relaxed text-muted text-justify">
                                    {p}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-between gap-1.5">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono text-xs px-2.5 py-1 rounded-full border border-border-strong text-muted tracking-wide"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/avatar.jpg"
                            alt="Jorge Sánchez González"
                            width={100}
                            height={100}
                            className="rounded-full border border-border-strong shrink-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
