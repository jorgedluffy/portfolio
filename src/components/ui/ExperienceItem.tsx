import type { JSX } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import type { Experience } from '../../types/experience';
import Badge from './Badge';

/**
 * Single entry in the experience timeline.
 *
 * @param company    - Company name.
 * @param period     - Date range (e.g. "Feb 2026 – Jun 2026").
 * @param role       - Job title.
 * @param location   - Optional work modality or location.
 * @param highlights - Optional list of key achievements.
 * @param stack      - Optional list of technologies used.
 */
export default function ExperienceItem({
    company,
    period,
    role,
    location,
    highlights,
    stack,
}: Experience): JSX.Element {
    return (
        <div className="pl-7 relative">
            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-accent border-2 border-background" />

            <div className="font-mono text-foreground text-sm mb-1">{role}</div>

            <div className="flex flex-wrap items-baseline gap-2 mb-3">
                <span className="text-sm md:text-base font-medium text-accent tracking-tight">
                    {company}
                </span>
                <span className="font-mono text-xs text-muted/60">{period}</span>
                {location && <Badge className="ml-auto">{location}</Badge>}
            </div>

            {highlights && (
                <ul className="flex flex-col gap-1.5 mb-3">
                    {highlights.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-xs md:text-sm text-muted leading-relaxed text-justify"
                        >
                            <FiArrowRight className="text-accent shrink-0 mt-0.5 w-3 h-3" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {stack && stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                    {stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                </div>
            )}
        </div>
    );
}
