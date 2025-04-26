
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProblemsSection from '../components/ProblemsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import BonusSection from '../components/BonusSection';
import Footer from '../components/Footer';
import CountdownTimer from '../components/CountdownTimer';

const Index = () => {
  useEffect(() => {
    // Meta Pixel Code - Facebook tracking
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.defer = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/pt_BR/fbevents.js');

    // Use optional chaining to safely call fbq functions
    window.fbq?.('init', '2722539714571248', {
      em: 'insert_email_variable' // Optional for advanced matching
    });
    window.fbq?.('track', 'PageView');
    window.fbq?.('track', 'ViewContent');

    // Intersection Observer to animate sections as they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    // Observe all elements with opacity-0 class
    document.querySelectorAll('.opacity-0').forEach((el) => {
      observer.observe(el);
    });

    // Add no-script Facebook tracking pixel
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = "https://www.facebook.com/tr?id=2722539714571248&noscript=1";
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    return () => {
      observer.disconnect();
      if (document.body.contains(noscript)) {
        document.body.removeChild(noscript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <CountdownTimer />
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <BonusSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
