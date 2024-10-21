import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

    const socialNetworks = [
        { Icon: XIcon, href: "https://x.com/dacsoftware", fontSize: 20},
        { Icon: InstagramIcon, href: "https://www.instagram.com/dacsoftware", fontSize: 24},
        // { Icon: FacebookIcon, href: "#", fontSize: 24},
    ];

const Footer = () => (
  <footer className="w-full bg-gray-950 text-gray-200">
      <div className="custom-screen pt-16 m-0 w-full">
        

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="py-4 rounded">
                    <h2 className="text-md font-medium">ENCUÉNTRANOS</h2>
                    <p className="text-sm font-light">DACS. Servicios especializados que utilizan tecnologías avanzadas como HTML5, CSS, Angular, Node.js, React, Next.js y SharePoint. Desarrollamos aplicaciones web altamente productivas y compatibles con todas las plataformas y dispositivos, con interfaces optimizadas para el usuario final, gestión eficiente de datos e integración robusta del servidor, garantizando aplicaciones más rápidas y con mayor valor.</p>
                    <ul className="text-md pt-2 font-light list-none space-y-2">
                        <li className="flex items-center">
                            <span className="mr-2 text-sky-300">→</span>
                            <a target="_blank" href="https://wa.me/5804141700657" className="hover:underline text-sky-300">WhatsApp</a>
                        </li>
                        {/* <li className="flex items-center">
                            <span className="mr-2 text-sky-300">→</span>
                            <a target="_blank" href="https://wa.me/5804141700657" className="hover:underline text-sky-300">contacto@dacsystem.com</a>
                        </li> */}
                    </ul>

                </div>

                <div className="p-4 rounded">
                    <h2 className="text-md font-medium">SERVICIOS</h2>
                    <ul className="text-sm font-light list-disc pl-5">
                        <li>Desarrollo web</li>
                        <li>Desarrollo Móvil</li>
                        <li>Páginas Web</li>
                        <li>Marketing</li>
                    </ul>

                </div>

                <div className="p-4 rounded">
                    <h2 className="text-md font-medium">CONTACTO</h2>
                    <ul className="text-sm font-light list-disc pl-5">
                        <li>WhatsApp +58 414 1700657.</li> 
                        <li>Estamos ubicados en Caracas.</li>
                        {/* <li>contacto@dacsystem.com</li> */}
                    </ul>
                </div>
                

                <div className="p-4 rounded">
                    <h2 className="text-md font-medium">PROPÓSITO</h2>
                    <ul className="text-sm font-light">
                        <li>Impulsar el futuro de tu empresa hacia un bienestar sostenible.</li>
                    </ul>
                </div>
            </div>



          <div className="mt-10 py-10 border-t items-center justify-between sm:flex w-full text-sm font-light">
              <p>© 2023 DACS. Todos los derechos reservados.</p>
              <div className="flex items-center gap-x-6 mt-6">
                {socialNetworks.map((network, idx) => (
                    <a
                    key={idx}
                    href={network.href}
                    aria-label="social media"
                    target="_blank"
                    rel="noreferrer"
                    className='rounded-md hover:bg-sky-700 transition-colors'
                    >
                        <network.Icon style={{ fontSize: network.fontSize }}/>
                    </a>
                ))}
              </div>
          </div>
      </div>
  </footer>
)

export default Footer
