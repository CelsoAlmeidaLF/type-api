import {Request, Response} from 'express';
import { format } from 'date-fns';
import {v4} from 'uuid'
export class ControllerHome {

    index(req: Request, res: Response)
    { 
        
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uid = v4()
        console.log(`[log] ${req.method}:index`)

        res.json({
            uid:uid,
            message:"test...",
            dtConsulta: date
        });

    }
}