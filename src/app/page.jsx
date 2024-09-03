import Head from "next/head";
import StyledWrapper from "../components/StyledWrapper";
import ButtonCTA from "../components/ui/ButtonCTA/ButtonCTA";
import Services from "../components/ui/Services/Services";
import FooterCTA from "../components/ui/ActionCall/ActionCall";
import Hero from "../components/ui/Hero/Hero";
import ListTools from "../components/ui/ListTools/ListTools";
import Testimonials from "../components/ui/Testimonials/Testimonials";
import DevelopmentStrategy from "../components/ui/DevelopmentStrategy/DevelopmentStrategy";
import About from "@/components/ui/About/About";

function HomePage() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero />


      <Services />
      <ListTools />
      {/* <StyledWrapper className="bg-slate-500 py-12">
        
        <div >
          
        </div>
      </StyledWrapper> */}

      <ButtonCTA />
      <DevelopmentStrategy />

      <About />

      {/* <StyledWrapper>
        <Testimonials />
      </StyledWrapper> */}
      <FooterCTA />
    </>
  );
}

export default HomePage;
