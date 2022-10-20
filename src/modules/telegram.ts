
import TelegramBot from "node-telegram-bot-api";
import { format } from 'date-fns';

export class Telegram {

        private token: string
        private chatId: string

        constructor(){
            this.token = '1522041529:AAEikMPHmALvzOoS77Gjeuw2LlC_6sqignE';
            this.chatId = '1593917895'
        }

       chamar(msg: string){

            try{        
                let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`; 
                let bot = new TelegramBot(this.token);
                bot.sendMessage(this.chatId, `[${date}] ${msg}`);
                console.log('enviado, telegram ...');
            }catch(ex){
                throw ex;
            }

       }

}