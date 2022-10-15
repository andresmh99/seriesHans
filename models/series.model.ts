import { Schema, model } from 'mongoose';

const SeriesSchema = new Schema({
    nombre:{
        type: String,
        require: [true, "El campo nombre es requerido"]
    },
    fechaDeLanzamiento: {
        type: Date,
    },
    director:{
        type:String
    },
    actorPrincipal:{
        type: String
    },
    actrizPrincipal:{
        type: String
    },
    imagen :{
        type: String
    }
})

interface ISeries extends Document{
    nombre:String;
    fechaDeLanzamiento:Date;
    director:string;
    actorPrincipal:String;
    actrizPrincipal:String;
    imagen: String;
}

export const Series = model<ISeries>('Series', SeriesSchema);