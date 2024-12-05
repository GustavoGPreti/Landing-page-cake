import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white/70 dark:bg-gray-900 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Caseirinhos da<span className="text-pink-500"> Lê</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              O verdadeiro bolo você encontra aqui.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300 text-sm">
            <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
            <Link href="/sobre" className="hover:text-pink-500 transition-colors">Sobre</Link>
            <Link href="/como-encomendar" className="hover:text-pink-500 transition-colors">Como Encomendar</Link>
            <Link href="/bolos/piscininha" className="hover:text-pink-500 transition-colors">Bolos Piscininha</Link>
            <Link href="/bolos/gelados" className="hover:text-pink-500 transition-colors">Bolos Gelados</Link>
            <Link href="/bolos/aniversario" className="hover:text-pink-500 transition-colors">Bolos de aniversário</Link>
            <Link href="/bolos/cupcakes" className="hover:text-pink-500 transition-colors">Cup Cakes</Link>
          </nav>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-200 space-y-4 md:space-y-0">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © 2024 Caseirinhos da Lê. Todos direitos reservados.
          </p>

          <div className="flex gap-6">
            <Link 
              href="https://www.facebook.com/boloscaseirinhosdale?_rdr" 
              target="_blank"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </Link>
            <Link 
              href="https://www.instagram.com/boloscaseirinhosdale/" 
              target="_blank"
              className="text-gray-500 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
            <Link 
              href="https://wa.me/5544984057214" 
              target="_blank"
              className="text-gray-500 hover:text-green-500 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            Desenvolvido por:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="https://www.instagram.com/gustavogpreti/" 
              target="_blank"
              className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
              <span>@gustavogpreti</span>
            </Link>
            <Link 
              href="https://www.instagram.com/carloos_edu_01/" 
              target="_blank"
              className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
              <span>@carloos_edu_01</span>
            </Link>
            <Link 
              href="https://www.instagram.com/l3o_kall/" 
              target="_blank"
              className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
              <span>@l3o_kall</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
