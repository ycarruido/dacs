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
          En un entorno donde la tecnología avanza rápidamente, las empresas
          necesitan soluciones digitales que no solo sean funcionales, sino que
          también se adapten al crecimiento y los cambios del mercado. Para
          lograrlo, nos enfocamos en aplicar una estrategia de desarrollo ágil,
          basada en una colaboración cercana con nuestros clientes.
        </p>
      </div>

      {/* Análisis de Requerimientos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            1. Análisis de Requerimientos y Planificación
          </h2>
          <p className="mb-4">
            Todo proyecto exitoso comienza con una planificación detallada y un
            análisis profundo de los requerimientos. Antes de escribir una sola
            línea de código, trabajamos de la mano con nuestros clientes para
            entender a fondo sus objetivos, problemas y necesidades.{" "}
            <strong>¿Qué hacemos en esta fase?</strong>
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Entrevistas con los clientes: Nos tomamos el tiempo para conocer tus metas, el público al que te diriges y los retos que estás enfrentando.",
              "Identificación de las funcionalidades clave: Analizamos las funciones esenciales que debe tener la solución para cumplir con las expectativas y maximizar su utilidad.",
              "Planificación del alcance: Definimos los entregables, el tiempo estimado de desarrollo y los recursos necesarios, asegurando que todo esté alineado con los objetivos del proyecto.",
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
              src="/img/análisisRequerimientos.webp"
              alt="Análisis de Requerimientos"
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
            2. Diseño de Prototipos y Pruebas de Concepto
          </h2>
          <p className="mb-4">
            Una vez que se han definido los requerimientos, el siguiente paso es
            traducir las ideas en algo tangible. Aquí es donde entran los
            prototipos y las pruebas de concepto, que nos permiten visualizar
            cómo se verá y funcionará la solución final antes de pasar a la fase
            de desarrollo completo.
            <strong>¿Qué beneficios aporta esta etapa?</strong>
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Validación temprana del diseño: Presentamos varias opciones visuales de cómo podría verse la solución, permitiendo que el cliente vea con claridad las diferentes posibilidades.",
              "Ajustes sobre la marcha: Si algo no se alinea con lo esperado, es más fácil y económico hacer ajustes en esta fase.",
              "Pruebas de usabilidad iniciales: En algunos casos, realizamos pruebas rápidas con usuarios reales para validar la funcionalidad y obtener retroalimentación sobre el diseño propuesto.",
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
              src="/img/disenodeprototipos.webp"
              alt="Diseño de Prototipos"
              className="w-full mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Desarrollo Ágil*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            3. Desarrollo Ágil con Iteraciones Continuas
          </h2>
          <p className="mb-4">
            La metodología ágil es el corazón de nuestra estrategia de
            desarrollo. En lugar de esperar hasta el final para presentar una
            solución completa, dividimos el proyecto en iteraciones o sprints.
            Esto significa que desarrollamos, probamos y entregamos pequeñas
            partes del proyecto de forma continua.
            <strong>¿Cómo funciona esta metodología?</strong>
          </p>

          <ul className="space-y-2 pb-6">
            {[
              "Sprints cortos y enfocados: Cada iteración tiene una duración definida, normalmente entre 1 y 4 semanas. En ese tiempo, trabajamos en un conjunto específico de funciones o mejoras.",
              "Revisión continua: Al final de cada sprint, presentamos lo que hemos desarrollado al cliente para su revisión y retroalimentación, asegurando que vamos en la dirección correcta.",
              "Flexibilidad para adaptarse a cambios: La gran ventaja de esta metodología es que podemos ajustar el proyecto en función de los nuevos requisitos o cambios en el mercado, sin que esto afecte significativamente el tiempo de entrega.",
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
              src="/img/agile_development.webp"
              alt="Desarrollo Ágil"
              className="w-full mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Integración y Pruebas Exhaustivas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        {/* Descripción del servicio a la izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            4. Integración y Pruebas Exhaustivas
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
            5. Implementación y Soporte Continuo
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
              src="/img/diseñodeprototipos.webp"
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
