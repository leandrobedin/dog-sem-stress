
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <footer className="w-full py-10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <img 
            src="https://i.ibb.co/995Cg1cz/dog0222.webp" 
            alt="Cachorro calmo e tranquilo" 
            className="w-full max-w-xs rounded-xl shadow-lg mb-8"
          />
          
          <Button 
            className="shine-btn w-full md:w-auto text-base md:text-lg py-4 px-6 md:py-6 md:px-8 rounded-xl animate-pulse-glow bg-green-500 hover:bg-green-600"
            onClick={scrollToPricing}
          >
            QUERO MUDAR A VIDA DO MEU CÃO AGORA
          </Button>
        </div>
      
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Cão Sem Stress™. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
