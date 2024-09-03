"use client"
import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper";
import wapps01 from '@/public/img/wapps01.svg';
import wps01 from '@/public/img/wps01.svg'
import mkgs01 from '@/public/img/mkgs01.svg'
import movs01 from '@/public/img/movs01.svg'


const Services = () => {

  const services = [
    {
      // srcImage: (
      //   <svg width="200px"fill="#0c4a6e" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#0c4a6e" strokeWidth="0.6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L11,20 L11,4 Z M12,4 L12,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L12,4 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,5.5 Z M5.5,7 C5.22385763,7 5,6.77614237 5,6.5 C5,6.22385763 5.22385763,6 5.5,6 L9.5,6 C9.77614237,6 10,6.22385763 10,6.5 C10,6.77614237 9.77614237,7 9.5,7 L5.5,7 Z M5.5,9 C5.22385763,9 5,8.77614237 5,8.5 C5,8.22385763 5.22385763,8 5.5,8 L8.5,8 C8.77614237,8 9,8.22385763 9,8.5 C9,8.77614237 8.77614237,9 8.5,9 L5.5,9 Z M5.5,11 C5.22385763,11 5,10.7761424 5,10.5 C5,10.2238576 5.22385763,10 5.5,10 L9.5,10 C9.77614237,10 10,10.2238576 10,10.5 C10,10.7761424 9.77614237,11 9.5,11 L5.5,11 Z M5.5,13 C5.22385763,13 5,12.7761424 5,12.5 C5,12.2238576 5.22385763,12 5.5,12 L8.5,12 C8.77614237,12 9,12.2238576 9,12.5 C9,12.7761424 8.77614237,13 8.5,13 L5.5,13 Z"></path> </g></svg>
      // ),
      srcImage: wapps01,
      title: "Desarrollo web",
      desc: "Creamos aplicaciones web que permiten a las empresas optimizar sus procesos internos, gestionar datos en tiempo real y ofrecer experiencias interactivas a sus usuarios. ",
    },
    {
      srcImage: movs01,
      title: "Desarrollo Móvil",
      desc: "Aplicaciones móviles ágiles y personalizadas que le ayudan a potenciar su negocio. Estas soluciones le permiten crear aplicaciones personalizadas para llegar a una audiencia más amplia.",
    },
    {
      srcImage: wps01,
      title: "Páginas Web",
      desc: "Diseño y desarrollo de páginas web personalizadas y optimizadas para SEO, con una navegación intuitiva y estética profesional.",
    },
    {
      srcImage: mkgs01,
      title: "Marketing",
      desc: "Estrategias digitales que combinan SEO, campañas publicitarias y marketing en redes sociales para impulsar la visibilidad de tu negocio",
    }
  ];


  return (
<SectionWrapper id="services900" className="pt-6 pb-12">
  <div className="container mx-auto px-8">
    <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
      Soluciones que ofrecemos
    </p>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 cursor-pointer">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md group"
        >
          <div className="flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <Image src={service.srcImage} alt={service.title} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-900">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</SectionWrapper>
  );
};

export default Services;