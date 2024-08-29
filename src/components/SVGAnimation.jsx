"use client"
import React, { useEffect, useState } from 'react';

const SVGAnimation = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Una breve pausa para asegurarse de que los estilos se hayan aplicado
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100); // Ajusta el tiempo si es necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-white-50 to-purple-500">
      <svg
        viewBox="0 0 700 500"
        className={`container ${isReady ? 'visible' : 'invisible'}`}
      >
        <style jsx>{`
          .invisible {
            opacity: 0;
          }
          .visible {
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
          }

          .block {
            rx: 15;
            ry: 15;
            stroke-width: 3;
            opacity: 0;
            animation: fadeInScale 1.2s ease-in-out forwards;
          }

          .block-phase1 { fill: #64b5f6; stroke: #42a5f5; }
          .block-phase2 { fill: #1e88e5; stroke: #1976d2; }
          .block-phase3 { fill: #4fc3f7; stroke: #29b6f6; }
          .block-phase4 { fill: #039be5; stroke: #0288d1; }
          .block-phase5 { fill: #81d4fa; stroke: #4fc3f7; }

          .block-uxui { fill: #0d47a1; }
          .block-nextjs { fill: #212121; }
          .block-tailwind { fill: #0288d1; }
          .block-prisma { fill: #1b1f23; }
          .block-vercel { fill: #0d47a1; }

          .text1, .text2, .column-title {
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            text-anchor: middle;
            opacity: 0;
            animation: fadeIn 1s ease-in-out forwards;
            font-weight: 700;
            dominant-baseline: middle;
          }

          .text1 { fill: #000000; }
          .text2 { fill: #ffffff; }

          @keyframes fadeInScale {
            0% {
              transform: scale(0.8) translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: scale(1) translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes cycleAnimation {
            0%, 50%, 100% {
              opacity: 1;
            }
            98%, 100% {
              opacity: 0.7;
            }
          }

          .container {
            animation: cycleAnimation 15s infinite;
            position: relative;
          }

          .column-1 .block, .column-1 .text1 {
            animation-delay: calc(0.8s * var(--i));
          }

          .column-2 .block, .column-2 .text2 {
            animation-delay: calc(0.8s * (var(--i) + 5));
          }

          .pattern-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.4;
            animation: movePattern 12s linear infinite;
          }

          @keyframes movePattern {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(60px);
            }
          }
        `}</style>

        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2" fill="#444" />
          </pattern>
        </defs>

        <rect className="pattern-background" x="0" y="0" width="700" height="500" fill="url(#dots)" />

        <text className="column-title" x="190" y="50">Enfoque de Proceso</text>
        <text className="column-title" x="510" y="50">Opciones de Desarrollo</text>

        <g className="column-1">
          <rect className="block block-phase1" x="10" y="400" width="330" height="70" style={{ "--i": 0 }} />
          <text className="text1" x="175" y="435" style={{ "--i": 0 }} dominantBaseline="middle">Investigación y Planificación</text>

          <rect className="block block-phase2" x="10" y="330" width="330" height="70" style={{ "--i": 1 }} />
          <text className="text1" x="175" y="365" style={{ "--i": 1 }} dominantBaseline="middle">Diseño del Prototipo</text>

          <rect className="block block-phase3" x="10" y="260" width="330" height="70" style={{ "--i": 2 }} />
          <text className="text1" x="175" y="295" style={{ "--i": 2 }} dominantBaseline="middle">Desarrollo Ágil</text>

          <rect className="block block-phase4" x="10" y="190" width="330" height="70" style={{ "--i": 3 }} />
          <text className="text1" x="175" y="225" style={{ "--i": 3 }} dominantBaseline="middle">Pruebas y Control de Calidad</text>

          <rect className="block block-phase5" x="10" y="120" width="330" height="70" style={{ "--i": 4 }} />
          <text className="text1" x="175" y="155" style={{ "--i": 4 }} dominantBaseline="middle">Despliegue y Optimización Continua</text>
        </g>

        <g className="column-2">
          <rect className="block block-uxui" x="360" y="400" width="330" height="70" style={{ "--i": 0 }} />
          <text className="text2" x="510" y="435" style={{ "--i": 0 }} dominantBaseline="middle">Diseño UX/UI</text>

          <rect className="block block-nextjs" x="360" y="330" width="330" height="70" style={{ "--i": 1 }} />
          <text className="text2" x="510" y="365" style={{ "--i": 1 }} dominantBaseline="middle">Next.js / React.js / Angular</text>

          <rect className="block block-tailwind" x="360" y="260" width="330" height="70" style={{ "--i": 2 }} />
          <text className="text2" x="510" y="295" style={{ "--i": 2 }} dominantBaseline="middle">Tailwind / Bootstrap / Material UI</text>

          <rect className="block block-prisma" x="360" y="190" width="330" height="70" style={{ "--i": 3 }} />
          <text className="text2" x="510" y="225" style={{ "--i": 3 }} dominantBaseline="middle">Prisma / MySQL / Firebase</text>

          <rect className="block block-vercel" x="360" y="120" width="330" height="70" style={{ "--i": 4 }} />
          <text className="text2" x="510" y="155" style={{ "--i": 4 }} dominantBaseline="middle">Vercel / Netlify / AWS</text>
        </g>
      </svg>
    </div>
  );
};

export default SVGAnimation;
