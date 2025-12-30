export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            method: "Our Method",
            portfolio: "Portfolio",
            contact: "Contact",
        },
        hero: {
            title: "Peace Through Order",
            subtitle: "Transform your chaos into harmony with personalized organization solutions.",
            cta: "Let's Get Started",
        },
        about: {
            title: "Visual Harmony",
            subtitle: "Andrea's Story",
            content: "I'm a Professional Organizer and I have an insatiable passion for organization and order. At Capiiro Homes, my mission is to empower you with the knowledge and habits needed to cultivate an organized life.",
        },
        services: {
            title: "Our Services",
            residential: {
                title: "Residential Organizing",
                description: "Transform your living spaces into functional sanctuaries.",
            },
            relocation: {
                title: "Relocation Services",
                description: "Seamless transitions to your new home, organized from day one.",
            },
            virtual: {
                title: "Virtual Coaching",
                description: "Expert organizing guidance from anywhere in the world.",
            },
        },
        method: {
            title: "The Capiiro Method",
            step1: {
                title: "Declutter",
                description: "Before creating harmony, we first clear the path by removing the excess.",
            },
            step2: {
                title: "Categorize",
                description: "We structure your belongings into logical, functional groups.",
            },
            step3: {
                title: "Organize",
                description: "Customized solutions for every corner, creating lasting order.",
            },
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Ready to reclaim your space and mind? Let's discuss how we can bring harmony back to your home.",
            whatsapp: "WhatsApp Us Directly",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
        },
        portfolio: {
            title: "Portfolio",
            subtitle: "Moments of Transformation",
            viewProject: "View Project",
            imagePlaceholder: "Organized Space Gallery Image",
        },
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Acerca",
            services: "Servicios",
            method: "El Método",
            portfolio: "Portafolio",
            contact: "Contacto",
        },
        hero: {
            title: "Paz a través del Orden",
            subtitle: "Transforma el caos en armonía con soluciones de organización personalizadas.",
            cta: "Comencemos Juntos",
        },
        about: {
            title: "Armonía Visual",
            subtitle: "La Historia de Andrea",
            content: "Soy Organizadora Profesional y tengo una pasión insaciable por la organización y el orden. En Capiiro Homes, mi misión es empoderarte con el conocimiento y los hábitos necesarios para cultivar una vida organizada.",
        },
        services: {
            title: "Nuestros Servicios",
            residential: {
                title: "Organización Residencial",
                description: "Transforma tus espacios en santuarios funcionales.",
            },
            relocation: {
                title: "Servicios de Mudanza",
                description: "Transiciones sin estrés a tu nuevo hogar, organizado desde el primer día.",
            },
            virtual: {
                title: "Coaching Virtual",
                description: "Guía experta en organización desde cualquier parte del mundo.",
            },
        },
        method: {
            title: "El Método Capiiro",
            step1: {
                title: "Despejar",
                description: "Antes de crear armonía, primero despejamos el camino eliminando el exceso.",
            },
            step2: {
                title: "Clasificar",
                description: "Estructuramos tus pertenencias en grupos lógicos y funcionales.",
            },
            step3: {
                title: "Organizar",
                description: "Soluciones personalizadas para cada rincón, creando un orden duradero.",
            },
        },
        contact: {
            title: "Contáctanos",
            subtitle: "¿Listo para recuperar tu espacio y tu mente? Hablemos de cómo podemos devolver la armonía a tu hogar.",
            whatsapp: "Contáctanos por WhatsApp",
            name: "Nombre",
            email: "Correo",
            message: "Mensaje",
            send: "Enviar Mensaje",
        },
        portfolio: {
            title: "Portafolio",
            subtitle: "Momentos de Transformación",
            viewProject: "Ver Proyecto",
            imagePlaceholder: "Imagen de Galería de Espacio Organizado",
        },
    },
};

export type TranslationKey = keyof typeof translations.en;
