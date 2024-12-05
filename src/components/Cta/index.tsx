"use client";

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950 py-24">
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20">
        <Image
          src="/img/pattern-bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Transforme seu evento em um momento
            <span className="text-pink-500"> inesquecível</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossos bolos artesanais são preparados com ingredientes selecionados e muito carinho 
            para tornar sua celebração ainda mais especial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              as={Link}
              href="/bolos/piscininha"
              className="bg-pink-500 text-white px-8 py-6 text-lg font-semibold hover:bg-pink-600 transition-colors"
              size="lg"
            >
              Ver Cardápio
            </Button>

            <Button
              as="a"
              href="https://wa.me/5544984057214?text=Olá! Gostaria de fazer um orçamento"
              target="_blank"
              className="bg-green-500 text-white px-8 py-6 text-lg font-semibold hover:bg-green-600 transition-colors"
              size="lg"
              startContent={<FaWhatsapp className="text-xl" />}
            >
              Fazer Orçamento
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Qualidade Garantida
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ingredientes frescos e selecionados para o melhor sabor
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Sabor Artesanal
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receitas exclusivas feitas com amor e dedicação
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adaptamos os bolos ao seu gosto e necessidade
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-pink-50 dark:bg-gray-800 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Faça seu pedido com antecedência mínima de 24 horas. 
              Consulte disponibilidade para datas especiais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}