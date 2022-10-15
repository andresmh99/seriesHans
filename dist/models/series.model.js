"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
const mongoose_1 = require("mongoose");
const SeriesSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: [true, "El campo nombre es requerido"]
    },
    fechaDeLanzamiento: {
        type: Date,
    },
    director: {
        type: String
    },
    actorPrincipal: {
        type: String
    },
    actrizPrincipal: {
        type: String
    },
    imagen: {
        type: String
    }
});
exports.Series = (0, mongoose_1.model)('Series', SeriesSchema);
