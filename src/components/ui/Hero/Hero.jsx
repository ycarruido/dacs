import Link from "next/link";
import SVGAnimation from "../../SVGAnimation";

const Hero = () => (
  <section
    className="sm:mb-2 md:mb-24 lg:mb-24 flex items-center"
    style={{ height: "calc(100vh - 150px)" }}
  >
    <div className="flex w-full px-4 md:px-20 mx-auto h-full">
      {/* Columna izquierda (60% en pantallas grandes) */}
      <div className="w-full md:w-1/2 text-left space-y-5 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl text-gray-950 font-medium sm:text-7xl">
          Soluciones tecnológicas
        </h1>
        <p className="max-w-xl">
          Obtén presencia en línea de primera clase y automatiza tus procesos
          internos con nuestras soluciones: Desarrollo Web • Desarrollo de Apps
          • Infraestructura • Soporte
        </p>
        <div className="flex flex-col md:flex-row items-center justify-start gap-x-3 font-medium text-sm">
          <Link
            href="/contact"
            className="menu block w-full md:w-auto font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 px-4 py-2 rounded-lg text-center"
          >
            Contáctanos Hoy
          </Link>
          <Link
            href="/servicesDet/appDev"
            className="menu block w-full md:w-auto font-medium text-gray-700 border bg-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg text-center mt-2 md:mt-0"
            scroll={false}
          >
            Leer Más
          </Link>
        </div>
      </div>
      
      <div className="hidden md:block md:w-1/2 h-full items-center justify-center"> 
      {/* <div className="hidden md:flex md:w-1/2 h-full items-center justify-center"> */}
        <SVGAnimation />
      </div>
    </div>
  </section>
);

export default Hero;
