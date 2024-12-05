import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa"; 
import imagembolopiscininhacomchocolate from "@/../public/img/piscininhacenouracomchocolate.jpg";
import imagembolopiscininhacomchurros from "@/../public/img/piscininhachurros.jpg";
import imagembolopiscininhacomamendoim from "@/../public/img/piscininhaamendoim.jpg";
import imagembolopiscininhadeleite from "@/../public/img/piscininhaleiteninho.jpg";
import imagembolopiscininhachocolate from "@/../public/img/piscininhachocolate.jpg";
import Image from "next/image";


export default function BolosPiscininha() {
    const bolos = [
        {
            nome: "Bolo Piscininha de Cenoura com Chocolate",
            descricao: "Massa de cenoura com calda especial e cobertura cremosa",
            preco: {
                pequeno: "30,00",
                grande: "35,00"
            },
            imagem: imagembolopiscininhacomchocolate
        },
        {
            nome: "Bolo Piscininha de Leite Ninho",
            descricao: "Massa branca com calda de leite ninho e cobertura especial",
            preco: {
                pequeno: "30,00",
                grande: "35,00"
            },
            imagem: imagembolopiscininhadeleite
        },
        {
            nome: "Bolo Piscininha de Churros",
            descricao: "Massa branca com cobertura de churros",
            preco: {
                pequeno: "30,00",
                grande: "35,00"
            },
            imagem: imagembolopiscininhacomchurros
        },
        {
            nome: "Bolo Piscininha de Amendoim",
            descricao: "Massa branca com cobertura de amendoim",
            preco: {
                pequeno: "30,00",
                grande: "35,00"
            },
            imagem: imagembolopiscininhacomamendoim
        },
        {
            nome: "Bolo Piscininha de Chocolate",
            descricao: "Massa de chocolate com calda especial e cobertura cremosa de chocolate",
            preco: {
                pequeno: "30,00",
                grande: "35,00"
            },
            imagem: imagembolopiscininhachocolate
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <NavBar/>
            <div className="max-w-screen-xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                    Bolos Piscininha
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Deliciosos bolos recheados com calda especial e cobertura cremosa.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bolos.map((bolo, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
                            <div className="relative w-full h-64">
                                <Image
                                    src={bolo.imagem}
                                    alt={bolo.nome}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index === 0}
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    {bolo.nome}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                    {bolo.descricao}
                                </p>
                                
                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-secondary/10 dark:bg-secondary/20 px-3 py-1 rounded-full">
                                            <span className="text-xs font-medium text-secondary">Pequeno</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <span className="text-xs text-gray-600 dark:text-gray-400">R$</span>
                                            <span className="text-lg font-bold text-secondary ml-1">{bolo.preco.pequeno}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-secondary/10 dark:bg-secondary/20 px-3 py-1 rounded-full">
                                            <span className="text-xs font-medium text-secondary">Grande</span>
                                        </div>
                                        <div className="flex items-baseline">
                                            <span className="text-xs text-gray-600 dark:text-gray-400">R$</span>
                                            <span className="text-lg font-bold text-secondary ml-1">{bolo.preco.grande}</span>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    color="secondary"
                                    className="w-full mt-auto"
                                    endContent={<FaWhatsapp />}
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