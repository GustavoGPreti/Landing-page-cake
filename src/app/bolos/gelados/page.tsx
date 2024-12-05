import  Footer  from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import imagembologelado from "@/../public/img/bologelado1.jpg";
import Image from "next/image";

export default function BolosGelados() {
    const bolos = [
        {
            nome: "Bolo Gelado de Coco",
            descricao: "Massa branca com recheio de coco e cobertura gelada",
            preco: "R$ 8,00",
            imagem: imagembologelado
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white dark:from-gray-900 dark:to-gray-950">
            <NavBar/>
            <div className="max-w-screen-xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                    Bolos Gelados
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Refrescantes e deliciosos bolos gelados para qualquer ocasião.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bolos.map((bolo, index) => (
                        <div key={index} 
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                            <div className="relative w-full h-64 group">
                                <Image
                                    src={bolo.imagem}
                                    alt={bolo.nome}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"/>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    {bolo.nome}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                    {bolo.descricao}
                                </p>
                                <p className="text-2xl font-bold text-secondary mb-4">
                                    {bolo.preco}
                                </p>
                                <Button
                                    color="secondary"
                                    className="w-full mt-auto hover:opacity-90 transition-opacity"
                                    endContent={<FaWhatsapp className="text-lg" />}
                                    as="a"
                                    href={`https://wa.me/5544984057214?text=Olá! Gostaria de encomendar um ${bolo.nome}`}
                                    target="_blank"
                                >
                                    Encomendar
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
} 