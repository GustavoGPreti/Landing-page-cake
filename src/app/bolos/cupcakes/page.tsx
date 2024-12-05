import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import imagemcupcake from "@/../public/img/cupcake.png";
import imagemcupcakeNatal from "@/../public/img/CupcakeNatal.jpg"; // Substitua pelo caminho da imagem do cupcake natalino
import Image from "next/image";

export default function Cupcakes() {
    const bolos = [
        {
            nome: "Cupcake Natalino 🎄",
            descricao: "Massa especial de panetone com cobertura de cream cheese e decoração natalina",
            preco: "R$ 12,00",
            promocao: "R$ 8,00",
            imagem: imagemcupcakeNatal,
            especial: true
        },
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
                <div className="mb-16 bg-gradient-to-r from-red-500 to-green-500 p-8 rounded-xl text-white text-center shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">🎄 Promoção Especial de Natal! 🎅</h3>
                    <p className="mb-4">
                        Aproveite nosso delicioso Cupcake Natalino com 33% de desconto! 
                        De R$ 12,00 por apenas R$ 8,00! 
                        Válido até 25/12 ou enquanto durarem os estoques.
                    </p>
                    <p className="text-sm opacity-75">
                        *Promoção não cumulativa com outras ofertas
                    </p>
                </div>

                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                    Cupcakes
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Mini delícias perfeitas para qualquer ocasião.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bolos.map((bolo, index) => (
                        <div 
                            key={index} 
                            className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col ${
                                bolo.especial ? 'ring-2 ring-red-500 dark:ring-red-400' : ''
                            }`}
                        >
                            {bolo.especial && (
                                <>
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                            <FaStar className="text-yellow-300" />
                                            Especial de Natal
                                        </div>
                                    </div>
                                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 rotate-[-30deg]">
                                        <div className="bg-red-500 text-white px-6 py-2 rounded-lg text-xl font-bold shadow-lg border-2 border-white">
                                            33% OFF
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="relative w-full h-64">
                                <Image
                                    src={bolo.imagem}
                                    alt={bolo.nome}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"/>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    {bolo.nome}
                                </h3>
                                {bolo.especial ? (
                                    <div className="relative">
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                            Massa especial de panetone com cobertura de glacê e decoração natalina
                                        </p>
                                        <div className="absolute -right-2 -top-6">
                                            <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 text-xs font-medium">
                                                🎅 Promoção Ativa
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {bolo.descricao}
                                    </p>
                                )}
                                <div className="mb-4">
                                    {bolo.promocao ? (
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-red-500">{bolo.promocao}</span>
                                            <span className="text-lg text-gray-400 line-through">{bolo.preco}</span>
                                        </div>
                                    ) : (
                                        <p className="text-2xl font-bold text-secondary">
                                            {bolo.preco}
                                        </p>
                                    )}
                                </div>
                                <Button
                                    color="secondary"
                                    className="w-full mt-auto hover:opacity-90 transition-opacity"
                                    endContent={<FaWhatsapp className="text-lg" />}
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