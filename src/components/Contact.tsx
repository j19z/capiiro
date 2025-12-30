"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Send, MessageCircle } from "lucide-react";

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 bg-section-alt overflow-hidden relative transition-colors duration-300">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-lora italic mb-8 leading-tight text-secondary dark:text-primary">
                            {t("contact.title")}
                        </h2>
                        <p className="text-earth-tone dark:text-neutral-300 text-lg font-bitter mb-10 leading-relaxed max-w-lg">
                            {t("contact.subtitle")}
                        </p>

                        <div className="flex flex-col gap-6">
                            <a
                                href="https://wa.me/your-number"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 text-secondary dark:text-accent hover:text-accent dark:hover:text-white transition-colors text-xl font-medium"
                            >
                                <div className="w-12 h-12 rounded-full border border-secondary/30 dark:border-accent/30 flex items-center justify-center">
                                    <MessageCircle size={24} />
                                </div>
                                {t("contact.whatsapp")}
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card-bg p-8 md:p-12 rounded-3xl border border-card-border shadow-2xl transition-all duration-300"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest font-semibold text-text-muted/70">{t("contact.name")}</label>
                                    <input type="text" className="bg-transparent border-b border-card-border py-3 focus:outline-none focus:border-accent transition-colors text-foreground" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest font-semibold text-text-muted/70">{t("contact.email")}</label>
                                    <input type="email" className="bg-transparent border-b border-card-border py-3 focus:outline-none focus:border-accent transition-colors text-foreground" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mb-10">
                                <label className="text-xs uppercase tracking-widest font-semibold text-text-muted/70">{t("contact.message")}</label>
                                <textarea rows={4} className="bg-transparent border-b border-card-border py-3 focus:outline-none focus:border-accent transition-colors resize-none text-foreground"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent hover:bg-accent/90 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-shadow shadow-xl shadow-accent/20"
                            >
                                {t("contact.send")}
                                <Send size={18} />
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
