"use client";

import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const categorias = [
    {
        titulo: "Bolos Piscininha",
        descricao: "Deliciosos bolos com cobertura cremosa",
        imagem: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&h=800&fit=crop",
        link: "/bolos/piscininha"
    },
    {
        titulo: "Bolos Gelados",
        descricao: "Refrescantes e irresistíveis",
        imagem: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&h=800&fit=crop",
        link: "/bolos/gelados"
    },
    {
        titulo: "Bolos de Aniversário",
        descricao: "Especiais para sua celebração",
        imagem: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&h=800&fit=crop",
        link: "/bolos/aniversario"
    },
    {
        titulo: "Cupcakes",
        descricao: "Mini delícias decoradas com carinho",
        imagem: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&h=800&fit=crop",
        link: "/bolos/cupcakes"
    }
    
];

export default function BolosCategoria() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div id="bolos-categorias" className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <div className='absolute inset-0 opacity-25' style={{ 
                background: `
                    radial-gradient(
                        circle at 50% 50%, 
                        rgba(249, 160, 202, 0.15) 0%,
                        rgba(232, 121, 249, 0.08) 35%,
                        rgba(204, 171, 238, 0.04) 65%,
                        rgba(204, 171, 238, 0.02) 100%
                    )
                `
            }}></div>

            <section className="py-24 relative" id="bolos-categorias">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
                        data-aos="fade-down"
                    >
                        Nossas Especialidades
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categorias.map((categoria, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="aspect-square w-full h-64 overflow-hidden">
                                    <Image
                                        src={categoria.imagem}
                                        alt={categoria.titulo}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                        {categoria.titulo}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {categoria.descricao}
                                    </p>
                                    <Button
                                        color="secondary"
                                        variant="flat"
                                        className="w-full mt-auto"
                                        endContent={<FaArrowRight />}
                                        onClick={() => router.push(categoria.link)}
                                    >
                                        Ver Mais
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 