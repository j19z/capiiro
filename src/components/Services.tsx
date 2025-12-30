"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Home, ClipboardList, Video } from "lucide-react";

const servicesList = [
    {
        id: "residential",
        icon: <Home className="w-8 h-8" />,
        key: "services.residential",
    },
    {
        id: "relocation",
        icon: <ClipboardList className="w-8 h-8" />,
        key: "services.relocation",
    },
    {
        id: "virtual",
        icon: <Video className="w-8 h-8" />,
        key: "services.virtual",
    },
];

const Services = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-24 bg-section-alt">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-lora italic text-secondary dark:text-primary mb-4">
                        {t("services.title")}
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-card-bg p-10 rounded-2xl shadow-xl shadow-neutral-200/50 dark:shadow-black/50 border border-card-border flex flex-col items-center text-center group transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-secondary dark:text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-lora italic text-secondary dark:text-primary mb-4">
                                {t(`${service.key}.title`)}
                            </h3>
                            <p className="text-text-muted leading-relaxed font-bitter">
                                {t(`${service.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
