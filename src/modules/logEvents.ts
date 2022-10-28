import fs from 'fs'
import { promises } from 'fs'
import path from 'path'

export default class LogEvents {

    result: string;

    constructor(){
        this.result = ''
    }

    async saveLog(message: string) {
        message += `\n`

        try{
            if(!fs.existsSync(path.join(__dirname))){
                await promises.mkdir(path.join(__dirname))
            }
            await promises.appendFile(path.join(__dirname,'eventsLog.log'), message) 
        }catch(err){
            console.log(err)
        }
    
    }
}
