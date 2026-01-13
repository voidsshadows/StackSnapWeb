import React from 'react';
import { motion } from 'framer-motion';
import { Database, Lock, Activity, CheckCircle } from 'lucide-react';

const features = [
    {
        icon: Database,
        title: "Synchronized Orchestration",
        description: "We coordinate database-native exports (Postgres, MariaDB, Redis) with filesystem snapshots to ensure consistent point-in-time recovery.",
    },
    {
        icon: Lock,
        title: "Zero-Trust Encryption",
        description: "Your data is encrypted locally with AES-256-GCM. Your storage provider (S3/Minio) never sees a single byte of raw data.",
    },
    {
        icon: Activity,
        title: "Streamed Visibility",
        description: "Real-time log streaming via SSE gives you absolute certainty during long-running operations.",
    },
    {
        icon: CheckCircle,
        title: "Verification First",
        description: "Every backup can be automatically verified. If it can't be decompressed or decrypted, it's not a backup—it's just a file.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 bg-zinc-950">
            <div className="max-w-7xl mx-auto text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built for Reliability.</h2>
                <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                    No more "hoping" your cron job ran correctly. StackSnap handles the orchestration so you can focus on your code.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-white/10 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <feature.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
