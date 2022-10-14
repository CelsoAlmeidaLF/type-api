import {Request, Response} from 'express';

export class ControllerHome {

    index(req: Request, res: Response)
    { 
        console.log(`[log] ${req.method}:index`)

        res.json({
            message:"test..."
        });

    }
}