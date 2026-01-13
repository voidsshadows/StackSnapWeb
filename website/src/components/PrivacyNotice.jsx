import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyNotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consented = localStorage.getItem('stacksnap-cookie-consent');
        if (!consented) {
            setIsVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('stacksnap-cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 p-6 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col gap-4"
                >
                    <div className="space-y-2">
                        <h4 className="font-semibold text-white">We use cookies 🍪</h4>
                        <p className="text-sm text-zinc-400">
                            StackSnap includes anonymized telemetry via PostHog to help us understand usage patterns and catch bugs.
                            We never track backup keys or sensitive data.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={accept}
                            className="flex-1 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
                        >
                            Accept
                        </button>
                        <button
                            onClick={accept}
                            className="flex-1 px-4 py-2 bg-transparent text-white border border-white/20 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
