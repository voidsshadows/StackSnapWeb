import React from 'react';

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/10 bg-black text-zinc-500 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <p>&copy; {new Date().getFullYear()} StackSnap. All rights reserved.</p>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="https://github.com/Nesbesss/StackSnap" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
