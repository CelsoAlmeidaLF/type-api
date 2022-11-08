import {Request, Response} from 'express';
import result from '../api/Response';

export default class controllerHome {

   static index(req: Request, res: Response)
    { 
        result.Ok(res);
    }
}