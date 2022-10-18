import fs from 'fs'
import { promises } from 'fs'
import path from 'path'

export class Log {

   static saveAs(msg: string) {
        console.log(msg)     
        this.saveFile(msg);
    }

    private static async saveFile(msg: string){
        let message: string = `${msg}\n`

        try{
            if(!fs.existsSync(path.join(__dirname, '../../log/'))){
                await promises.mkdir(path.join(__dirname, '../../log/'))
            }
            await promises.appendFile(path.join(__dirname,'../../log/eventsLog.log'), message) 
        }catch(err){
            console.log(err)
        }
    }

}