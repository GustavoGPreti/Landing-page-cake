import { Card, CardBody, CardFooter, Tabs, Tab } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface CategoryCard {
    title: string;
    description: string;
    image: string;
    href: string;
}

const categories: CategoryCard[] = [
    {
        title: "Bolos Piscininha",
        description: "Deliciosos bolos recheados com calda especial",
        image: "/img/bolo-piscininha.jpg",
        href: "/bolos/piscininha"
    },
    {
        title: "Bolos Gelados",
        description: "Refrescantes e perfeitos para qualquer ocasião",
        image: "/img/bolo-gelado.jpg",
        href: "/bolos/gelados"
    },
    {
        title: "Bolos de Aniversário",
        description: "Tornem sua celebração ainda mais especial",
        image: "/img/bolo-aniversario.jpg",
        href: "/bolos/aniversario"
    },
    {
        title: "Cupcakes",
        description: "Mini delícias em versões irresistíveis",
        image: "/img/cupcakes.jpg",
        href: "/bolos/cupcakes"
    }
];

export default function Categories() {
    const [selectedTab, setSelectedTab] = useState("todos");

    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
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

            <section className="py-32 relative">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                            Nossas <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Especialidades</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Descubra nossa seleção de bolos artesanais, cada um preparado com ingredientes selecionados e muito carinho
                        </p>

                        <div className="flex justify-center mb-8">
                            <Tabs 
                                selectedKey={selectedTab}
                                onSelectionChange={(key) => setSelectedTab(key.toString())}
                                color="secondary"
                                variant="light"
                                radius="full"
                                classNames={{
                                    tabList: "gap-4",
                                    cursor: "bg-gradient-to-r from-pink-500 to-purple-600",
                                    tab: "text-sm md:text-base",
                                    tabContent: "group-data-[selected=true]:text-white"
                                }}
                            >
                                <Tab key="todos" title="Todos os Bolos" />
                                <Tab key="piscininha" title="Piscininha" />
                                <Tab key="gelados" title="Gelados" />
                                <Tab key="aniversario" title="Aniversário" />
                                <Tab key="cupcakes" title="Cupcakes" />
                            </Tabs>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories
                            .filter(category => 
                                selectedTab === "todos" || 
                                category.href.includes(selectedTab)
                            )
                            .map((category, index) => (
                                <Link href={category.href} key={index}>
                                    <Card className="h-full hover:scale-105 transition-transform duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                                        <CardBody className="p-0">
                                            <div className="aspect-square w-full h-64 overflow-hidden">
                                                <Image
                                                    src={category.image}
                                                    alt={category.title}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </CardBody>
                                        <CardFooter className="flex flex-col items-start p-4">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {category.description}
                                            </p>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 