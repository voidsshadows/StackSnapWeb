import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Github, Play } from 'lucide-react';

export default function Navbar() {
    const DOCS_URL = import.meta.env.VITE_DOCS_URL || (import.meta.env.DEV
        ? "http://localhost:8000"
        : "https://nesbesss.github.io/StackSnap/");

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-md"
        >
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">S</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">StackSnap</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="https://github.com/Nesbesss/StackSnap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href={DOCS_URL} className="hover:text-white transition-colors">Docs</a>
            </div>

            <div className="flex items-center gap-4">
                <a
                    href="https://discord.gg/JpKAr3BM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
                >
                    Join Beta
                </a>
            </div>
        </motion.nav>
    );
}
