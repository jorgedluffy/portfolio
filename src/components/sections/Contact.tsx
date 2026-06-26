'use client';

import { useRef, useState } from 'react';
import type { JSX } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail, MdSend } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Badge from '../ui/Badge';

export default function Contact(): JSX.Element {
    const formRef = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(e: { preventDefault(): void }) {
        e.preventDefault();
        if (!formRef.current) return;

        setSending(true);
        setSuccess(false);
        setError(false);

        try {
            // Send email to the owner
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );
            setSuccess(true);

            // If the email is sent successfully, try to send a reply email to the user
            // but if reply email fails, we don't show an error to the user
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_REPLY_ID!,
                    formRef.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
                )
                .catch(() => {});
            formRef.current.reset();
        } catch {
            setError(true);
        } finally {
            setSending(false);
        }
    }

    return (
        <section id="contact" className="py-16 md:py-24 border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col gap-2 mb-5 md:mb-10 md:flex-row md:items-baseline md:justify-between">
                    <h2 className="text-xl text-foreground mb-2 md:mb-0">Contacto</h2>
                    <Badge colorScheme="accent" showDot dotAnimated>
                        Café en mano, listo para picar código y charlar sobre nuevos retos.
                    </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 items-start">
                    <div>
                        <p className="text-sm leading-relaxed text-justify text-muted mb-7">
                            Estoy buscando activamente nuevas oportunidades. Si crees que puedo
                            encajar en tu equipo, me encantaría saberlo.
                        </p>
                        <p className="text-sm leading-relaxed text-justify text-muted mb-7">
                            Puedes escribirme por correo, LinkedIn o directamente desde este
                            formulario.
                        </p>

                        <div className="flex flex-col gap-2.5 md:mb-5">
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

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-2 p-2 rounded-lg border border-border-strong bg-surface"
                    >
                        <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-border bg-background">
                            <label className="text-xs text-muted">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                required
                                className="p-1 text-sm text-foreground placeholder:text-muted/40 w-full bg-transparent outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-border bg-background">
                            <label className="text-xs text-muted">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="tu@email.com"
                                required
                                className="p-1 text-sm text-foreground placeholder:text-muted/40 w-full bg-transparent outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-border bg-background">
                            <label className="text-xs text-muted">Mensaje</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Cuéntame sobre la oportunidad..."
                                required
                                className="p-1 text-sm text-foreground placeholder:text-muted/40 resize-none w-full bg-transparent outline-none"
                            />
                        </div>

                        <div className="px-2 py-1 flex flex-col gap-2 md:flex-row md:items-center md:justify-end md:gap-3">
                            {success && (
                                <span className="text-xs text-accent my-2 md:my-0 w-full md:w-auto">
                                    Mensaje enviado, ¡gracias!
                                </span>
                            )}
                            {error && (
                                <span className="text-xs text-red-500 my-2 md:my-0 w-full md:w-auto">
                                    Algo salió mal. Inténtalo de nuevo.
                                </span>
                            )}
                            <button
                                type="submit"
                                disabled={sending}
                                className="font-mono text-xs px-5 py-2.5 rounded-lg bg-accent text-surface transition-colors hover:bg-accent/80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                            >
                                {sending ? (
                                    'Enviando...'
                                ) : (
                                    <>
                                        Enviar mensaje <MdSend className="inline ml-1" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
