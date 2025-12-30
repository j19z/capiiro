"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Trash2, Layers, Heart } from "lucide-react";

const steps = [
    {
        icon: <Trash2 className="w-8 h-8" />,
        key: "method.step1",
    },
    {
        icon: <Layers className="w-8 h-8" />,
        key: "method.step2",
    },
    {
        icon: <Heart className="w-8 h-8" />,
        key: "method.step3",
    },
];

const Method = () => {
    const { t } = useLanguage();

    return (
        <section id="method" className="py-24 bg-section-alt">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-lora italic text-secondary dark:text-primary mb-6">
                        {t("method.title")}
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-card-border -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-20 h-20 bg-card-bg rounded-full border-2 border-accent flex items-center justify-center text-accent mb-8 shadow-lg transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-lora italic text-secondary dark:text-primary mb-4">
                                    {t(`${step.key}.title`)}
                                </h3>
                                <p className="text-text-muted text-center font-bitter max-w-xs">
                                    {t(`${step.key}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Method;
