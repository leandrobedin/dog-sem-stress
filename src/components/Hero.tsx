
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      // Parallax effect
      imageRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      <div className="container px-4 py-16 md:py-24 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
            <div className="mb-6 opacity-0 animate-slide-in [animation-delay:0.2s]">
              <span className="inline-block bg-gradient-to-r from-dog-primary to-dog-secondary rounded-full px-4 py-1 text-sm font-medium">
                🐶 CÃO SEM STRESS™
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left opacity-0 animate-slide-in [animation-delay:0.4s]">
              Elimine Latidos, Ansiedade e Destruição em <span className="text-gradient">Apenas 7 Dias</span> (Ou Menos)
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-center md:text-left opacity-0 animate-slide-in [animation-delay:0.6s]">
              Um método rápido, simples e direto para transformar seu cachorro descontrolado em um cão calmo e obediente
            </p>
            
            <div className="w-full flex justify-center md:justify-start opacity-0 animate-slide-in [animation-delay:0.5s] mb-8">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/TM5fQPWF/dog01.png" 
                  alt="Cachorro calmo e equilibrado" 
                  className="w-full max-w-md rounded-xl shadow-2xl animate-float"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-dog-primary to-dog-secondary p-3 rounded-lg shadow-lg transform rotate-3">
                  <span className="text-lg font-bold">7 Dias de Resultados</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8 opacity-0 animate-slide-in [animation-delay:0.8s]">
              <ul className="space-y-4">
                {["Sem pagar adestradores caros", "Sem usar medicamentos", "Sem precisar sair de casa"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-dog-primary flex-shrink-0" />
                    <span className="text-gray-300 text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-auto opacity-0 animate-slide-in [animation-delay:1s]">
              <Button 
                className="shine-btn w-full md:w-auto text-base py-5 px-6 md:py-6 md:px-8 rounded-xl animate-pulse-glow bg-green-500 hover:bg-green-600 whitespace-normal"
                onClick={scrollToPricing}
              >
                QUERO TRANSFORMAR MEU CÃO AGORA
              </Button>
            </div>
          </div>
          
          {/* Removing the placeholder div that was shown in the image */}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-dog-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
