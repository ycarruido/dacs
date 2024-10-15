import React from "react";
import Link from "next/link";

const Portfolio = () => {
  // Arreglo de proyectos
  const projects = [
    {
      prdId: "01",
      title: "Portal Interno Multilingüe en SharePoint",
      description:
        "Desarrollamos un portal interno global en SharePoint Framework (SPFx) con un diseño personalizado en inglés y español, enfocado en mejorar la colaboración y facilitar el acceso a recursos corporativos de la organización.",
      features: [
        {
          str1: "Diseño personalizado para mejorar la experiencia del usuario.",
          str2: "Implementación de comunicaciones internas y flujo de trabajo.",
          str3: "Adaptación del portal para un uso global, Ingles - Espanol.",
        },
      ],
      imageUrl: "/img/Portfolio_Spfx_web01.webp"
    },
    {
      prdId: "02",
      title: "Aplicación Web de Gestión de Proyectos en Angular y Node",
      description:
        "Desarrollamos una aplicación de gestión de proyectos con Angular, Node.js y desplegada en Firebase. Esta herramienta permite gestionar, asignar y seguir el progreso de proyectos académicos de manera eficiente.",
      features: [
        {
          str1: "Gestión completa de proyectos: crear, modificar y eliminar tareas.",
          str2: "Asignación de usuarios a proyectos para facilitar la colaboración.",
          str3: "Seguridad avanzada, con control exclusivo para administradores.",
        },
      ],
      imageUrl: "/img/Portfolio_Angular_app01.webp"
    },
    {
        prdId: "02",
        title: "Aplicación Móvil de Gestión de Proyectos en Angular y Node",
        description:
          "Desarrollamos una aplicación de gestión de proyectos con Angular, Ionic, Node.js. Esta herramienta permite gestionar, asignar y seguir el progreso de proyectos académicos de manera eficiente.",
        features: [
          {
            str1: "Gestión completa de proyectos: crear, modificar y eliminar tareas.",
            str2: "Asignación de usuarios a proyectos para facilitar la colaboración.",
            str3: "Seguridad avanzada, con control exclusivo para administradores.",
          },
        ],
        imageUrl: "/img/Portfolio_AngularIonic_app01.webp"
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
            className="flex flex-col md:flex-row items-center mb-8 border rounded-lg shadow-lg overflow-hidden bg-gray-100 border-cyan-500"
          >
            <div className="w-full md:w-1/2 p-10 flex justify-center">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 border-cyan-500">
              <h3 className="text-3xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-700 mb-4">Característica principales</p>
              {project.features.map((feature, index) => (
                <div key={index}>
                  <ul className="list-disc list-outsite mx-5 my-3 text-gray-700 mb-4">
                    <li>
                      <span>{feature.str1}</span>
                    </li>
                    <li>
                      <span>{feature.str2}</span>
                    </li>
                    <li>
                      <span>{feature.str3}</span>
                    </li>
                  </ul>
                </div>
              ))}
              <p className="text-gray-700 mb-4">{project.resume}</p>
              {/* <Link
                href="#"
                className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
              >
                Leer más
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
