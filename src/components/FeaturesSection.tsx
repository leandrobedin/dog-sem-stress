
import React from 'react';
import { CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Protocolo diário de técnicas simples",
      description: "Aprenda exatamente o que fazer a cada dia para transformar o comportamento do seu pet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Atividades rápidas para acalmar e disciplinar",
      description: "Exercícios de 15-20 minutos que qualquer pessoa consegue aplicar",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Receita caseira de petisco calmante",
      description: "Prepare petiscos naturais que ajudam a reduzir a ansiedade do seu cachorro",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Checklist passo a passo",
      description: "Nunca fique perdido com nosso guia detalhado dia a dia",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const results = [
    "Casa em paz novamente",
    "Cachorro mais calmo, feliz e controlado",
    "Adeus latidos sem sentido",
    "Adeus destruição de móveis e sapatos",
    "Fim da ansiedade e da hiperatividade"
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-dog-darkAlt">
      <div className="section-wrapper">
        <h2 className="section-title">
          🎯 O Que é o CÃO SEM STRESS™?
        </h2>
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300">
            É o plano de emergência para donos desesperados que querem resultados rápidos e eficientes:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl flex gap-6 group hover:bg-dog-primary/10 transition-all duration-300 opacity-0 animate-slide-in"
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <div className="h-16 w-16 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0 group-hover:bg-dog-primary/30 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="section-title">
            📈 Resultados Que Você Vai Ter
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl flex gap-4 items-center hover:bg-dog-primary/10 transition-all duration-300 opacity-0 animate-slide-in"
                style={{animationDelay: `${0.15 * index}s`}}
              >
                <CheckCircle className="h-6 w-6 text-dog-primary flex-shrink-0" />
                <span className="text-lg">{result}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24">
          <h2 className="section-title">
            🧠 Por Que Funciona?
          </h2>
          
          <div className="glass-card p-8 md:p-12 rounded-xl max-w-3xl mx-auto opacity-0 animate-slide-in">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-medium">Baseado em técnicas validadas de recondicionamento canino.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-medium">Focado na realidade de quem trabalha, estuda e não tem tempo de ser adestrador.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-medium">Aplicação de 15 a 20 minutos por dia.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 bg-dog-primary/20 rounded-full flex items-center justify-center text-dog-primary flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-medium">Sem teoria Nutella, só prática pesada que dá resultado.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
