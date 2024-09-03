
import Input from "@/src/components/ui/Input/Input";
import Button from "@/src/components/ui/Button/Button";
import Checkbox from "@/src/components/ui/Checkbox/Checkbox";
import sendEmail from "@/src/app/contactFormAction"

export const metadata = {
  title: 'DACSystems - Háblenos sobre su proyecto'
}

export default function GetStarted() {

  const servicesItems = [
    "Desarrollo web",
    "Desarrollo Móvil",
    "Páginas Web",
    "Marketing",
    "Información"
  ];


  return (
    <>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
                Háblenos sobre su proyecto
              </p>
              <p className='mt-3'>
                Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo y háznos saber cómo podemos asistirte. También puedes enviarnos un mensaje de WhatsApp a 
                <a
                  href='mailto:solicitudes@tesisalacarta.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-800 hover:text-sky-600 font-medium duration-150'>
                  +58 0424-1700657
                </a>
              </p>
            </div>
            <div className='flex-1 w-1/2 mt-12 lg:mt-0'>
              <form
                action={sendEmail}
                className='space-y-5 font-medium'>
                <div>
                  <label>Nombre</label>
                  <Input
                    aria-label='Full name'
                    type='text'
                    required
                    className='mt-2 focus:border-sky-800'
                    name='name'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-2 focus:border-sky-800'
                    name='email'
                  />
                </div>
                <div>
                  <label>Mensaje</label>
                  <textarea
                    aria-label='Message'
                    required
                    name='message'
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg'></textarea>
                    
                </div>
                <div>
                  <label>Asunto</label>
                  <ul className='mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16 '>
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className='flex gap-x-2 items-center'>
                        <Checkbox id={`about-${idx}`} name='about' value={item}/>
                        <label htmlFor={`about-${idx}`} className='text-sm'>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='pt-1'>
                  <Button className='w-full text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 ring-offset-2 ring-sky-600 focus:ring'>
                    Enviar Solicitud
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}