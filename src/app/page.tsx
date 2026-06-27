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
