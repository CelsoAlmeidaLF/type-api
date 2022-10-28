import {Response} from 'express';
import { format } from 'date-fns';
import {v4} from 'uuid'

export default class ResponseApi {

    Ok(res: Response){

        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uid = v4();

        res.status(200).json({
            uid:uid,
            mensagem:'testing ...',
            dtConsulta: date
        });
    }

} 