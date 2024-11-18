"use client";

import Link from "next/link";

const tools = [
  {
    id: 1,
    name: "Calculadora de Criptomonedas",
    description: "Calcula y convierte precios de criptomonedas fácilmente.",
    link: "/coinCalculator",
    status: "PRD", // Estado: PRD
  },
  {
    id: 2,
    name: "Gestor de Tareas",
    description: "Organiza tus pendientes y mejora tu productividad.",
    link: "/task-manager",
    status: "TEST", // Estado: TEST
  },
  {
    id: 3,
    name: "Conversor de Unidades",
    description: "Convierte unidades de medida con precisión.",
    link: "/unit-converter",
    status: "TEST", // Estado: PRD
  },
];

export default function SoftLab() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2 text-left">
          Herramientas y Utilidades
        </h1>
        <p className="text-left text-gray-700 mb-8">
          Explora nuestras aplicaciones desarrolladas para facilitar tu día a
          día. ¡Haz clic para usarlas!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`bg-white shadow-md rounded-lg p-6 transition-shadow relative ${
                tool.status === "TEST" ? "bg-gray-200" : ""
              }`}
            >
              {tool.status === "TEST" && (
                <div className="absolute inset-0 bg-gray-500 opacity-30 rounded-lg flex justify-center items-center">
                </div>
              )}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {tool.name}
              </h2>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              {tool.status === "PRD" ? (
                <Link
                  href={tool.link}
                  className="text-yellow-700 font-medium hover:text-yellow-950"
                >
                  Ir a herramienta →
                </Link>
              ) : (
                <span className="text-sky-900 font-medium">En desarrollo</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}