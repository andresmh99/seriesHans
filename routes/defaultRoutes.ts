import { Router,Response,Request } from "express";


const defaultRoutes = Router();

defaultRoutes.get('/', (req:Request, res:Response) => {
    return res.json({
        ok:true,
        msj:"Todo funciona bien"
    })
});

export default defaultRoutes;