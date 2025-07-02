import Head from "next/head";
import StyledWrapper from "../components/StyledWrapper";
import ButtonCTA from "../components/ui/ButtonCTA/ButtonCTA";
import Services from "../components/ui/Services/Services";
import FooterCTA from "../components/ui/ActionCall/ActionCall";
import Hero from "../components/ui/Hero/Hero";
import ListTools from "../components/ui/ListTools/ListTools";
import Testimonials from "../components/ui/Testimonials/Testimonials";
import Strategys from "../components/ui/Strategys/Strategys";
import About from "../components/ui/About/About";
import StatsSection from "../components/ui/StatsSection/StatsSection";
import FeaturesApps from "../components/ui/FeaturesApps/FeaturesApps";
//import Globe from "../components/Globe";
import ParticleBanner from "../components/ParticleBanner";

function HomePage() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>

      {/* <Globe /> */}
      <ParticleBanner />

      {/* <Hero /> */}
      
      <Services />
      <ListTools />
      <ButtonCTA />
      <StatsSection />
      <About />

      <Strategys
        strTitle="Estrategia de Desarrollo "
        strsubtitle="Colaboramos estrechamente con nuestros clientes para desarrollar soluciones tecnológicas escalables y personalizadas, desde la planificación hasta la implementación."
        strText={[
          "Entendimiento profundo de requerimientos y objetivos.",
          "Diseño rápido de prototipos y validación de ideas.",
          "Desarrollo iterativo con foco en el valor real.",
          "Integración continua y pruebas automatizadas.",
          "Despliegue y soporte evolutivo.",
        ]}
        strBtn="Leer más"
        path="devStrategy"
      />

      <div className="container mx-auto px-8 pb-12">
        <FeaturesApps />
      </div>

      {/* <FooterCTA /> */}
    </>
  );
}

export default HomePage;
