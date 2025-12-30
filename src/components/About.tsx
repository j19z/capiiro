"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-section-main overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Aspect */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-[4/5] bg-neutral-warm/20 rounded-2xl overflow-hidden relative z-10">
                            <div className="w-full h-full flex items-center justify-center text-secondary/30 italic font-lora text-xl p-12 text-center">
                                [High-end portrait or lifestyle image of Andrea in an organized space]
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-0" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
                    </motion.div>

                    {/* Content Aspect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
                            {t("about.subtitle")}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-lora italic text-secondary dark:text-primary mb-8 leading-tight">
                            {t("about.title")}
                        </h2>
                        <div className="space-y-6 text-text-muted text-lg font-bitter leading-relaxed">
                            <p>{t("about.content")}</p>
                            <p>
                                Visual harmony isn't just about aesthetics; it's about creating a foundation for a more sustainable and intentional way of living.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-10 px-8 py-3 bg-secondary dark:bg-accent text-white dark:text-black rounded-full font-medium shadow-lg transition-colors duration-300"
                        >
                            Discover More
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
