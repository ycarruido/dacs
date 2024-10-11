import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink/NavLink"

const ActionCall = () => (
    <SectionWrapper className="bg-gradient-to-t from-gray-950 via-gray-800 to-sky-950 py-10">
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-white text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
                  ¡Acelere su éxito!
                </h2>
                <p className="mt-3 text-white">
                  Diseño Profesional para una Experiencia Web Inigualable
                </p>
                <NavLink
                    href="/contact"
                    className="mt-4 inline-block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900"
                >
                    Conéctate con nosotros
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default ActionCall