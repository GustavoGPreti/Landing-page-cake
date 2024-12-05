"use client";

import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import imagembolopiscininhacomchocolate from "@/../public/img/piscininhacenouracomchocolate.jpg";
import imagembologelado from "@/../public/img/bologelado1.jpg";
import imagemcupcake from "@/../public/img/cupcake.png";

const categorias = [
    {
        titulo: "Bolos Piscininha",
        descricao: "Deliciosos bolos com cobertura cremosa que derretem na boca",
        imagem: imagembolopiscininhacomchocolate,
        link: "/bolos/piscininha"
    },
    {
        titulo: "Bolos Gelados",
        descricao: "Sobremesas refrescantes perfeitas para dias quentes",
        imagem: imagembologelado,
        link: "/bolos/gelados"
    },
    {
        titulo: "Bolos de Aniversário",
        descricao: "Bolos personalizados para tornar seu dia ainda mais especial",
        imagem: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&h=800&fit=crop",
        link: "/bolos/aniversario"
    },
    {
        titulo: "Cupcakes",
        descricao: "Pequenos prazeres decorados com amor e criatividade",
        imagem: imagemcupcake,
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
        <div id="bolos-categorias" className="relative bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className='absolute inset-0 opacity-30' style={{ 
                background: `
                    radial-gradient(
                        circle at 50% 50%, 
                        rgba(255, 182, 193, 0.2) 0%,
                        rgba(255, 192, 203, 0.15) 35%,
                        rgba(255, 182, 193, 0.1) 65%,
                        rgba(255, 182, 193, 0.05) 100%
                    )
                `
            }}></div>

            <section className="py-24 relative">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 
                        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                        data-aos="fade-down"
                    >
                        Nossas Delícias
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categorias.map((categoria, index) => (
                            <div 
                                key={index}
                                className="group relative rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"/>
                                <div className="aspect-[4/5] w-full overflow-hidden">
                                    <Image
                                        src={categoria.imagem}
                                        alt={categoria.titulo}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        priority={index === 0}
                                    />
                                </div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {categoria.titulo}
                                        </h3>
                                        <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                                            {categoria.descricao}
                                        </p>
                                        <Button
                                            color="secondary"
                                            variant="shadow"
                                            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium"
                                            endContent={<FaArrowRight />}
                                            onClick={() => router.push(categoria.link)}
                                        >
                                            Explorar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}