
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="glass-card p-3 md:p-5 rounded-xl border border-dog-primary/30 bg-red-900/20 mb-8 w-full max-w-3xl mx-auto animate-pulse-slow">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <Clock className="w-6 h-6 text-red-500" />
          <span className="text-lg md:text-xl font-bold text-red-500">OFERTA LIMITADA:</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-black/40 p-2 rounded-lg flex items-center justify-center min-w-[60px]">
            <span className="text-xl md:text-2xl font-mono font-bold">{minutes.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xl md:text-2xl font-bold">:</span>
          <div className="bg-black/40 p-2 rounded-lg flex items-center justify-center min-w-[60px]">
            <span className="text-xl md:text-2xl font-mono font-bold">{seconds.toString().padStart(2, '0')}</span>
          </div>
          <span className="ml-3 text-lg md:text-xl font-medium">restantes para garantir seu acesso</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
