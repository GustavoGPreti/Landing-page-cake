import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import imagemcupcake from "@/../public/img/cupcake.png";
import Image from "next/image";

export default function Cupcakes() {
    const bolos = [
        {
            nome: "Cupcake da casa",
            descricao: "Massa de chocolate com cobertura de glacê",
            preco: "R$ 8,00",
            imagem: imagemcupcake
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <NavBar/>
            <div className="max-w-screen-xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                    Cupcakes
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Mini delícias perfeitas para qualquer ocasião.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bolos.map((bolo, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
                            <div className="aspect-square w-full h-64 overflow-hidden">
                                <Image
                                    src={bolo.imagem.src} 
                                    alt={bolo.nome}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    layout="fill"
                                    objectFit="cover"
                                />
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
                                    className="w-full mt-auto"
                                    endContent={<FaWhatsapp />}
                                    as="a"
                                    href={`https://wa.me/5544984057214?text=Olá! Gostaria de encomendar ${bolo.nome}`}
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