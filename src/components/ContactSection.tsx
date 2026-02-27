import { useState } from 'react'; // Note: Removed 'React' to avoid Vercel build errors
import { motion, AnimatePresence } from 'framer-motion';

const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shruti-purusothaman' },
    { name: 'GitHub', href: 'https://github.com/Shrutipurusothaman' },
    { name: 'Medium', href: 'https://medium.com/@shrutikishore04' },
];

const ContactSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xgolqoyk", {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form");
        }
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-10 bg-[#111827] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full"></div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 tracking-tight">
                    LET’S BUILD SOMETHING <span className="text-brand-blue italic">GREAT</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left mt-12">
                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-center md:text-left"
                    >
                        <div>
                            <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest text-brand-blue">
                                Email Me
                            </h3>
                            <a
                                href="mailto:shrutikishore04@gmail.com"
                                className="text-xl md:text-2xl text-white hover:text-brand-blue transition-colors break-words block md:inline"
                            >
                                shrutikishore04@gmail.com
                            </a>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-2 uppercase text-sm tracking-widest text-brand-blue">
                                Socials
                            </h3>
                            <div className="flex gap-6 justify-center md:justify-start">
                                {socials.map((platform) => (
                                    <a
                                        key={platform.name}
                                        href={platform.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-all underline underline-offset-4 decoration-brand-blue/30 hover:decoration-brand-blue"
                                    >
                                        {platform.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Container with Animation */}
                    <div className="relative min-h-[350px] flex items-center">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="w-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                                >
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input type="text" name="name" placeholder="Name" required className="w-full bg-gray-900 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-all" />
                                        <input type="email" name="email" placeholder="Email" required className="w-full bg-gray-900 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-all" />
                                        <textarea name="message" placeholder="Message" rows={4} required className="w-full bg-gray-900 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue outline-none transition-all"></textarea>
                                        <button type="submit" className="w-full bg-brand-blue text-gray-900 font-bold py-3 rounded-lg hover:bg-white transition-all uppercase tracking-widest cursor-pointer">
                                            Send Message
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full p-10 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 backdrop-blur-md text-center"
                                >
                                    <div className="text-4xl mb-4 text-brand-blue">✓</div>
                                    <h3 className="text-white font-heading text-2xl mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">Thanks for reaching out, Shruti. I'll get back to you shortly!</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-6 text-sm text-brand-blue underline cursor-pointer"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;