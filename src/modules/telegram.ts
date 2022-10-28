
import TelegramBot from "node-telegram-bot-api";
import { format } from 'date-fns';

export default class Telegram {

        private token: string
        private chatId: string

        constructor(){
            this.token = '...';
            this.chatId = '...';
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

