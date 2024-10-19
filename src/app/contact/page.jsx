"use client";
import { useState } from "react";
import { handleForm } from "../handleFormAction";
import Button from "../../components/ui/Button/Button";
import Checkbox from "../../components/ui/Checkbox/Checkbox";

//Para reCAPTCHA
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const servicesItems = [
    "Desarrollo Apps web",
    "Desarrollo Apps Móvil",
    "Diseño de Páginas Web",
    "Marketing",
    "Información",
  ];

  const handleSubmit = async (event, executeRecaptcha) => {
    event.preventDefault();
    setIsSubmitting(true);


    //Para reCAPTCHA
    if (!executeRecaptcha) {
      console.log("Recaptcha no está disponible aún");
      return;
    }
    const token = await executeRecaptcha("contact_form");


    const formData = new FormData(event.target);

    // se envia token tambien Para reCAPTCHA
    formData.append("recaptchaToken", token);

    await handleForm(formData, token);
    setIsSubmitting(false);
    setFormSent(true);
    event.target.reset();
  };

  return (
    //se envuelve el form para usar reCAPTCHA
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_DACS_GCAPTCHA_SITEKEY}>
      <div className="mt-14 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-lg mx-auto gap-12 flex flex-col lg:flex-row lg:max-w-none">
            <div className="max-w-lg sm:text-center lg:text-left">
              <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
                Háblenos sobre su proyecto
              </p>
              <p className="mt-3">
                Estamos aquí para ayudarte. Coordina una reunión virtual o
                presencial para discutir tu proyecto.
              </p>
              <p className="mt-3">
                Puedes enviarnos un mensaje de WhatsApp a
                <a
                  href="mailto:solicitudes@tesisalacarta.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-800 hover:text-sky-600 font-medium duration-150"
                >
                  +58 0424-1700657
                </a>
              </p>
            </div>
            <div className="flex-1 w-full mt-12 lg:mt-0">
              <ContactForm
                servicesItems={servicesItems}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                formSent={formSent}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}

function ContactForm({ servicesItems, isSubmitting, handleSubmit, formSent }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  return (
    <form onSubmit={(e) => handleSubmit(e, executeRecaptcha)} className="space-y-5 font-medium">
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          required
          className="peer h-10 w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-800"
          placeholder="Nombre"
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-sky-800 px-3 peer-focus:px-1"
        >
          Nombre*
        </label>
      </div>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          required
          className="peer h-10 w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-800"
          placeholder="Email"
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-sky-800 px-3 peer-focus:px-1"
        >
          Email*
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="relative flex-1">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="peer h-10 w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-800"
            placeholder="Teléfono"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-sky-800 px-3 peer-focus:px-1"
          >
            Teléfono
          </label>
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            id="company"
            name="company"
            className="peer h-10 w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-800"
            placeholder="Empresa"
          />
          <label
            htmlFor="company"
            className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-sky-800 px-3 peer-focus:px-1"
          >
            Empresa
          </label>
        </div>
      </div>
      <div>
        <textarea
          placeholder="Mensaje*"
          name="message"
          required
          className="w-full h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-gray-300 rounded-md shadow-sm p-2 focus:border-sky-800"
        ></textarea>
      </div>
      <div>
        <label>Asunto*</label>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-3 font-normal">
          {servicesItems.map((item, idx) => (
            <li key={idx} className="flex gap-x-2 items-center">
              <Checkbox
                id={`about-${idx}`}
                name="about"
                value={item}
                defaultChecked={idx === servicesItems.length - 1}
              />
              <label htmlFor={`about-${idx}`} className="text-sm">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-1">
        <Button
          type="submit"
          className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 ring-offset-2 ring-sky-600 focus:ring"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </div>
      {formSent && (
        <p className="text-green-700 mt-4">
          ¡Tu mensaje ha sido enviado con éxito! Gracias por contactarnos.
        </p>
      )}
    </form>
  );
}
