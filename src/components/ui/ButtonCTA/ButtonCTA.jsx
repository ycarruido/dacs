import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink/NavLink";

const ButtonCTA = () => {
  return (
    <SectionWrapper id="cta" className="bg-black w-full">
      <div className="custom-screen">
        <div className="flex flex-col-reverse items-center gap-x-6 lg:flex-row lg:gap-x-12 pb-4 lg:pb-4">
          <div className="flex-1 mt-6 lg:mt-0 lg:max-w-lg">
            <ul className="mt-6 space-y-4 text-white text-sm md:text-base lg:text-lg list-outside pl-6">
              <li className="flex items-start space-x-2">
                <span className="text-xl">→</span>
                <span>
                  <strong>Eficiencia Operativa</strong>: Optimiza los procesos y
                  reduce costos mediante la automatización y el uso de nuevas
                  tecnologías.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-xl">→</span>
                <span>
                  <strong>Innovación Continua</strong>: Facilita la adopción de
                  nuevas herramientas y metodologías, manteniéndote competitivo
                  en el mercado.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-xl">→</span>
                <span>
                  <strong>Mejora en la Toma de Decisiones</strong>: Acceso a
                  datos en tiempo real que te permiten tomar decisiones basadas
                  en información precisa y actualizada.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:max-w-2xl text-center lg:text-left">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              Transforma tu negocio
            </p>
            <p className="mt-3 text-white text-base sm:text-sm md:text-base lg:text-lg">
              Aprovecha la Potencia de una Aplicación Diseñada a Medida
            </p>
            <NavLink
              href="/contact"
              className="inline-block mt-4 font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 px-6 py-3 rounded-md"
            >
              Solicita hoy mismo
            </NavLink>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ButtonCTA;
