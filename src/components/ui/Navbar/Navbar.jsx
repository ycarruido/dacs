    "use client";
    import Link from 'next/link'
    import { usePathname } from 'next/navigation'
    import { useEffect, useState } from 'react'
    import Brand from '../Brand/Brand'
    import NavLink from '../NavLink/NavLink'

    const Navbar = () => {
        const [state, setState] = useState(false);
        const pathname = usePathname(); // Usamos usePathname para observar cambios de ruta

        const navigation = [
            { title: "Home", path: "/" },
            { title: "Servicios", path: "#services900" },
            { title: "Equipo", path: "#testimonials0505" },
            { title: "Empresa", path: "#about901" },
            { title: "Blog", path: "#testimonials" }
        ];

        const smoothScroll = (event) => {
            event.preventDefault(); // Prevenir el comportamiento normal del enlace
        
            const targetId = event.currentTarget.getAttribute("href").substring(1); // Obtener el id del destino
            const targetElement = document.getElementById(targetId);
        
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth" // Desplazamiento suave
                });
            }
        };

        useEffect(() => {
            // Resetear el estado cuando la ruta cambia
            const handleState = () => {
                document.body.classList.remove("overflow-hidden");
                setState(false);
            };

            // Llamar la función cuando cambie el pathname
            handleState(); // Llamar la primera vez al renderizar el componente

            return () => {
                // Cleanup cuando se desmonta el componente
                handleState();
            };
        }, [pathname]); // Se ejecuta cada vez que cambia el pathname

        const handleNavMenu = () => {
            setState(!state);
            document.body.classList.toggle("overflow-hidden");
        };

        return (
            <header>
                <nav className={`bg-slate-50 w-full md:static md:text-sm ${state ? "fixed z-10 h-full" : ""}`}>
                    <div className="custom-screen items-center mx-auto md:flex">
                        <div className="flex items-center justify-between py-2">
                            <Brand />
                            <div className="md:hidden">
                                <button role="button" aria-label="Open the menu" className="text-gray-900 hover:text-gray-700"
                                    onClick={handleNavMenu}
                                >
                                    {
                                        state ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                        <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                            <ul className="menu text-gray-900 text-lg justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-900">
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx} className="duration-150 hover:text-gray-500">
                                                <Link
                                                    href={item.path}
                                                    className="block"
                                                    scroll={true}
                                                    onClick={smoothScroll}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <NavLink
                                        href="/contact"
                                        className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline"
                                    >
                                        Contacto
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

    export default Navbar;