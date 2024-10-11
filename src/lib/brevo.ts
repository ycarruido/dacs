    import * as brevo from '@getbrevo/brevo';
    import ContactEmailTemplate from './ContactEmailTemplate';

    const apiInstance = new brevo.TransactionalEmailsApi();

    apiInstance.setApiKey(
        brevo.TransactionalEmailsApiApiKeys.apiKey,
        process.env.BREVO_DACS_API_KEY as string   
    );


    interface Params{
        to: {email: string, name: string}[];
        subject: string;
        body: string;
    }
    
    export async function sendEmail({lead, subject, body}){
        try{    
            const smtpEmail = new brevo.SendSmtpEmail();
            smtpEmail.subject = subject;
            smtpEmail.to = [{name: "DACSYS WEB", email: "yhonatandcarruido@gmail.com"}];
            smtpEmail.htmlContent = ContactEmailTemplate(body, lead);
            smtpEmail.sender = {
                name: "DACSYS",
                email: "yhonatandcarruido@gmail.com"
            };

            await apiInstance.sendTransacEmail(smtpEmail);
        }catch (error){
            console.error(error)
        }
        
    }