import type { JSX } from 'react';
import Badge from '../ui/Badge';
import type { SkillCategory } from '../../types/skills';

const categories: SkillCategory[] = [
    { name: 'frontend', skills: ['Angular', 'React', 'TypeScript', 'JavaScript'] },
    { name: 'backend', skills: ['Node.js', 'Express', 'Java', 'Spring'] },
    { name: 'bases de datos', skills: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL'] },
    { name: 'devops y herramientas', skills: ['Docker', 'Git', 'Postman'] },
    { name: 'testing', skills: ['JUnit', 'Mockito'] },
    { name: 'también conozco', skills: ['C#', 'Python', 'PHP', 'Appian'], muted: true },
];

export default function Skills(): JSX.Element {
    return (
        <section id="skills" className="py-16 md:py-24 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="flex items-baseline gap-3 mb-10">
                    <h2 className="text-xl text-foreground">Stack tecnológico</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-x-12 lg:pl-10">
                    {categories.map((category) => (
                        <div key={category.name}>
                            <p className="font-mono text-xs text-foreground uppercase tracking-widest mb-2.5">
                                {category.name}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        colorScheme={category.muted ? 'muted' : 'foreground'}
                                        showDot={!category.muted}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
