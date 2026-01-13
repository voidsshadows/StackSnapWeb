import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Does this scale to 100GB+ volumes?",
        answer: "Yes. We stream the archive directly to the storage provider where possible, avoiding massive memory buffers. However, your local disk needs enough temp space for the initial database dump file before encryption."
    },
    {
        question: "What happens if my S3 credentials expire mid-backup?",
        answer: "The operation fails gracefully. StackSnap detects the network/auth error, broadcasts a failure to the UI, and cleans up the local staging artifacts. We don't leave \"ghost files\" on your disk."
    },
    {
        question: "How do you handle 'Snapshot Isolation' during a hot dump?",
        answer: "We don't just 'copy files'. For Postgres, we use pg_dump --single-transaction, which forces the database to provide a snapshot-isolated view of the data. For volumes, we use an 'Atomic Copy' pattern. While it's not a block-level filesystem snapshot (like ZFS/LVM), it minimizes the window of inconsistency by pausing the application runtime (if Safe Mode is enabled) during the archive phase."
    },
    {
        question: "Go is garbage-collected. Does encryption cause GC spikes?",
        answer: "We use a streaming buffer approach. We read from the source tarball in 32KB chunks, run them through the AES-256-GCM cipher, and write the result immediately. This keeps the memory footprint (RSS) stable regardless of whether you're backing up 10MB or 10GB."
    },
    {
        question: "What if the StackSnap process itself crashes during a restore?",
        answer: "This is the most critical failure mode. During restore, we capture the state of your existing containers. If a crash occurs during extraction, your containers might be stopped. However, because we don't 'delete' your old data until the new data is extractable, you can always manually restart your old stack using the existing Docker volumes. StackSnap acts as an orchestrator, not a black-box storage layer."
    },
    {
        question: "How do you prevent 'Version Drift'?",
        answer: "Each backup includes the exact docker-compose.yml that was active at the time of the backup. When you restore, we use that specific manifest to recreate the services. This ensures that even if you've changed your local files in the meantime, the restored environment matches the data exactly."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Technical FAQ</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-zinc-900/20">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                aria-label="Toggle FAQ"
                            >
                                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-zinc-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
