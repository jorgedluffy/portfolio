import type { JSX } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../../types/projects';
import Badge from './Badge';

export default function ProjectCard({
    title,
    description,
    stack,
    githubUrl,
    demoUrl,
    imageUrl,
    challenge,
}: Project): JSX.Element {
    return (
        <div className="border border-border rounded-xl bg-surface overflow-hidden hover:border-border-strong transition-colors">
            <div className="relative h-36 overflow-hidden border-b border-border">
                <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>

            <div className="p-4 sm:p-5">
                <h3 className="text-sm font-medium tracking-tight text-foreground mb-1">{title}</h3>
                <p className="text-xs text-muted leading-snug mb-3 whitespace-pre-line text-justify">
                    {description}
                </p>

                <p className="font-mono text-xs text-muted/70 px-2.5 py-2 bg-background rounded-md border-l-2 border-accent mb-3 text-justify">
                    {challenge}
                </p>

                <div className="flex flex-wrap justify-between gap-1.5 mb-4">
                    {stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                </div>

                <div className="flex gap-2">
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-border-strong rounded-md text-muted hover:border-accent hover:text-accent transition-colors"
                    >
                        <FiExternalLink className="w-3 h-3" />
                        live demo
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-border-strong rounded-md text-muted hover:border-accent hover:text-accent transition-colors"
                    >
                        <FiGithub className="w-3 h-3" />
                        repo
                    </a>
                </div>
            </div>
        </div>
    );
}
