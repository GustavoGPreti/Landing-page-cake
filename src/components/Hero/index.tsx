"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import imagem1bolo from '@/../public/img/imagem1-bolo.jpg';

export default function Hero({className}: {className?: string}) {
    const scrollToBolos = () => {
        const bolosSection = document.getElementById('bolos-categorias');
        if (bolosSection) {
            bolosSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <div className='absolute inset-0 opacity-25 backdrop-blur-sm' style={{ 
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

            <div className="container mx-auto px-4 py-12 relative">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                            Caseirinhos da <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Lê</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Descubra o sabor único dos nossos bolos artesanais, feitos com amor e ingredientes selecionados.
                        </p>
                        <Button
                            size="lg"
                            color="secondary"
                            variant="shadow"
                            onClick={scrollToBolos}
                            className="font-semibold"
                        >
                            Ver Cardápio
                        </Button>
                    </div>

                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
                        <div className="relative w-full aspect-square">
                            <Image
                                src={imagem1bolo}
                                alt="Bolo Caseiro"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}