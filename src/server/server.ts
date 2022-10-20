import express from 'express';
import parser from 'body-parser';
import { ControllerHome } from './controllers/home';
import router from './routers/router';

const app = express();
const port : number = 3000;

export class ServerApi {

    private home: ControllerHome;

    constructor(){
        this.home = new ControllerHome();
    }

    private middleware(){
        app.use(parser.urlencoded({extended: true}));
        app.use(parser.json());
    }

    private routers(){
        //app.get('/api/v1', this.home.index);
        app.use('/api/v1/', router)
    }

    createServer(){
        this.middleware();
        this.routers();
        app.listen(port, () => 
            console.log(`rodando: http://localhost:${port}/api/v1`));
    } 

}