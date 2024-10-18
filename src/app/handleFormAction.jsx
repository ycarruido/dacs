"use server"
import { sendEmail, createContact } from "../lib/brevo";
import axios from "axios";

 export async function handleForm(formData, token){
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company')
    const message = formData.get('message');
    const about = formData.getAll('about');

    //Para reCAPTCHA
    const recaptchaToken = formData.get("recaptchaToken");

    //validar campos
    if (!name || !email || !message || about.length === 0) {
      return console.log("Please fill all fields");
    }





    // Validar reCAPTCHA token
    const secretKey = process.env.DACS_GCAPTCHA_SECRETKEY; // Asegúrate de tener esta variable en tu archivo .env
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: recaptchaToken,
        },
      }
    );

    console.log("reCAPTCHA Verification Response:", response.data);

    const { success } = response.data;

    if (!success) {
      return console.log("Invalid reCAPTCHA");
    }
    // Validar reCAPTCHA token







    //creo un string con los checkbox para el asunto del mensaje
    let aboutStr = '';
    about.forEach((item, index) => {
      if (index === 0) {
        aboutStr += item; // No agregamos coma al primer elemento
      } else {
        aboutStr += ", " + item;
      }
    });

    
    await sendEmail({
      subject: aboutStr,
      lead: [{name: name, email: email, phone: phone, company: company}],
      body: message
    })

    const lead = {email: email, name: name, phone: phone, company: company, status: 'LEAD'};
    //const lead = { email: email, name: name };
    await createContact(lead, message);

  }