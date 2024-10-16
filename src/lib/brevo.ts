import * as brevo from "@getbrevo/brevo";
import ContactEmailTemplate from "./ContactEmailTemplate";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_DACS_API_KEY as string
);

interface Params {
  to: { email: string; name: string }[];
  subject: string;
  body: string;
}

export async function sendEmail({ lead, subject, body }) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = subject;
    smtpEmail.to = [{ name: "DACSYS WEB", email: process.env.EMAIL_HOST_USER }];
    smtpEmail.htmlContent = ContactEmailTemplate(body, lead);
    smtpEmail.sender = {
      name: "DACSYS",
      email: process.env.EMAIL_HOST_USER,
    };

    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.error(error);
  }
}

export async function createContact(lead: {
  email: string;
  name: string;
  phone: string;
  company: string;
  status?: "CLIENTE" | "INACTIVO" | "LEAD" | "NEGOCIACION";
}, message: string) {
  try {
    const contactsApi = new brevo.ContactsApi();

    // Configurar la clave API para la instancia de contactos
    contactsApi.setApiKey(
      brevo.ContactsApiApiKeys.apiKey,
      process.env.BREVO_DACS_API_KEY as string
    );

    const contact = new brevo.CreateContact();
    contact.email = lead.email;
    const sms = lead.phone;

    // Configura los atributos
    contact.attributes = {
      NOMBRE: lead.name,
      EMAIL: lead.email,
      ESTADO: lead.status || "LEAD",
      EMPRESA: lead.company,
      FUENTE: "Portal Web DACS",
      TELEFONO: lead.phone,
      PRIMER_MENSAJE: message,
      FECHA_CREACION: new Date().toISOString(),
    };

    // Asegúrate de que el ID de la lista sea un número
    contact.listIds = [Number(process.env.BREVO_CONTACT_LIST_ID)];

    // Crear el contacto
    const response = await contactsApi.createContact(contact);
    console.log("Contacto creado exitosamente:", JSON.stringify(response));
  } catch (error) {
    console.error("Error al crear el contacto:", error);
  }
}

