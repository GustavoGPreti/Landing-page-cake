"use client";
import  Footer  from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import imagemlogo from "@/../public/img/LogoEmpresa.png";
import imagemAlexandra from "@/../public/img/LogoEmpresa.png";
import imagemGustavo from "@/../public/img/gustavo.jpg";
import imagemCarlos from "@/../public/img/carlos.jpg";
import imagemKallel from "@/../public/img/kallel.jpg";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <NavBar/>
      
      {/* Seção Sobre Nós */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 w-full">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Nosso Objetivo
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                A Caseirinhos da Lê é uma confeitaria artesanal especializada em bolos caseiros de alta qualidade. Fundada com o compromisso de oferecer produtos excepcionais, utilizamos ingredientes selecionados e técnicas tradicionais para criar experiências gastronômicas memoráveis.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Nossa expertise em confeitaria, combinada com um atendimento personalizado, nos permite atender às necessidades específicas de cada cliente, garantindo satisfação em cada produto entregue.
              </p>
            </div>
            {/* Imagem apenas visível em desktop */}
            <div className="hidden lg:block flex-1">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={imagemlogo}
                  alt="Caseirinhos da Lê - Confeitaria Artesanal"
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipe Profissional */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Equipe Especializada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Nova Pessoa */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-6">
              <Image 
                src={imagemAlexandra}
                alt="Alexandra Naito Lopes"
                objectFit="cover"
                className="rounded-full"
                width={128}
                height={128}
                style={{ height: '100%' }}
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Alexandra Naito Lopes</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Confeitera</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/alexandra-naito-lopes" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com/alexandra.naito/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
              </a>
            </div>
          </div>

          {/* Profissional 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-6">
              <Image 
                src={imagemGustavo}
                alt="Gustavo Gomes Preti"
                objectFit="cover"
                className="rounded-full"
                width={128}
                height={128}
                style={{ height: '100%' }}
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Gustavo Gomes Preti</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Desenvolvedor Full Stack</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/gustavo-preti" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
              </a>
              <a href="https://github.com/gustavogpreti" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 hover:text-gray-800" />
              </a>
              <a href="https://instagram.com/gustavogpreti" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
              </a>
            </div>
          </div>

          {/* Profissional 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-6">
              <Image 
                src={imagemCarlos}
                alt="Carlos Eduardo Naito Lopes"
                objectFit="cover"
                className="rounded-full"
                width={128}
                height={128}
                style={{ height: '100%' }}
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Carlos Eduardo Naito Lopes</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Gerente de Desenvolvimento</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/carlos-naito" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
              </a>
              <a href="https://github.com/carlonaitolopes" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 hover:text-gray-800" />
              </a>
              <a href="https://www.instagram.com/carloos_edu_01/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
              </a>
            </div>
          </div>

          {/* Profissional 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-6">
              <Image 
                src={imagemKallel}
                alt="Kallel Mota de Paula Leite"
                objectFit="cover"
                className="rounded-full"
                width={128}
                height={128}
                style={{ height: '100%' }}
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Kallel Mota de Paula Leite</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Especialista em Marketing Digital</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/kallelmotadepaulaleite" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com/l3o_kall/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Canais de Comunicação */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Canais de Atendimento
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Oferecemos múltiplos canais de comunicação para melhor atendê-lo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Empresarial */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <FaWhatsapp className="text-5xl text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">WhatsApp Business</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Atendimento personalizado em horário comercial
              </p>
              <Button
                as="a"
                href="https://wa.me/5544984057214"
                target="_blank"
                color="success"
                className="w-full"
              >
                Iniciar Atendimento
              </Button>
            </div>
          </div>

          {/* Instagram Profissional */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <FaInstagram className="text-5xl text-pink-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Instagram Profissional</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Acompanhe nosso catálogo e novidades
              </p>
              <Button
                as="a"
                href="https://instagram.com/boloscaseirinhosdale"
                target="_blank"
                color="secondary"
                className="w-full"
              >
                Acessar Perfil
              </Button>
            </div>
          </div>

          {/* Página Comercial */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <FaFacebook className="text-5xl text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Página Comercial</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Conheça nossa empresa e avaliações
              </p>
              <Button
                as="a"
                href="https://facebook.com/boloscaseirinhosdale"
                target="_blank"
                color="primary"
                className="w-full"
              >
                Visitar Página
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}