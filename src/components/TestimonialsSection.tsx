
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Em 5 dias meu cachorro já tava outro! Parou de destruir minhas coisas e até o síndico veio elogiar. Vale cada centavo.",
    name: "Paulo F.",
    location: "São Paulo/SP",
    icon: "🐕"
  },
  {
    text: "Achei que ia ter que me mudar, mas o Cão Sem Stress salvou minha pele! Agora meu dog dorme a noite toda.",
    name: "Vanessa L.",
    location: "Recife/PE",
    icon: "🐶"
  },
  {
    text: "Investi R$27 e economizei mais de R$3.000 em adestramento. Resultado visível já na primeira semana!",
    name: "Cláudio S.",
    location: "Curitiba/PR",
    icon: "🐕‍🦺"
  },
  {
    text: "Meu filhote de 6 meses tava impossível! Com o protocolo, em menos de 7 dias ele virou o cão dos meus sonhos. Recomendo de olhos fechados!",
    name: "Marina A.",
    location: "Belo Horizonte/MG",
    icon: "🐩"
  },
  {
    text: "Já tinha tentado vídeo do YouTube, apostila grátis, e nada funcionava. Esse método foi o único que realmente trouxe paz aqui em casa.",
    name: "Rodrigo M.",
    location: "Brasília/DF",
    icon: "🐾"
  },
  {
    text: "Além de parar de latir, meu cachorro ficou mais tranquilo até pra sair na rua. O método é simples e rápido, sem frescura.",
    name: "Isabela T.",
    location: "Porto Alegre/RS",
    icon: "🐶"
  },
  {
    text: "Valeu cada centavo. Achei que R$27 era pouco pra algo que mudasse de verdade, mas foi a melhor compra que fiz em 2025.",
    name: "Felipe V.",
    location: "Salvador/BA",
    icon: "🐕"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrev();
    }
  };

  const getVisibleTestimonials = () => {
    // For mobile, just show active testimonial
    // For larger screens, show active and surrounding testimonials
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return [testimonials[activeIndex]];
    } else {
      const result = [];
      for (let i = -1; i <= 1; i++) {
        const index = (activeIndex + i + testimonials.length) % testimonials.length;
        result.push({
          ...testimonials[index],
          position: i // -1 = left, 0 = center, 1 = right
        });
      }
      return result;
    }
  };

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="section-wrapper">
        <h2 className="section-title text-3xl md:text-4xl">
          👥 Veja Quem Já Transformou a Vida com o Cão Sem Stress™
        </h2>
        
        <div className="flex justify-center mb-6">
          <img 
            src="https://i.ibb.co/PG8Z7JkK/dog444.webp"
            alt="Donos felizes com cachorro calmo"
            className="w-full max-w-lg rounded-xl shadow-xl"
          />
        </div>
        
        <div 
          className="relative h-[450px] md:h-[350px] mt-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute left-0 top-0 bottom-16 right-0 flex items-center justify-center">
            {getVisibleTestimonials().map((testimonial, index) => {
              const position = 'position' in testimonial ? testimonial.position : 0;
              let positionClass = 'translate-x-0 scale-100 z-20 opacity-100';
              
              if (position === -1) {
                positionClass = '-translate-x-[calc(100%-3rem)] scale-95 z-10 opacity-70';
              } else if (position === 1) {
                positionClass = 'translate-x-[calc(100%-3rem)] scale-95 z-10 opacity-70';
              }

              return (
                <div 
                  key={`${testimonial.name}-${index}`}
                  className={`glass-card absolute w-full max-w-lg p-8 rounded-xl transition-all duration-500 ${positionClass}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl">{testimonial.icon}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg md:text-xl italic mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-dog-primary/30 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-dog-primary/20 hover:bg-dog-primary/30 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-dog-primary' : 'bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-dog-primary/20 hover:bg-dog-primary/30 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
