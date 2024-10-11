"use client";
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón cuando se hace scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Función para volver arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-2 rounded-full cursor-pointer text-white text-xs bg-sky-950 hover:bg-sky-800 active:bg-sky-900 transition duration-300 z-50 flex items-center justify-center"
      >
        Ir arriba
      </div>
    )
  );
};

export default BackToTopButton;
