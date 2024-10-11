import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

import { Link } from "@mui/material";

import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";
import Strategys from "../../../components/ui/Strategys/Strategys";

import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

function MovDev() {
  return (
    <div className="container mx-auto py-12 px-8">
      {/* Título principal */}
      <div className="text-left mb-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
          Desarrollo Móvil
        </p>
        <p className="mt-4 text-gray-600">
          Creamos aplicaciones móviles que funcionan de forma nativa en su
          dispositivo, de modo que pueda interactuar en tiempo real y offline,
          desarrolladas bajo lenguajes de programación y entornos de desarrollo
          específicos. Trabajamos cada día en mejorar los procesos, para
          mantenernos actualizados y ofrecerle los servicios de desarrollo de
          aplicaciones móviles que se adapten a su negocio
        </p>
      </div>

      {/* iOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">iOS (Swift)</h2>
          <p className="mb-4">
            Desarrollamos apps nativas para iOS con Swift, el lenguaje oficial
            de Apple. Nuestras aplicaciones están optimizadas para el ecosistema
            de iOS, aprovechando al máximo el hardware y software de los
            dispositivos Apple.
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Aprovechamiento total del ecosistema de Apple",
              "Compatibilidad con las últimas versiones de iOS",
              "Optimización para iPhone y iPad",
            ].map((item, index) => (
              <li key={index} className="items-left justify-between">
                <ArrowRightAltIcon className="text-sky-800" />
                <span className="pr-10">{item}</span>{" "}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
          >
            Conversa con nosotros
          </Link>
        </div>
        {/* Simulación de teléfono a la derecha */}
        <div className="flex flex-col items-center text-center rounded-3xl bg-white p-10 text-gray-700 border-4 border-gray-700 border-opacity-90 relative">
          {/* Parte superior que simula la pantalla del teléfono */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 bg-gray-200 rounded-t-3xl">
            <span className="text-sm">12:45</span>
            <div className="flex items-center space-x-2">
              <BatteryFullIcon fontSize="small" />
              <WifiIcon fontSize="small" />
              <SignalCellularAltIcon fontSize="small" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold py-10">iOS</h1>

          <div className="w-20 h-20 mr-4">
            <svg
              viewBox="-1.5 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>apple [#374151]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-102.000000, -7439.000000)"
                    fill="#374151"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                        id="apple-[#374151]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Android */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Android (Java/Kotlin)</h2>
          <p className="mb-4">
            Desarrollamos aplicaciones Android adaptadas a cualquier necesidad,
            enfocándonos en los detalles y aprovechando al máximo las
            capacidades del sistema operativo. Nuestros desarrolladores aseguran
            que tu app sea compatible con una amplia gama de dispositivos, para
            que todos tus usuarios disfruten de una experiencia de alta calidad,
            sin importar el dispositivo que utilicen
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Compatibilidad con múltiples versiones de Android",
              "Diseño adaptable",
              "Optimización para rendimiento fluido",
            ].map((item, index) => (
              <li key={index} className="items-left justify-between">
                <ArrowRightAltIcon className="text-sky-800" />
                <span className="pr-10">{item}</span>{" "}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
          >
            Conversa con nosotros
          </Link>
        </div>
        {/* Simulación de teléfono a la derecha */}
        <div className="flex flex-col items-center text-center rounded-3xl bg-white p-10 text-gray-700 border-4 border-lime-600 border-opacity-90 relative">
          {/* Parte superior que simula la pantalla del teléfono */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 bg-gray-200 rounded-t-3xl">
            <span className="text-sm">12:24</span>
            <div className="flex items-center space-x-2">
              <BatteryFullIcon fontSize="small" />
              <WifiIcon fontSize="small" />
              <SignalCellularAltIcon fontSize="small" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold py-10">Android</h1>

          <div className="w-20 h-20 mr-4">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z"
                  fill="#87C527"
                ></path>{" "}
                <path
                  d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z"
                  fill="#87C527"
                ></path>{" "}
                <path
                  d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z"
                  fill="#87C527"
                ></path>{" "}
                <path
                  d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z"
                  fill="#87C527"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Cross-Platform */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Cross-Platform</h2>
          <p className="mb-4">
            Ofrecemos desarrollo de aplicaciones multiplataforma para que tanto
            startups como empresas consolidadas puedan obtener aplicaciones
            móviles eficientes y de alto rendimiento, reduciendo tiempos y
            simplificando el proceso de desarrollo.
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Código único para Android e iOS",
              "Ahorro en costos y tiempo de desarrollo",
              "Experiencia uniforme en ambas plataformas",
            ].map((item, index) => (
              <li key={index} className="items-left justify-between">
                <ArrowRightAltIcon className="text-sky-800" />
                <span className="pr-10">{item}</span>{" "}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
          >
            Conversa con nosotros
          </Link>
        </div>
        {/* Simulación de teléfono a la derecha */}
        <div className="flex flex-col items-center text-center rounded-3xl bg-white p-10 text-gray-700 border-4 border-gray-500 border-opacity-90 relative">
          {/* Parte superior que simula la pantalla del teléfono */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 bg-gray-200 rounded-t-3xl">
            <span className="text-sm">12:24</span>
            <div className="flex items-center space-x-2">
              <BatteryFullIcon fontSize="small" />
              <WifiIcon fontSize="small" />
              <SignalCellularAltIcon fontSize="small" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold py-10">Cross-Platform</h1>

          <div className="w-20 h-20 mr-4">
            <svg
              viewBox="-1.5 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>apple [#374151]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-102.000000, -7439.000000)"
                    fill="#374151"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                        id="apple-[#374151]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>

          <div className="w-20 h-20 mr-4">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z"
                  fill="#87C527"
                ></path>{" "}
                <path
                  d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z"
                  fill="#87C527"
                ></path>{" "}
                <path
                  d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z"
                  fill="#87C527"
                ></path>{" "}
                <path
                  d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z"
                  fill="#87C527"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pt-10 pb-5">
        <ServicesCTA
          strText="Antes de desarrollar la interfaz final, los diseñadores crean varias opciones visuales de una pantalla para que los clientes puedan ver cómo lucirá la aplicación y escoger el estilo que más les guste. Estas propuestas suelen variar en aspectos como colores, tipografías y elementos gráficos. Si el cliente cuenta con un manual de identidad, este se toma como base para asegurar que el diseño refleje la marca."
          strQ="¿Buscas una app móvil para tu negocio?"
          strBtn="Obtenga asesoramiento"
          bgColor="bg-sky-900"
        />
      </div>

      <Strategys
        strTitle="Estrategia de Desarrollo "
        strsubtitle="Enfocados en una metodología ágil, colaboramos estrechamente con nuestros clientes para desarrollar soluciones tecnológicas escalables y personalizadas, desde la planificación hasta la implementación."
        strText={[
          "Análisis de requerimientos y planificación.",
          "Diseño de prototipos y pruebas de concepto.",
          "Desarrollo ágil con iteraciones continuas.",
          "Integración y pruebas exhaustivas.",
          "Implementación y soporte continuo.",
        ]}
        strBtn="Leer más"
        path="/devStrategy"
      />
    </div>
  );
}

export default MovDev;
