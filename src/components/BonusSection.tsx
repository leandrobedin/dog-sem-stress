
import React from 'react';
import { Gift, Check } from 'lucide-react';

const bonuses = [
  {
    id: 1,
    title: 'Receita Caseira de Petisco Calmante Premium',
    description: 'Uma fórmula secreta, natural, que reduz a ansiedade do seu pet em minutos. Feita com ingredientes simples de mercado — resultado rápido e seguro.',
    value: 'R$47'
  },
  {
    id: 2,
    title: 'Guia de Rotina de 7 Minutos Pra Cães Ansiosos',
    description: 'Passo a passo diário ultra-rápido pra transformar o comportamento do seu cachorro em casa, mesmo que você tenha 0 tempo livre. Ideal pra quem trabalha, estuda e não tem hora nem pra mijar.',
    value: 'R$67'
  },
  {
    id: 3,
    title: 'Playlist Sonora Anti-Estresse Canino',
    description: 'Playlist exclusiva de músicas com frequências sonoras específicas para relaxar cães nervosos. Só dar play e ver seu pet derreter no sofá.',
    value: 'R$37'
  },
  {
    id: 4,
    title: 'Mini Guia "Comandos Essenciais para Obediência Rápida"',
    description: 'Ensine 5 comandos básicos (Sentar, Ficar, Vir, Deitar e Parar) em menos de 1 semana. Sem precisar pagar adestrador caro.',
    value: 'R$57'
  },
  {
    id: 5,
    title: 'Acesso VIP à Comunidade Secreta do Cão Sem Stress™ (Telegram)',
    description: 'Grupo exclusivo para donos comprometidos: Dicas semanais, Atualizações de protocolo, Resolução de dúvidas ao vivo.',
    value: 'R$97'
  }
];

const BonusSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-dog-darkAlt to-dog-dark">
      <div className="section-wrapper">
        <h2 className="section-title mb-8">
          🎁 Bônus Exclusivos Você Recebe HOJE
        </h2>
        
        <div className="relative mb-8">
          <div className="absolute top-0 right-0 -translate-y-1/2 rotate-12 bg-red-600 text-white px-4 py-2 rounded-lg font-bold z-10 shadow-lg text-lg">
            Valor Total: R$305
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="glass-card p-6 md:p-8 rounded-xl border border-dog-primary/20 hover:border-dog-primary/50 transition-all duration-300 relative overflow-hidden opacity-0 animate-slide-in group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-dog-primary/30 to-dog-secondary/30 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                  <Gift className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Bônus {bonus.id}: {bonus.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold line-through text-gray-500">{bonus.value}</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-medium">HOJE GRÁTIS</span>
                  </div>
                  <p className="text-gray-300">{bonus.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-6 rounded-xl bg-gradient-to-r from-dog-primary/30 to-dog-secondary/30 max-w-2xl mx-auto text-center">
          <p className="text-xl font-bold mb-2">Valor TOTAL dos bônus: <span className="line-through">R$305</span></p>
          <p className="text-2xl font-bold text-gradient animate-pulse">HOJE TUDO GRÁTIS!</p>
          <p className="mt-4 text-gray-300">Ao adquirir o Cão Sem Stress™ agora</p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
