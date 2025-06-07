import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

import { Link } from "@mui/material";

import ServicesCTA from "../../components/ui/ServicesCTA/ServicesCTA";
import Strategys from "../../components/ui/Strategys/Strategys";

import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

function devStrategy() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="En DACS, nuestro enfoque en el desarrollo ágil, la planificación detallada y la colaboración cercana con los clientes nos permite crear soluciones escalables y personalizadas."
          strQ="¿Buscas automatizar un proceso?"
          strBtn="Obtenga asesoramiento"
          bgColor="bg-sky-900"
        />
      </div>

      {/* Título principal */}
      <div className="text-left mb-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
          Estrategia de Desarrollo
        </p>
        <p className="mt-4 text-gray-600">
          Nuestra estrategia de desarrollo se basa en un enfoque integral y flexible que acompaña a tu proyecto desde el primer contacto hasta su evolución continua. Entendemos que cada negocio es único, por eso trabajamos para entregar soluciones tecnológicas alineadas con tus objetivos reales, garantizando calidad, eficiencia y adaptabilidad. Combinamos metodologías ágiles, comunicación constante y un compromiso cercano para que cada etapa aporte valor tangible y te sientas respaldado durante todo el proceso.
        </p>
      </div>

      {/* Análisis de Requerimientos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            1. Entendimiento profundo de requerimientos y objetivos
          </h2>
          <p className="mb-4">
            Para crear soluciones que realmente funcionen, primero nos sumergimos en tu negocio y tus metas. No solo recopilamos datos, sino que buscamos entender el contexto y los retos que enfrentan tus usuarios. <strong>¿Qué hacemos en esta fase?</strong>
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Diálogo cercano contigo para captar los objetivos reales y prioridades de tu proyecto.",
              "Análisis del contexto y las problemáticas que la solución debe resolver para aportar valor.",
              "Definición clara de los criterios de éxito y expectativas para asegurar un rumbo alineado desde el inicio.",
            ].map((item, index) => (
              <li key={index} className="items-left justify-between flex gap-2">
                <ArrowRightAltIcon className="text-sky-800" />
                <span className="pr-10">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-col items-center text-center rounded-3xl bg-white p-2 text-gray-700 border-4 border-gray-700 border-opacity-50 w-full m-4">
            <img
              src="/img/entendimientoRequerimientos.webp"
              alt="Entendimiento profundo de requerimientos"
              className="w-full mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>


      {/* Diseño de Prototipos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
          {/* Descripción del servicio a la izquierda */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4">
              2. Diseño rápido de prototipos y validación de ideas
            </h2>
            <p className="mb-4">
              Transformamos ideas en modelos tangibles que puedes ver y probar rápido. Esto nos permite identificar ajustes necesarios y garantizar que el producto final cumpla con tus expectativas. <strong>¿Qué beneficios aporta esta etapa?</strong>
            </p>

            <ul className="space-y-2 pb-6">
              {[
                "Creación ágil de prototipos funcionales que reflejan la esencia de la solución propuesta.",
                "Validación temprana con usuarios y stakeholders para recoger feedback valioso y real.",
                "Reducción de riesgos al detectar problemas y mejorar conceptos antes del desarrollo completo.",
              ].map((item, index) => (
                <li key={index} className="items-left justify-between flex gap-2">
                  <ArrowRightAltIcon className="text-sky-800" />
                  <span className="pr-10">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex flex-col items-center text-center rounded-3xl bg-white p-2 text-gray-700 border-4 border-gray-700 border-opacity-50 w-full m-4">
              <img
                src="/img/disenodeprototipos.webp"
                alt="Diseño rápido de prototipos"
                className="w-full mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>


        {/* Desarrollo iterativo con foco en el valor real*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            3. Desarrollo iterativo con foco en el valor real
          </h2>
          <p className="mb-4">
            Nuestro desarrollo se basa en ciclos cortos que priorizan entregar funcionalidades que realmente aporten valor a tu negocio. Así, no solo avanzamos rápido, sino que garantizamos que cada entrega tenga un impacto tangible. <strong>¿Cómo funciona esta metodología?</strong>
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Ciclos de trabajo breves y claros, donde cada entrega está orientada a resolver necesidades específicas y prioritarias.",
              "Retroalimentación constante para ajustar y mejorar el producto según lo que realmente importa a los usuarios y al negocio.",
              "Flexibilidad para adaptarnos a cambios y nuevos requerimientos sin perder el foco en los resultados que generan valor real.",
            ].map((item, index) => (
              <li key={index} className="items-left justify-between flex gap-2">
                <ArrowRightAltIcon className="text-sky-800" />
                <span className="pr-10">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-col items-center text-center rounded-3xl bg-white p-2 text-gray-700 border-4 border-gray-700 border-opacity-50 w-full m-4">
            <img
              src="/img/agile_development.webp"
              alt="Desarrollo iterativo con foco en el valor real"
              className="w-full mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>


      {/* Integración continua y pruebas automatizadas. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            4. Integración continua y pruebas automatizadas.
          </h2>
          <p className="mb-4">
            La calidad del software es fundamental para el éxito de cualquier
            proyecto digital. Por eso, en DACS dedicamos tiempo y esfuerzo a las
            pruebas exhaustivas en cada etapa del proceso de desarrollo. No solo
            nos aseguramos de que cada funcionalidad trabaje como se espera,
            sino también de que todo el sistema funcione de manera integrada.
            <strong>¿Qué implica esta fase?</strong>
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Pruebas unitarias y funcionales: Cada componente se prueba individualmente para asegurarnos de que cumple con su función específica.",
              "Pruebas de integración: Nos aseguramos de que todos los componentes del sistema trabajen correctamente entre sí, sin conflictos o errores inesperados.",
              "Pruebas de rendimiento y seguridad: Evaluamos la capacidad de la solución para manejar altos volúmenes de tráfico y verificamos que todos los datos estén protegidos.",
            ].map((item, index) => (
              <li key={index} className="items-left justify-between">
                <ArrowRightAltIcon className="text-sky-800" />
                <span className="pr-10">{item}</span>{" "}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-col items-center text-center rounded-3xl bg-white p-2 text-gray-700 border-4 border-gray-700 border-opacity-50 w-full m-4">
            <img
              src="/img/pruebas_exhaustivas.webp"
              alt="Integración y Pruebas Exhaustivas"
              className="w-full mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Implementación y Soporte Continuo*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            5. Despliegue y Soporte Continuo
          </h2>
          <p className="mb-4">
            Una vez que la solución ha sido aprobada y está lista para ser
            utilizada, pasamos a la fase de implementación. Durante este
            proceso, ponemos en marcha la solución en el entorno de producción,
            asegurándonos de que todo funcione sin problemas.
            <strong>¿Cómo manejamos la implementación?</strong>
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Despliegue gradual: En algunos casos, hacemos una implementación por fases para minimizar los riesgos y asegurar que todo funcione correctamente en entornos reales.",
              "Capacitación al cliente: Ofrecemos sesiones de capacitación para asegurarnos de que el equipo del cliente se sienta cómodo utilizando la nueva solución.",
              "Soporte técnico continuo: Después de la implementación, no desaparecemos. Ofrecemos soporte continuo para resolver cualquier problema que pueda surgir y para realizar ajustes o mejoras según sea necesario.",
            ].map((item, index) => (
              <li key={index} className="items-left justify-between">
                <ArrowRightAltIcon className="text-sky-800" />
                <span className="pr-10">{item}</span>{" "}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-col items-center text-center rounded-3xl bg-white p-2 text-gray-700 border-4 border-gray-700 border-opacity-50 w-full m-4">
            <img
              src="/img/implementacion.webp"
              alt="Implementación y Soporte Continuo"
              className="w-full mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default devStrategy;
