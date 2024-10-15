"use server"
import { sendEmail, createContact } from "../lib/brevo";
//import { redirect } from "next/navigation";

 export async function handleForm(formData){
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const about = formData.getAll('about');

    //validar campos
    if (!name || !email || !message || about.length === 0) {
      return console.log("Please fill all fields");
    }

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
      lead: [{name: name, email: email}],
      body: message
    })


    const lead = { email: email, name: name };
    await createContact(lead);



    //redirect('/contact')
  }