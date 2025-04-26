
import React from 'react';
import { Shield, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const notForYou = [
    "Você acha normal viver no estresse",
    "Você gosta de ter casa destruída",
    "Você prefere gastar R$1.500 num adestrador pra talvez ter resultado"
  ];

  const forYou = [
    "Você ama seu cachorro mas quer paz de volta",
    "Você quer resultado rápido, prático e simples",
    "Você quer ver seu cão equilibrado, obediente e feliz"
  ];
  
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-dog-darkAlt">
      <div className="section-wrapper">
        <h2 className="section-title text-3xl md:text-4xl">
          💰 Investimento
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-dog-primary/30 mb-12 relative overflow-hidden opacity-0 animate-slide-in">
            {/* Price tag */}
            <div className="absolute top-0 md:top-6 right-0 md:right-6 glass-card bg-gradient-to-r from-dog-primary to-dog-secondary p-3 md:p-4 rounded-xl transform rotate-3 shadow-lg z-10 mt-12 mr-2 md:mt-0 md:mr-0">
              <div className="text-center">
                <div className="text-base md:text-lg font-medium mb-1">Apenas</div>
                <div className="text-3xl md:text-4xl font-bold mb-1">R$27</div>
                <div className="text-xs md:text-sm">Pagamento único</div>
              </div>
            </div>
            
            <div className="mb-12 max-w-2xl mt-32 md:mt-0">
              <h3 className="text-2xl font-bold mb-4 mt-20 md:mt-0">Menos que:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base md:text-lg">Um saco de ração</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base md:text-lg">Uma multa de síndico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base md:text-lg">O estresse mental de viver no caos</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-dog-primary" />
                <span>Garantia de 30 Dias:</span>
              </h3>
              <div className="glass-card p-6 rounded-xl bg-dog-primary/10 border border-dog-primary/20">
                <p className="text-base md:text-lg mb-4">
                  Se em 30 dias você aplicar o protocolo e seu cachorro não melhorar,
                  eu devolvo seu dinheiro. Sem desculpas. Sem perguntas.
                </p>
                <p className="text-xl font-bold">
                  Seu risco é ZERO. A responsabilidade é minha.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <div className="mb-6">
                <div className="bg-red-500/20 rounded-lg p-3 mb-6 inline-block">
                  <span className="text-lg font-medium">⏳ AVISO URGENTE:</span>
                </div>
                <p className="text-lg mb-2">Esta oferta é por tempo LIMITADO!</p>
                <p className="text-gray-400 max-w-lg mx-auto text-base md:text-lg">
                  O Cão Sem Stress tá fazendo tanto sucesso que adestradores estão ameaçando derrubar o projeto.
                  Se você ainda vê essa página ativa, APROVEITA. Depois pode não voltar.
                </p>
              </div>
              
              <Button className="shine-btn w-full sm:w-auto py-5 px-6 md:py-6 md:px-8 text-base md:text-lg rounded-xl animate-pulse-glow overflow-hidden whitespace-normal bg-[#4CAF50] hover:bg-[#45a049]">
                QUERO O CÃO SEM STRESS™ – R$27 NO PIX
              </Button>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-dog-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm">Compra 100% segura</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-dog-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm">Acesso imediato</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-dog-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm">Transformação garantida</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-6 rounded-xl border border-red-500/20 opacity-0 animate-slide-in [animation-delay:0.2s]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                <span>NÃO É PRA VOCÊ SE:</span>
              </h3>
              <ul className="space-y-3">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-dog-primary/20 opacity-0 animate-slide-in [animation-delay:0.3s]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-dog-primary" />
                <span>É PRA VOCÊ SE:</span>
              </h3>
              <ul className="space-y-3">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-dog-primary mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl text-center opacity-0 animate-slide-in [animation-delay:0.4s]">
            <blockquote className="text-lg md:text-2xl italic mb-8">
              "Tu não tem um cachorro problema. Tu tem falta de método.
              Agora a solução tá aqui.
              Ou tu muda a tua vida, ou continua sendo palhaço na mão do latido.
              Decide logo, miserável."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
