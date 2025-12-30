"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="inline-block text-accent font-semibold tracking-widest uppercase text-sm mb-4"
                    >
                        Capiiro Organizing
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-lora italic text-secondary dark:text-primary mb-6 leading-tight">
                        {t("hero.title")}
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted dark:text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-bitter">
                        {t("hero.subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-accent/40"
                        >
                            {t("hero.cta")}
                        </motion.a>
                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.05 }}
                            className="px-10 py-4 rounded-full text-lg font-semibold text-secondary dark:text-primary hover:text-accent border border-secondary/20 dark:border-primary/20 hover:border-accent transition-all"
                        >
                            {t("nav.services")}
                        </motion.a>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
