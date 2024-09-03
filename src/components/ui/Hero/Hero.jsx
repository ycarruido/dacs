import NavLink from "../NavLink/NavLink";
import SVGAnimationn from "../../SVGAnimation";

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
                        <NavLink
                            href="/contact"
                            className="text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900"
                        >
                            Contáctanos Hoy
                        </NavLink>
                        <NavLink
                            href="#cta"
                            className="text-gray-700 border hover:bg-gray-50"
                            scroll={false}
                        >
                            Leer Más
                        </NavLink>
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

