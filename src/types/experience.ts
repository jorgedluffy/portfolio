import type { ReactNode } from 'react';

export type Experience = {
    company: string;
    period: string;
    role: string;
    location?: string;
    highlights?: ReactNode[];
    description?: string;
    stack?: string[];
};
