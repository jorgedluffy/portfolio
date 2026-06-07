import type { JSX } from 'react';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import Footer from '../components/ui/Footer';
import { FiTool } from 'react-icons/fi';

export default function Home(): JSX.Element {
    return (
        <>
            {/* TODO: Remove this banner when the website is ready */}
            <div
                className="w-full border-b-2 border-red-500/50 bg-red-500/10 py-3.5 text-center font-mono text-sm"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(45deg, transparent 0px, transparent 14px, rgba(239,68,68,0.07) 14px, rgba(239,68,68,0.07) 28px)',
                }}
            >
                <span className="inline-flex items-center gap-3">
                    <FiTool className="h-4 w-4 shrink-0 text-red-400" />
                    <span className="font-semibold text-red-400 ">En construcción</span>
                    <FiTool className="h-4 w-4 shrink-0 text-red-400" />
                </span>
            </div>

            <Navbar />
            <main className="flex-1">
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
