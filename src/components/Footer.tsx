"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-16 bg-section-main border-t border-neutral-warm/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <div className="text-3xl font-lora italic text-secondary dark:text-primary mb-2">Capiiro</div>
                        <p className="text-earth-tone font-bitter">Mindful Organizing & Visual Harmony</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="https://www.instagram.com/capiiro.organizing/" target="_blank" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
                        <a href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
                        <a href="mailto:info@capiiro.com" className="hover:text-accent transition-colors"><Mail size={24} /></a>
                    </div>

                    <div className="text-neutral-500 text-sm font-bitter">
                        © {new Date().getFullYear()} Capiiro. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
