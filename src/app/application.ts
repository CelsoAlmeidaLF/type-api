import { ServerApi } from "../server/server";

export class Application {
    
    constructor(config: any){
        console.log(`[${config}] program ...`);   
        this.createServer();   
    }

    createServer(){
        let api = new ServerApi();
        api.createServer();
    }
}