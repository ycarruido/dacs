const ContactEmailTemplate = (bodyContent, lead) => {

  //console.log(lead[0].name)
    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px;">
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #3d82f6; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <h1 style="color: #ffffff;">DACS LEADS</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <p style="font-size: 16px; color: #333333;">
                  ${bodyContent}
                </p>
                <p style="font-size: 16px; color: #333333;">
                  Datos de contacto: 
                </p>
                <ul>
                  <li>${lead[0].name}</li>
                  <li>${lead[0].email}</li>
                  <li>${lead[0].phone}</li>
                  <li>${lead[0].company}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #3d82f6; color: #ffffff;">
                <p style="margin: 0; font-size: 14px;">Formulario de Contacto</p>
                <p style="margin: 0; font-size: 12px;">Visítanos en <a href="https://dacsys.net" style="color: #ffffff; text-decoration: underline;">dacsys.net</a></p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  
    return htmlContent;
  };
  
  export default ContactEmailTemplate;
  