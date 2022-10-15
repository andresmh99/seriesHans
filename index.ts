import Server from "./classes/server";
import bodyParser from "body-parser";
import defaultRoutes from "./routes/defaultRoutes";
import SeriesRoutes from "./routes/series.routes";
import mongoose from "mongoose";
import cors from "cors"

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use('/', defaultRoutes);
server.app.use('/series', SeriesRoutes);

server.app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requeted-With,content-type');
    next();
    
});


server.Start(() => {
    console.log(`Servidor corriendo en el puerto: ${server.port}` );
})

mongoose.connect('mongodb+srv://andresmh99:Ninina-27250@cluster0.mse95gg.mongodb.net/tareasDb', (error) =>{
    if(error){
        throw error;
    }

    console.log('Base de datos Online');
});