"use client";
import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";
import wapps01 from "../../../../public/img/wapps01.svg";
import wps01 from "../../../../public/img/wps01.svg";
import mkgs01 from "../../../../public/img/mkgs01.svg";
import movs01 from "../../../../public/img/movs01.svg";
import useRouter from "next/navigation";
import Link from "next/link";

const Services = () => {
  // const router = useRouter;

  // const handleNavigation = () => {
  //   router.push("/about");
  // };

  const services = [
    {
      srcImage: wapps01,
      title: "Desarrollo Apps web",
      subtitle: "Desarrollo Front-End | Back-end",
      desc: "Creamos aplicaciones web que permiten a las empresas optimizar sus procesos internos, gestionar datos en tiempo real y ofrecer experiencias interactivas a sus usuarios. ",
      path: "/servicesDet/appDev",
    },
    {
      srcImage: movs01,
      title: "Desarrollo Móvil",
      subtitle: "Android (Java/Kotlin) | iOS (Swift) | Cross-Platform",
      desc: "Aplicaciones móviles ágiles y personalizadas que le ayudan a potenciar su negocio. Estas soluciones le permiten crear aplicaciones personalizadas para llegar a una audiencia más amplia.",
      path: "/servicesDet/movDev",
    },
    {
      srcImage: wps01,
      title: "Diseño de Páginas Web",
      subtitle: "Diseño UI/UX | Diseño Responsivo",
      desc: "Diseño y desarrollo de páginas web personalizadas y optimizadas para SEO, con una navegación intuitiva y estética profesional.",
      path: "/servicesDet/webDev",
    },
    {
      srcImage: mkgs01,
      title: "Marketing",
      subtitle: "SEO | Google Ads y PPC | Email Marketing",
      desc: "Estrategias digitales que combinan SEO, campañas publicitarias y marketing en redes sociales para impulsar la visibilidad de tu negocio y generar leads",
      path: "/servicesDet/digMkg",
    },
  ];

  return (
    <SectionWrapper id="services900" className="pt-6 pb-12">
      <div className="container mx-auto px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
          Soluciones que ofrecemos
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 cursor-pointer">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md group"
            >
              <Link href={service.path}>
                <div className="flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#f5f6f8' }}>
                  <Image
                    src={service.srcImage}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <h6 className="text-l mb-2 text-gray-500">{service.subtitle}</h6>
                <p className="text-gray-900">{service.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
