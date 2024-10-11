
import Footer from '../components/ui/Footer/Footer';
import '../styles/globals.css';
import Navbar from '../components/ui/Navbar/Navbar';
import BackToTopButton from '../components/ui/BackToTopButton/BackToTopButton';

import {
  Poppins
} from 'next/font/google'

const poppins = Poppins({
  weight:["300","400","500","700"],
  style: ["italic","normal"],
  subsets:["latin"]
})

export const metadata = {
  title: 'DACSystems - Desarrollo de Aplicaciones, Sitios Web, Infraestructura, Marketing y Finanzas - ¡Contáctanos!',
  description: 'Somos su socio de confianza para el Desarrollo de Aplicaciones y Sitios Web Personalizados, Servicios de Infraestructura y Soporte, Marketing Digital y Servicios Financieros. Nuestro equipo de expertos está aquí para ayudarlo a alcanzar sus objetivos de negocio. ¡Contáctanos hoy para una consulta gratuita!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  )
}