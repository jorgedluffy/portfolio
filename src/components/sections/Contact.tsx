import type { JSX } from 'react';
import { MdEmail, MdSend } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Badge from '../ui/Badge';

export default function Contact(): JSX.Element {
    return (
        <section id="contact" className="py-16 md:py-24 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="flex items-baseline justify-between gap-3 mb-10">
                    <h2 className="text-xl text-foreground">Contacto</h2>
                    <Badge colorScheme="accent" showDot dotAnimated>
                        Café en mano, listo para picar código y charlar sobre nuevos retos.
                    </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <p className="text-sm leading-relaxed text-muted mb-7">
                            Estoy buscando activamente nuevas oportunidades. Si crees que puedo
                            encajar en tu equipo, me encantaría saberlo.
                        </p>
                        <p className="text-sm leading-relaxed text-muted mb-7">
                            Puedes escribirme por correo, LinkedIn o directamente desde este
                            formulario.
                        </p>

                        <div className="flex flex-col gap-2.5 mb-5">
                            <a
                                href="mailto:lopilo64@gmail.com"
                                className="flex items-center gap-2.5"
                            >
                                <span className="w-8 h-8 rounded-lg border border-border-strong bg-surface flex items-center justify-center shrink-0">
                                    <MdEmail className="w-3.5 h-3.5" />
                                </span>
                                <span className="text-xs md:text-sm text-muted">
                                    lopilo64@gmail.com
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jorge-sanchez-gon"
                                className="flex items-center gap-2.5"
                            >
                                <span className="w-8 h-8 rounded-lg border border-border-strong bg-surface flex items-center justify-center shrink-0">
                                    <FaLinkedin className="w-3.5 h-3.5" />
                                </span>
                                <span className="text-xs md:text-sm text-muted">
                                    jorge-sanchez-gon
                                </span>
                            </a>

                            <a
                                href="https://github.com/jorgedluffy"
                                className="flex items-center gap-2.5"
                            >
                                <span className="w-8 h-8 rounded-lg border border-border-strong bg-surface flex items-center justify-center shrink-0">
                                    <FaGithub className="w-3.5 h-3.5" />
                                </span>
                                <span className="text-xs md:text-sm text-muted">jorgedluffy</span>
                            </a>
                        </div>
                    </div>

                    <form className="flex flex-col gap-2 p-2 rounded-lg border border-border-strong bg-surface">
                        <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-border bg-background">
                            <label className="text-xs text-muted">Nombre</label>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                className="p-1 text-sm text-foreground placeholder:text-muted/40 w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-border bg-background">
                            <label className="text-xs text-muted">Email</label>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="p-1 text-sm text-foreground placeholder:text-muted/40 w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-border bg-background">
                            <label className="text-xs text-muted">Mensaje</label>
                            <textarea
                                rows={4}
                                placeholder="Cuéntame sobre la oportunidad..."
                                className="p-1 text-sm text-foreground placeholder:text-muted/40 resize-none w-full"
                            />
                        </div>

                        <div className="px-2 py-1 flex justify-end">
                            <button
                                type="submit"
                                className="font-mono text-xs px-5 py-2.5 rounded-lg bg-accent text-surface transition-colors hover:bg-accent/80 cursor-pointer"
                            >
                                Enviar mensaje <MdSend className="inline ml-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
