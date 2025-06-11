// components/LoadingScreen.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Predefined positions/sizes to avoid random values during SSR
  const backgroundElements = [
    { width: 133, height: 163, left: 59, top: 59 },
    { width: 352, height: 236, left: 13, top: 29 },
    { width: 219, height: 357, left: 3, top: 36 },
    { width: 349, height: 373, left: 30, top: 85 },
    { width: 103, height: 199, left: 76, top: 75 }
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center z-[9999]"
    >

    

      {/* Animated progress bar */}
      <div className="w-64 h-1.5 bg-gray-700 rounded-full overflow-hidden mb-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 2.5,
            ease: 'easeInOut'
          }}
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
        />
      </div>

      {/* Animated text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center"
      >
        <motion.p 
          className="text-lg font-medium text-gray-300 mb-1"
          animate={{
            textShadow: [
              '0 0 8px rgba(96, 165, 250, 0)',
              '0 0 8px rgba(96, 165, 250, 0.5)',
              '0 0 8px rgba(96, 165, 250, 0)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          Loading Portfolio
        </motion.p>
        <p className="text-sm text-gray-400">
          Preparing your experience...
        </p>
      </motion.div>

      {/* Subtle animated background elements - only render on client */}
      {isClient && backgroundElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            opacity: [0, 0.1, 0],
            scale: 1.5
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: `${el.width}px`,
            height: `${el.height}px`,
            left: `${el.left}%`,
            top: `${el.top}%`,
          }}
        />
      ))}
    </motion.div>
  );
}