import NavLink from "@/components/ui/NavLink/NavLink";
import SectionWrapper from "@/components/SectionWrapper";

function About() {
  return (
    <SectionWrapper id="about901" className="bg-black w-full">
      <div className="custom-screen">
        <div className="flex flex-col lg:flex-row py-6">
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            {" "}
            {/* 40% de ancho en pantallas grandes */}
            <p className="text-white text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
              Acerca de la empresa →
            </p>
          </div>

          <div className="flex-1 mt-6 lg:mt-0 lg:w-3/5">
            {" "}
            {/* 60% de ancho en pantallas grandes */}
            <p className="text-white">
              DACS es una empresa de desarrollo con el objetivo de ofrecer
              servicios integrales en desarrollo de aplicaciones, desarrollo
              web, marketing. Nuestros profesionales les brindaran soluciones
              prácticas a sus necesidades
            </p>
            <ul className="mt-6 space-y-4 text-white text-sm md:text-base lg:text-lg list-outside pl-6">
              <li className="flex items-start space-x-2">
                <span className="text-xl">→</span>
                <span>
                  <strong>Propósito</strong>: Impulsar el futuro de tu empresa
                  hacia un bienestar sostenible.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-xl">→</span>
                <span>
                  <strong>Misión</strong>: Nuestra misión es ofrecer soluciones
                  integrales en materia de desarrollo de aplicaciones,
                  desarrollo web y marketing para satisfacer las necesidades
                  únicas de cada uno de nuestros clientes.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-xl">→</span>
                <span>
                  <strong>Visión</strong>: Nuestra visión es convertirnos en
                  líderes en tecnologías y plataformas digitales. Estamos
                  comprometidos con la excelencia para ofrecerles resultados
                  óptimos a nuestros clientes.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;