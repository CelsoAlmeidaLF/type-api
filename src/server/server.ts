import express from 'express';
import parser from 'body-parser';
import { ControllerHome } from './controllers/home';

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
        app.get('/api/v1', this.home.index);
    }

    createServer(){
        this.middleware();
        this.routers();
        app.listen(port, () => 
            console.log(`rodando: http://localhost:${port}/api/v1`));
    } 

}