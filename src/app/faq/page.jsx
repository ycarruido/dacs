"use client";
import { useState } from "react";
import Strategys from '../../components/ui/Strategys/Strategys'

// Estructura de preguntas y respuestas
const faqs = [
  {
    section: "Quiénes somos",
    items: [
      {
        question: "¿Qué es DACS?",
        answer: "DACS es una empresa especializada en desarrollo de aplicaciones, desarrollo web y marketing. Nuestro objetivo es ofrecer soluciones tecnológicas integrales que impulsen el crecimiento sostenible de cada cliente.",
      },
      {
        question: "¿Cuál es el propósito de DACS?",
        answer: "Nuestro propósito es impulsar el futuro de las empresas mediante soluciones tecnológicas que promuevan un bienestar sostenible, ayudando a nuestros clientes a crecer en el mundo digital.",
      },
      {
        question: "¿Qué nos diferencia de otras empresas de desarrollo?",
        answer: "Trabajamos estrechamente con cada cliente para ofrecer soluciones que realmente se ajusten a sus necesidades específicas, garantizando resultados de calidad y a tiempo.",
      },
    ],
  },
  {
    section: "Nuestros valores",
    items: [
      {
        question: "¿Qué valores guían a DACS?",
        answer: "Nos guiamos por la innovación, la excelencia y el compromiso con nuestros clientes. Creemos en ofrecer soluciones que no solo sean eficientes, sino que también impulsen un crecimiento sostenible a largo plazo.",
      },
      {
        question: "¿Cómo aseguran la calidad en DACS?",
        answer: "En cada proyecto nos comprometemos con la excelencia. Nuestro equipo se enfoca en cada detalle para garantizar que los resultados sean óptimos, desde el desarrollo hasta la implementación y soporte continuo.",
      },
      {
        question: "¿Cómo se refleja el compromiso con el cliente en su trabajo?",
        answer: "Mantenemos una comunicación abierta y cercana con nuestros clientes, trabajando de la mano en cada etapa del proyecto. Nuestra prioridad es que sus objetivos se cumplan de manera efectiva y sostenible.",
      },
    ],
  },
  {
    section: "Equipo",
    items: [
      {
        question: "¿Quién forma parte del equipo de DACS?",
        answer: "Nuestro equipo está formado por profesionales especializados en desarrollo de software, diseño web, y marketing digital. Cada miembro aporta su experiencia y conocimientos para ofrecer soluciones innovadoras y efectivas.",
      },
      {
        question: "¿Cómo se gestiona el trabajo en DACS?",
        answer: "Trabajamos con una metodología ágil, lo que nos permite ser flexibles y adaptarnos a los cambios y necesidades del cliente a lo largo del proyecto. Esto asegura una entrega rápida y eficiente.",
      },
      {
        question: "¿Qué nivel de experiencia tiene el equipo de DACS?",
        answer: "Contamos con un equipo de expertos con años de experiencia en sus respectivas áreas. Desde programadores hasta especialistas en marketing digital, todos están capacitados para brindar soluciones de alta calidad.",
      },
    ],
  },
  {
    section: "Clientes",
    items: [
      {
        question: "¿Con qué tipo de empresas trabaja DACS?",
        answer: "Trabajamos con todo tipo de empresas, desde pequeñas startups hasta compañías consolidadas. Nos adaptamos a las necesidades de cada cliente, independientemente de su tamaño o sector.",
      },
      {
        question: "¿Cómo entiende DACS las necesidades de sus clientes?",
        answer: "Nos tomamos el tiempo para conocer a fondo los objetivos y retos de cada cliente. Ofrecemos soluciones personalizadas y ajustadas a sus necesidades particulares, ya sea en desarrollo de software, marketing digital o ambos.",
      },
      {
        question: "¿Podemos tener reuniones presenciales?",
        answer: "Sí, podemos coordinar reuniones presenciales o virtuales según tus necesidades. La flexibilidad es clave para nosotros.",
      },
      {
        question: "¿Cuál es la relación de DACS con sus clientes a largo plazo?",
        answer: "En DACS buscamos relaciones a largo plazo basadas en la confianza y el compromiso. Ofrecemos soporte continuo para asegurar que las soluciones que implementamos sigan siendo efectivas con el tiempo.",
      },
    ],
  },
  {
    section: "Áreas de servicio",
    items: [
      {
        question: "¿En qué regiones ofrece DACS sus servicios?",
        answer: "Prestamos servicios a nivel local e internacional. No importa dónde se encuentre tu empresa, estamos preparados para apoyarte en el desarrollo de soluciones digitales y marketing.",
      },
      {
        question: "¿DACS se especializa en algún sector en particular?",
        answer: "Aunque trabajamos con empresas de diversas industrias, tenemos amplia experiencia en sectores como tecnología, comercio electrónico y servicios empresariales.",
      },
      {
        question: "¿DACS ofrece servicios tanto a startups como a empresas consolidadas?",
        answer: "Sí, trabajamos con empresas de todos los tamaños. Ofrecemos soluciones adaptadas a las necesidades y presupuestos tanto de startups como de empresas ya establecidas.",
      },
    ],
  },
  {
    section: "Garantías",
    items: [
      {
        question: "¿Qué garantías ofrece DACS en sus servicios?",
        answer: "Nos comprometemos con la calidad y la satisfacción de nuestros clientes. Garantizamos que todos los proyectos se entregan a tiempo y cumplen con los más altos estándares de calidad.",
      },
      {
        question: "¿Qué sucede si hay un problema después de la entrega?",
        answer: "Ofrecemos soporte continuo después de la entrega del proyecto. Estamos aquí para asegurarnos de que todo funcione perfectamente y resolver cualquier problema que pueda surgir.",
      },
      {
        question: "¿Cómo asegura DACS el cumplimiento de los plazos de entrega?",
        answer: "Utilizamos una metodología ágil que nos permite adaptarnos rápidamente a cualquier cambio y garantizar que los proyectos se entreguen dentro del plazo acordado.",
      },
    ],
  },
  {
    section: "Soluciones de software que brindamos",
    items: [
      {
        question: "¿Qué tipos de soluciones desarrolla DACS?",
        answer: "Nos especializamos en desarrollo de aplicaciones móviles, plataformas web y soluciones de marketing digital. Diseñamos cada solución para ajustarse a las necesidades específicas de tu negocio.",
      },
      {
        question: "¿Cómo se asegura DACS de que las soluciones de software sean escalables?",
        answer: "Nuestros desarrollos están pensados para crecer junto con tu empresa. Desde la arquitectura inicial, aseguramos que las plataformas puedan adaptarse a futuros cambios y expansiones.",
      },
      {
        question: "¿DACS ofrece soluciones integradas de marketing y desarrollo?",
        answer: "Sí, brindamos un enfoque integral que combina el desarrollo tecnológico con estrategias de marketing digital como SEO, SEM y CRO, para maximizar el impacto y retorno de inversión de nuestros clientes.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (sectionIdx, itemIdx) => {
    const index = `${sectionIdx}-${itemIdx}`; // Crear un índice único
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2 text-left">
          ¿Tienes alguna duda?
        </p>
        <p className="text-left text-gray-700 mb-8">
          Descubre nuestras preguntas frecuentes sobre DACS: quiénes somos,
          nuestros valores, equipo, clientes, áreas de servicio, garantías y las
          soluciones de software que brindamos.
        </p>

        <div className="text-gray-700">
          {faqs.map((section, sectionIdx) => (
            <div
              key={sectionIdx}
              className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <h2 className="text-2xl mb-4">{section.section}</h2>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="mb-4">
                  <button
                    onClick={() => toggleFAQ(sectionIdx, itemIdx)}
                    className="w-full text-left p-4 bg-white rounded-lg shadow focus:outline-none"
                  >
                    <span className="font-semibold">{item.question}</span>
                  </button>
                  {activeIndex === `${sectionIdx}-${itemIdx}` && (
                    <div className="mt-2 text-gray-700 p-4 bg-blue-50 rounded-lg transition-all duration-300 ease-in-out">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
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
        path="/"
      />
    </section>
  );
};

export default FAQ;
