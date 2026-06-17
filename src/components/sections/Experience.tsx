import type { JSX } from 'react';
import type { Experience } from '../../types/experience';
import ExperienceItem from '../ui/ExperienceItem';

const experiences: Experience[] = [
    {
        company: 'Indra',
        period: 'Feb 2026 – Jun 2026',
        role: 'Desarrollador fullstack en prácticas',
        location: 'Remoto',
        highlights: [
            <>
                Migración de{' '}
                <span className="font-black bg-accent/15 px-0.5 rounded-sm">
                    3 aplicaciones de Angular v16 a v21
                </span>{' '}
                en producción
            </>,
            <>
                Implementación de{' '}
                <span className="font-black bg-accent/15 px-0.5 rounded-sm">
                    más de 2.000 tests unitarios con JUnit y Mockito
                </span>{' '}
                para cubrir la cobertura SonarQube de más de 10 proyectos Java en producción.
            </>,
            <>
                Control de versiones con{' '}
                <span className="font-black bg-accent/15 px-0.5 rounded-sm">Git y Bitbucket</span>
            </>,
        ],
        stack: ['Angular', 'Java', 'JUnit', 'Mockito', 'SonarQube', 'Bitbucket'],
    },
    {
        company: 'NTT Data',
        period: 'Mar 2024 – May 2024',
        role: 'Desarrollador Appian en prácticas',
        location: 'Remoto',
        highlights: [
            <>
                Prácticas en desarrollo{' '}
                <span className="font-black bg-accent/15 px-0.5 rounded-sm">
                    low-code con Appian
                </span>
                , con participación en proyectos reales de automatización y gestión de datos
            </>,
            <>
                Creación y consumo de{' '}
                <span className="font-black bg-accent/15 px-0.5 rounded-sm">APIs RESTful</span> para
                operaciones CRUD
            </>,
            'Diseño de formularios interactivos y gráficos de datos',
            'Automatización de procesos de negocio con Process Model',
        ],
        stack: ['Appian', 'REST APIs', 'Scrum', 'Kanban'],
    },
    {
        company: 'Experiencia multisector',
        period: '2009 – 2022',
        role: 'Hostelería · Construcción · Comercio',
        location: 'Alicante, Madrid y Londres',
        highlights: [
            <>
                Reconversión profesional voluntaria al sector tecnológico en 2022, tras 13 años de
                experiencia en entornos de alta demanda en Madrid y Londres. Competencias
                transferibles:{' '}
                <span className="font-black bg-accent/15 px-0.5 rounded-sm">
                    trabajo bajo presión, atención al cliente, inglés
                </span>{' '}
                (4 años en Londres).
            </>,
        ],
    },
];

export default function Experience(): JSX.Element {
    return (
        <section id="experience" className="py-16 md:py-24 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="flex items-baseline gap-3 mb-10">
                    <h2 className="text-xl text-foreground">Experiencia</h2>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-8">
                <div className="relative">
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

                    <div className="space-y-10">
                        {experiences.map((exp) => (
                            <ExperienceItem key={exp.company} {...exp} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
