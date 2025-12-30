"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const items = [1, 2, 3, 4, 5, 6]; // Placeholder for gallery items

const Portfolio = () => {
    const { t } = useLanguage();

    return (
        <section id="portfolio" className="py-24 bg-section-main">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-lora italic text-secondary dark:text-primary mb-4">
                        {t("portfolio.title")}
                    </h2>
                    <p className="text-earth-tone dark:text-neutral-400 font-bitter italic">
                        {t("portfolio.subtitle")}
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-square bg-neutral-warm/10 dark:bg-neutral-800 rounded-2xl overflow-hidden group border border-neutral-100 dark:border-neutral-800 shadow-sm"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-secondary/20 dark:text-primary/10 italic font-lora p-6 text-center">
                                [{t("portfolio.imagePlaceholder")} {item}]
                            </div>
                            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bitter tracking-widest text-sm uppercase">
                                    {t("portfolio.viewProject")}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
