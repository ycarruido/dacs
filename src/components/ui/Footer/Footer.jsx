const socialInfo = [
  {
      icon: <svg className="w-6 h-6 hover:text-sky-600 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>,
      href: "#"
  },
  {
      icon: <div class="w-6 h-6 hover:bg-sky-600 duration-150 p-1 bg-white flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/></svg></div>,
      href: "#"
  },
  {
      icon: <svg className="w-6 h-6 hover:fill-sky-600 duration-150" fill="#fff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" stroke="#030712"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.072"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"></path> <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 "></polygon> <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"></path> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"></path> </g> </g></svg>,
      href: "#"
  },
]

const Footer = () => (
  <footer className="w-full bg-gray-950 text-gray-200">
      <div className="custom-screen pt-16 m-0 w-full">
        

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <div className="p-4 rounded">
                    <h2 className="text-md font-medium">ENCUÉNTRANOS</h2>
                    <p className="text-sm font-light">DACS. Servicios especializados que utilizan tecnologías avanzadas como HTML5, CSS, Angular, Node.js, React, Next.js y SharePoint. Desarrollamos aplicaciones web altamente productivas y compatibles con todas las plataformas y dispositivos, con interfaces optimizadas para el usuario final, gestión eficiente de datos e integración robusta del servidor, garantizando aplicaciones más rápidas y con mayor valor.</p>
                    <ul className="text-md pt-2 font-light list-none space-y-2">
                        <li className="flex items-center">
                            <span className="mr-2 text-sky-300">→</span>
                            <a target="_blank" href="https://wa.me/5804141700657" className="hover:underline text-sky-300">WhatsApp</a>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-sky-300">→</span>
                            <a target="_blank" href="https://wa.me/5804141700657" className="hover:underline text-sky-300">contacto@dacsystem.com</a>
                        </li>
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
                        <li>contacto@dacsystem.com</li>
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
              <p>© 2020 DACS.</p>
              <div className="flex items-center gap-x-6 mt-6">
                  {
                      socialInfo.map((item, idx) => (
                          <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                              {item.icon}
                          </a>
                      ))
                  }
              </div>
          </div>
      </div>
  </footer>
)

export default Footer
