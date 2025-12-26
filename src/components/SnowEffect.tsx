import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; x: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      size: 2 + Math.random() * 6,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, Math.sin(flake.id) * 20],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
