
import { IMailDTO, IMail } from './interface/email'
import nodemailer from 'nodemailer'
import Framework from '../bin/framework';

export default class EmailService extends Framework implements IMail {

    async MailSend(to:string, subject:string, body:string, html:boolean = false) {

        let from: string = 'from';
        let { host, user, pass } = this.server('user');
        let info: any

        try{
            
            let transporter = nodemailer.createTransport({
                host: host,
                port: 587,
                secure: false,
                auth: {
                    user: user,
                    pass: pass
                }
            });

            //console.log(transporter)

            if(html === true){
                // send mail with defined transport object
                info = await transporter.sendMail({
                    from: from, // sender address
                    to: to, // list of receivers
                    subject: subject, // Subject line
                    html: body, // html body
                });
            }
            else{
                // send mail with defined transport object
                info = await transporter.sendMail({
                    from: from, // sender address
                    to: to, // list of receivers
                    subject: subject, // Subject line
                    text: body, // html body   
                });
            }
        }
        catch(err){
            throw err;
        }

    }

    async MailRead() {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    async Send({to, message} : IMailDTO ) {
        
        let from: string = 'from';

        try{
            let transporter = nodemailer.createTransport({
                host:'host',
                port: 587,
                secure: false,
                auth: {
                    user: 'user',
                    pass: 'pass'
                }
            });

            if(message.html === true){
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: to.name, // sender address
                    to: to.to, // list of receivers
                    subject: message.subject, // Subject line
                    html: message.body, // html body
                });
            }
            else{
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: to.name, // sender address
                    to: to.to, // list of receivers
                    subject: message.subject, // Subject line
                    html: message.body, // html body
                });
            }
        }
        catch(err){
            throw err;
        }
    }

    server(user: string){
        return {
            host: '', //"smtp.office365.com",
            user: user,
            pass: "*********"
        }
    }

}

export class Email extends EmailService {
    constructor(){
        super()
    }
}
