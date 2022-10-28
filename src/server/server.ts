import express from 'express';
import parser from 'body-parser';
import router from './routers/router';

const app = express();
const port : number = 3000;

export default class ServerApi {

    private middleware(){
        app.use(parser.urlencoded({extended: true}));
        app.use(parser.json());
    }

    private routers(){
        app.use('/api/v1/', router)
    }

    private pipeline(){
        this.middleware();
        this.routers();
    }

    createServer(){
        this.pipeline();
        app.listen(port, () => 
            console.log(`rodando: http://localhost:${port}/api/v1`));
    } 

}