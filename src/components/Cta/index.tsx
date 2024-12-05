"use client";

import { Button } from "@nextui-org/react";
import imagem3bolo from "@/../public/img/Imagem3-bolo.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Cta() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
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
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                    style={{
                        background: `
                            radial-gradient(
                                circle at center,
                                rgba(249, 160, 202, 0.1) 0%,
                                rgba(232, 121, 249, 0.08) 30%,
                                rgba(204, 171, 238, 0.03) 60%,
                                transparent 100%
                            )
                        `,
                        filter: 'blur(60px)'
                    }}
                />
            </div>
            <section className="py-32 relative">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block" data-aos="fade-right">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 opacity-20 rounded-2xl" />
                                <Image 
                                    src={imagem3bolo.src} 
                                    className="md:max-w-lg rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative" 
                                    alt="Deliciosos bolos artesanais" 
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <div className="max-w-xl px-4 space-y-6 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl" data-aos="fade-left">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                                Descubra Sabores Únicos e <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Momentos Especiais</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-300">
                                Na Caseirinhos da Lê, transformamos ingredientes selecionados em obras de arte comestíveis. Cada criação nossa é uma expressão de dedicação e amor pela confeitaria artesanal.
                            </p>
                            <Button 
                                variant="shadow" 
                                color="secondary"
                                size="lg"
                                className="font-medium hover:opacity-90 transition-opacity"
                                endContent={<FaWhatsapp className="text-lg" />}
                            >
                                Faça seu pedido especial
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}