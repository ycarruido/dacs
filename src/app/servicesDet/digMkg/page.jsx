import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";
import Strategys from "../../../components/ui/Strategys/Strategys";
import NavLink from '../../../components/ui/NavLink/NavLink'


function DigMkg() {
  return (
    <div className="container mx-auto px-8 py-2">

      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="No basta con atraer visitas, lo que necesitas son clientes potenciales. En nuestro servicio de marketing, no solo nos enfocamos en que tu sitio web tenga más tráfico, sino en convertir esas visitas en leads reales. A través de estrategias de SEO para mejorar tu posicionamiento, campañas SEM para resultados inmediatos y técnicas de CRO para optimizar la experiencia del usuario."
          strQ="¿Quieres más que solo clics?"
          strBtn="Obtenga asesoramiento"
          bgColor="bg-sky-900"
        />
      </div>

      <header className="text-left mb-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
          ¡Esto realmente funciona!
        </p>
        <p className="text-lg mt-4">
          En un mundo digital donde cada clic cuenta, destacar no es solo una
          opción, ¡es una necesidad!
        </p>
      </header>

      <section className="bg-gray-100 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-medium text-left">¿Por qué elegirnos?</h2>
        <p className="text-lg text-left mt-4">
          Nuestra misión es transformar tu presencia digital y llevar tu negocio
          al siguiente nivel. Con estrategias personalizadas, te ayudamos a
          convertirte en un referente en tu sector.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* SEO Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src="/img/seo-icon.webp"
            alt="SEO"
            className="w-full mx-auto mb-4 rounded-2xl"
          />
          <h3 className="text-black text-2xl font-medium">SEO</h3>
          <h4 className="font-medium mb-2">
            Optimización para Motores de Búsqueda
          </h4>
          <p className="mb-4">
            Aparecer en los primeros resultados de Google es fundamental para
            que tus clientes te encuentren. Con nuestras estrategias de SEO,
            optimizamos cada rincón de tu página web.
          </p>
          <h5 className="font-semibold">¿Cómo te ayudamos?</h5>
          <ul className="list-disc list-inside mt-2">
            <li>Investigación de palabras clave.</li>
            <li>SEO local para atraer clientes cercanos.</li>
            <li>Creación de contenido relevante.</li>
          </ul>
        </div>
        {/* SEM Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src="/img/sem-icon.webp"
            alt="SEM"
            className="w-full mx-auto mb-4 rounded-2xl"
          />
          <h3 className="text-black text-2xl font-medium">SEM</h3>
          <h4 className="font-medium mb-2">
            Publicidad en Motores de Búsqueda
          </h4>
          <p className="mb-4">
            Si buscas resultados inmediatos, el SEM es tu camino a seguir.
            Creamos campañas publicitarias que te colocan frente a tus clientes
            potenciales.
          </p>
          <h5 className="font-semibold">¿Cómo te ayudamos?</h5>
          <ul className="list-disc list-inside mt-2">
            <li>Anuncios dirigidos a la intención de compra.</li>
            <li>Remarketing para captar clientes interesados.</li>
            <li>Segmentación avanzada.</li>
          </ul>
        </div>
        {/* CRO Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src="/img/cro-icon.webp"
            alt="CRO"
            className="w-full mx-auto mb-4 rounded-2xl"
          />
          <h3 className="text-black text-2xl font-medium">CRO</h3>
          <h4 className="font-medium mb-2">
            Optimización de la Tasa de Conversión
          </h4>
          <p className="mb-4">
            Tener tráfico en tu web es solo la mitad del trabajo; lo esencial es
            convertir esas visitas en clientes. Mejoramos la experiencia del
            usuario para transformar curiosos en compradores.
          </p>
          <h5 className="font-semibold">¿Cómo te ayudamos?</h5>
          <ul className="list-disc list-inside mt-2">
            <li>Optimización de landing pages.</li>
            <li>Pruebas A/B para decisiones informadas.</li>
            <li>Formularios simplificados.</li>
          </ul>
        </div>
      </div>

      <section className="bg-gray-100 p-8 rounded-lg mb-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
          ¡Hablemos!
        </p>
        <p className="text-lg text-left">
          Con nuestra combinación de estrategias, no solo atraerás más
          tráfico, sino que también convertirás a esos visitantes en clientes
          fieles. Estamos aquí para ayudarte a alcanzar el éxito.
        </p>
            <NavLink
              href="/contact"
              className="inline-block mt-4 font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 px-6 py-3 rounded-md"
            >
              Contáctanos Hoy
            </NavLink>
      </section>


      <Strategys
        strTitle="Estrategia de Marketing Digital"
        strsubtitle="Trabajamos de manera ágil y colaborativa con nuestros clientes para desarrollar estrategias de marketing personalizadas que impulsen el crecimiento de su negocio. Desde la investigación inicial hasta la optimización continua, nos aseguramos de que cada etapa esté diseñada para generar leads y maximizar el ROI."
        strText={[
          "Análisis de mercado y definición de objetivos",
          "Investigación de palabras clave y análisis de competencia",
          "Desarrollo de campañas SEM",
          "Optimización continua (CRO)",
          "Monitoreo y ajuste de estrategias",
        ]}
        strBtn="Leer más"
        path="/devStrategy"
      />


    </div>
  );
}

export default DigMkg;
