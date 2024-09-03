 "use server"
 async function sendEmail(formata){
    const name = formata.get('name');
    const email = formata.get('email');
    const message = formata.get('message');
    const about = formata.getAll('about');

    console.log({
      name,
      email,
      message,
      about

    })
    
  }

  export default sendEmail;