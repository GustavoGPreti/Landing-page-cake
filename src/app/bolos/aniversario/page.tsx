import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { FaExclamationTriangle } from "react-icons/fa";


export default function BolosAniversario() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <NavBar/>
            <div className="max-w-screen-xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                    Bolos de Aniversário
                </h1>

                {/* Aviso de Indisponibilidade */}
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mb-12 mx-auto max-w-2xl rounded-r-lg">
                    <div className="flex items-center">
                        <FaExclamationTriangle className="text-yellow-400 text-2xl mr-4"/>
                        <div>
                            <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200">
                                Temporariamente Indisponível
                            </h3>
                            <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                                No momento, não estamos aceitando encomendas para bolos de aniversário. 
                                Em breve voltaremos com novidades!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
                    <p>Estamos trabalhando para trazer novos modelos e sabores.</p>
                    <p>Agradecemos sua compreensão!</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
} 