import React from "react";
import Link from "next/link";

const Portfolio = () => {
  // Arreglo de proyectos
  const projects = [
    {
      title: "Cross-device Video on Demand Platform",
      description:
        "Video streaming platform for movie renting and purchasing with multi-platform access. Blockbuster is a leading service in the Nordic countries and has 500,000+ subscribers.",
      imageUrl: "/img/webDev.png", // Asegúrate de tener esta imagen en la carpeta public/images
    },
    {
      title: "Quality Management System Compliant with FDA and ISO",
      description:
        "Modernization of B2B SaaS solution to check compliance with the FDA and conformance to ISO for medical devices’ production, and MDSAP for device manufacturing.",
      imageUrl: "/img/webDev.png", // Asegúrate de tener esta imagen en la carpeta public/images
    },
    {
      title: "Transportation Management System with Route Planning",
      description:
        "TMS for the logistics company with automated route planning and delivery points management modules. The solution's integration with the existing LMS.",
      imageUrl: "/img/webDev.png", // Asegúrate de tener esta imagen en la carpeta public/images
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2 text-left">
          Nuestros proyectos recientes
        </p>
        <p className="text-left text-gray-700 mb-8">
          Aquí te mostramos algunos de nuestros proyectos más recientes y
          destacados.
        </p>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-8 border rounded-lg shadow-lg overflow-hidden bg-gray-100"
          >
            <div className="w-full md:w-1/2 p-10 flex justify-center">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <Link
                href="/"
                className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
              >
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
