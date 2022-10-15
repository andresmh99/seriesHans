import { Router, Request, Response, response } from "express";
import { Series } from "../models/series.model";

const SeriesRoutes = Router();

SeriesRoutes.get('/pagin',async (req:Request, res:Response) => {
    
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;

    const series = await Series.find().skip(skip).limit(perPage);

    return res.json({
        ok:true,
        msj:"pagin ok",
        series
    });
});

SeriesRoutes.get('/',async (req:Request, res:Response) =>{

    const series = await Series.find();
    return res.json({
        ok:true,
        series
    })
});

SeriesRoutes.post('/', (req:Request,res:Response) => {

    const data = req.body;

    const serie = {
        nombre: data.nombre,
        fechaDeLanzamiento: data.fechaDeLanzamiento,
        director: data.director,
        actorPrincipal: data.actorPrincipal,
        actrizPrincipal: data.actrizPrincipal,
        imagen: data.imagen
    }
    console.log(serie);

    Series.create(serie).then(SeriesDb =>{
        console.log(SeriesDb);
        return res.json({
            ok:true,
            msj:"Registro creado correctamente",
            SeriesDb
        });
    }).catch(err => {
        console.log(err);
        return res.json({
            ok:false,
            msj:"Ocurrio un error al Registrar la serie",
            err 
        });
    });

});

SeriesRoutes.put('/:id', async(req:Request, res:Response) => {

    const serieId = req.params.id;
    const serie = {
        nombre: req.body.nombre,
        fechaDeLanzamiento: req.body.fechaDeLanzamiento,
        director: req.body.director,
        actorPrincipal: req.body.actorPrincipal,
        actrizPrincipal: req.body.actrizPrincipal,
        imagen: req.body.imagen
    }

    Series.findByIdAndUpdate(serieId, serie).then(SeriesDb => {
        return res.json({
            ok:true,
            msj:"Ok Put",
            SeriesDb
        })
    });

});

SeriesRoutes.delete('/', (req:Request, res:Response) => {

    const serieId = req.query.id;

    Series.findByIdAndDelete(serieId).then(SeriesDb => {
        return res.json({
            ok:true,
            SeriesDb
        })
    });

});

export default SeriesRoutes;