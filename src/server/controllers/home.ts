import {Request, Response} from 'express';
import { ResponseApi } from '../Api/Response';

export class ControllerHome extends ResponseApi {

    index(req: Request, res: Response)
    { 
        this.Ok(res);
    }
}