import React from "react";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import MenuIcon from "@mui/icons-material/Menu";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import WindowIcon from "@mui/icons-material/Window";
import { Link } from "@mui/material";

import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";
import Strategys from "../../../components/ui/Strategys/Strategys";

function WebDev() {
  return (
    <div className="container mx-auto py-12 px-8">
      {/* Título principal */}
      <div className="text-left mb-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
          Diseño Web
        </p>
        <p className="mt-4 text-gray-600">
          Servicio especializado en el desarrollo y mantenimiento de sitios web
          (Sitios web públicos y privados). Estos son diseñados y desarrolladas
          siguiendo las mejores practicas, utilizando tecnología de ultima
          generación. Obtén presencia mundial e impulsa el crecimiento de tu
          negocio.
        </p>
      </div>
      {/* Título principal */}
      {/* <div className="text-left mb-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-10">
          Elegantes y Atractivos
        </p>
      </div> */}

      {/* Emprendedores */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        <div className="flex flex-col justify-center">
          <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-1">
            Emprendedores
          </p>
          <h6 className="text-l mb-2 text-gray-600 pb-6">
            Sencillos e Intuitivos
          </h6>
          <p className="mb-4">
            <strong>Impulsa tu negocio con una web que crece contigo.</strong>{" "}
            Sabemos que cada pequeño negocio tiene una gran historia detrás, por
            eso diseñamos sitios web que reflejan tu esencia. Desde el primer
            día, tu sitio estará listo para ayudarte a conectar con clientes,
            mostrar lo mejor de tus productos o servicios, y crecer a la par de
            tu emprendimiento. Tu sitio web será tu mejor carta de presentación,
            flexible, accesible y fácil de actualizar, para que puedas enfocarte
            en lo más importante: hacer crecer tu negocio.
          </p>
          <Link
            href="/contact"
            className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
          >
            Contáctanos
          </Link>
        </div>

        {/* Simulación de laptop a la derecha */}
        <div className="bg-white p-6 rounded-2xl border-2 border-gray-300">
          <div className="flex flex-col items-left text-left rounded-md bg-white p-4 text-gray-700 border-2 border-sky-900 border-opacity-99 relative w-full h-full">
            {/* Contenido de la pantalla de la laptop */}
            <h1 className="text-xl font-semibold py-4">Emprendedores</h1>
            <ul className="space-y-2 overflow-y-auto h-60">
              {" "}
              {/* Ajusta la altura y añade desplazamiento */}
              {/* Espaciado entre elementos de la lista */}
              {[
                "Diseño Atractivo",
                "Descripción de Servicios o Productos",
                "Formulario de Contacto",
                "Integración con Redes Sociales",
                "Sección de Nosotros",
                "Galería de Productos o Servicios",
                "Testimonios de Clientes",
                "Optimización para Móviles",
                "Sección de Noticias",
                "SEO Básico",
                "Integración con Google Maps",
                "Actualización de Contenidos",
                "Call to Action (CTA)",
                "Preguntas Frecuentes (FAQ)",
                "Seguridad SSL",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-2"
                >
                  <span className="pr-10">{item}</span>
                  <DoneAllIcon className="text-sky-600" />
                  {/* Ícono de Material UI */}
                </li>
              ))}
            </ul>

            {/* Parte inferior que simula la barra de tareas de la laptop */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 text-white bg-sky-950 rounded-b-md">
              <WindowIcon fontSize="small" />

              <div className="flex items-center space-x-2">
                <WifiIcon fontSize="small" />
                <BatteryFullIcon fontSize="small" />
                <span className="text-sm">12:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Empresarial */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        <div className="flex flex-col justify-center">
          <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-1">
            Empresarial
          </p>
          <h6 className="text-l mb-2 text-gray-600 pb-6">
            Modernos y Funcionales
          </h6>
          <p className="mb-4">
            <strong>Diseño que proyecta profesionalismo y confianza.</strong>Tu
            sitio web es la primera impresión que muchos clientes tendrán de tu
            empresa. Por eso, creamos páginas con un enfoque corporativo que
            transmiten la solidez, experiencia y calidad de tu marca. Cada
            detalle está pensado para reflejar tu identidad empresarial, con un
            diseño limpio y elegante que no solo atraerá a nuevos clientes, sino
            que reforzará la confianza de quienes ya te conocen.
          </p>
          <Link
            href="/contact"
            className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
          >
            Cuéntanos sobre tu proyecto
          </Link>
        </div>

        {/* Simulación de laptop a la derecha */}
        <div className="bg-white p-6 rounded-2xl border-2 border-gray-300">
          <div className="flex flex-col items-left text-left rounded-md bg-white p-4 text-gray-700 border-2 border-sky-900 border-opacity-99 relative w-full h-full">
            {/* Contenido de la pantalla de la laptop */}
            <h1 className="text-xl font-semibold py-4">Empresarial</h1>
            <ul className="space-y-2 overflow-y-auto h-60">
              {" "}
              {/* Ajusta la altura y añade desplazamiento */}
              {/* Espaciado entre elementos de la lista */}
              {[
                "Diseño Personalizado",
                "Sección Nosotros",
                "Listado de Servicios o Productos",
                "Formulario de Contacto",
                "Integración con Google Maps",
                "Sección de Blog o Noticias",
                "Portafolio",
                "Testimonios de Clientes",
                "Preguntas Frecuentes (FAQ)",
                "Integración con Redes Sociales",
                "Optimización para Móviles",
                "Certificados y Reconocimientos",
                "SEO Optimizado",
                "Call to Action (CTA)",
                "Sección de Equipo o Empleados",
                "Seguridad SSL",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-2"
                >
                  <span className="pr-10">{item}</span>
                  <DoneAllIcon className="text-sky-600" />
                  {/* Ícono de Material UI */}
                </li>
              ))}
            </ul>

            {/* Parte inferior que simula la barra de tareas de la laptop */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 text-white bg-sky-950 rounded-b-md">
              <WindowIcon fontSize="small" />

              <div className="flex items-center space-x-2">
                <WifiIcon fontSize="small" />
                <BatteryFullIcon fontSize="small" />
                <span className="text-sm">12:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* eCommerce */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6">
        <div className="flex flex-col justify-center">
          <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-1">
            Ecommerce
          </p>
          <h6 className="text-l mb-2 text-gray-600 pb-6">
            Elegantes y Atractivos
          </h6>
          <p className="mb-4">
            <strong>Vende más con un diseño pensado para convertir.</strong> El
            éxito de una tienda online no solo depende de lo que vendes, sino de
            cómo lo muestras. Diseñamos sitios de eCommerce que no solo son
            visualmente atractivos, sino que están optimizados para guiar a tus
            clientes hacia la compra de manera intuitiva. Desde una navegación
            ágil hasta un proceso de pago seguro y fácil, cada paso está
            enfocado en ofrecer una experiencia de compra amigable.
          </p>
          <Link
            href="/contact"
            className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center w-60"
          >
            Solicita tu consulta gratuita
          </Link>
        </div>

        {/* Simulación de laptop a la derecha */}
        <div className="bg-white p-6 rounded-2xl border-2 border-gray-300">
          <div className="flex flex-col items-left text-left rounded-md bg-white p-4 text-gray-700 border-2 border-sky-900 border-opacity-99 relative w-full h-full">
            {/* Contenido de la pantalla de la laptop */}
            <h1 className="text-xl font-semibold py-4">Ecommerce</h1>
            <ul className="space-y-2 overflow-y-auto h-60">
              {" "}
              {/* Ajusta la altura y añade desplazamiento */}
              {/* Espaciado entre elementos de la lista */}
              {[
                "Diseño Personalizado",
                "Catálogo de Productos",
                "Carrito de Compras",
                "Métodos de Pago",
                "Gestión de Inventario",
                "Sistema de Opiniones y Valoraciones",
                "Optimización para Móviles",
                "Función de Búsqueda",
                "Ofertas y Descuentos",
                "Wishlist o Lista de Deseos",
                "Integración con Redes Sociales",
                "Seguimiento de Pedidos",
                "SEO Optimizado",
                "Autenticación y Perfiles de Usuario",
                "Boletines Informativos",
                "Seguridad SSL",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-2"
                >
                  <span className="pr-10">{item}</span>
                  <DoneAllIcon className="text-sky-600" />
                  {/* Ícono de Material UI */}
                </li>
              ))}
            </ul>

            {/* Parte inferior que simula la barra de tareas de la laptop */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2 text-white bg-sky-950 rounded-b-md">
              <WindowIcon fontSize="small" />

              <div className="flex items-center space-x-2">
                <WifiIcon fontSize="small" />
                <BatteryFullIcon fontSize="small" />
                <span className="text-sm">12:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 pt-10 pb-5">
        <ServicesCTA
          strText="Antes de desarrollar la interfaz final, los diseñadores crean varias opciones visuales de una pantalla para que los clientes puedan ver cómo lucirá la aplicación y escoger el estilo que más les guste. Estas propuestas suelen variar en aspectos como colores, tipografías y elementos gráficos. Si el cliente cuenta con un manual de identidad, este se toma como base para asegurar que el diseño refleje la marca."
          strQ="¿Necesitas una web que destaque tu negocio?"
          strBtn="Obtenga asesoramiento"
          bgColor="bg-sky-900"
        />
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
        path="/devStrategy"
      />


    </div>
  );
}

export default WebDev;
