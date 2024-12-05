import  Footer  from "@/components/Footer";
import { NavBar } from "@/components/Navbar"

export default function ComoEncomendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <NavBar/>
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Como Encomendar
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Siga os passos abaixo para fazer sua encomenda
        </p>

        <div className="space-y-8">
          {/* Passo 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Escolha seu Bolo
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Navegue por nossas categorias e escolha o bolo que mais combina com sua ocasião.
                </p>
              </div>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Entre em Contato
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Clique no botão &quot;Encomendar&quot; do bolo escolhido ou nos contate pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Personalize seu Pedido
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Informe detalhes como tamanho, sabor, decoração e data de entrega.
                </p>
              </div>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Confirme seu Pedido
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Faça o pagamento do sinal para confirmar sua encomenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
} 