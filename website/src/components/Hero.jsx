import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black pointer-events-none" />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50"
                >
                    Precision backup for <br /> Docker Compose.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Solves the "trust gap" in self-hosting. Verifiable, encrypted, and automated recovery that just works.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#wishlist"
                        className="px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
                    >
                        Get Early Access
                    </a>
                    <a
                        href="#features"
                        className="px-8 py-4 text-lg font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                        Learn more <span>↓</span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Abstract Shape/Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
