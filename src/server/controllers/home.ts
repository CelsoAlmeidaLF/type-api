import {Request, Response} from 'express';
import { format } from 'date-fns';
import {v4} from 'uuid'
import os from 'os'
import { Log } from '../../modules/logEvents';

export class ControllerHome {

    index(req: Request, res: Response)
    { 

        let o = {
            user: os.userInfo().username,
            hostname: os.hostname()
        }
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uid = v4();

        Log.saveAs(`log: [ ${o.user}\t${date} ] ${req.method}:index`)

        res.json({
            uid:uid,
            mensagem:'testing ...',
            dtConsulta: date
        });
        
    }
}