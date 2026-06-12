import type { JSX } from 'react';
import type { Project } from '../../types/projects';
import ProjectCard from '../ui/ProjectCard';

const projects: Project[] = [
    {
        title: 'OneCard',
        description:
            'Juego de cartas online para dos jugadores inspirado en One Piece. \nElige tripulación, construye tu mazo con personajes, cartas de campo y mágicas, y reduce los puntos de vida del rival a cero.',
        stack: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'Socket.IO',
            'MongoDB',
            'Mongoose',
            'Docker',
        ],
        githubUrl: 'https://github.com/jorgedluffy/OneCard',
        demoUrl: 'https://play-one-card.vercel.app/',
        imageUrl: '/projects/onecard.png',
        challenge: 'Lógica de partida en tiempo real con WebSockets',
    },
    {
        title: 'HomeBudget',
        description:
            'Gestor de finanzas personales autoalojado: tus datos en tu servidor, sin terceros. Dashboards, gráficos, importación CSV e internacionalización de idioma (ES/EN) y moneda (EUR/USD/GBP).',
        stack: [
            'Angular',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'MongoDB',
            'Mongoose',
            'Docker',
        ],
        githubUrl: 'https://github.com/jorgedluffy/proyecto-intermodular',
        demoUrl: 'https://homebudget-js.vercel.app/',
        imageUrl: '/projects/homebudget.png',
        challenge: 'Internacionalización completa e importación/exportación CSV',
    },
];

export default function Projects(): JSX.Element {
    return (
        <section id="projects" className="py-16 md:py-24 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="mb-10">
                    <h2 className="text-xl text-foreground">Proyectos</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
