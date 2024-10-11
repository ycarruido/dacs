import Link from "next/link";
import SVGAnimationn from "../../SVGAnimation";

// import NavLink from "../NavLink/NavLink";
const Hero = () => (
    <section className="pb-4 mb-24 flex items-center" style={{ height: 'calc(100vh - 150px)' }}> {/* Contenedor con altura de pantalla y centrado */}
        {/* <div className="custom-screen py-10 text-gray-600 flex flex-col h-full bg-blue-500"> */}
            <div className="flex w-full px-20 mx-auto h-full"> {/* Ajusta la altura al contenedor */}
                {/* Columna izquierda (60%) */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-5 flex flex-col justify-center">
                    <h1 className="text-6xl text-gray-950 font-medium mx-auto sm:text-7xl">
                        Soluciones tecnológicas
                    </h1>
                    <p className="max-w-xl mx-auto md:mx-0">
                        Obtén presencia en línea de primera clase y automatiza tus procesos internos con nuestras soluciones: Desarrollo Web • Desarrollo de Apps • Infraestructura • Soporte
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-x-3 font-medium text-sm">
                        <Link
                            href="/contact" className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center"
                        >
                            Contáctanos Hoy
                        </Link>
                        <Link
                            href="#cta"
                            className="menu block font-medium  text-gray-700 border bg-gray-200 hover:bg-gray-50 md:inline-block px-4 py-2 rounded-lg text-center"
                            scroll={false}
                        >
                            Leer Más
                        </Link>
                    </div>
                </div>
                {/* Columna derecha (40%) */}
                <div className="hidden md:block md:w-1/2 h-full items-center justify-center"> {/* Ajustar la altura */}
                    <SVGAnimationn />
                </div>
            </div>
        {/* </div> */}
    </section>
);

export default Hero;

