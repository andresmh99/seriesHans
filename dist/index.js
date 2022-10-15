"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const defaultRoutes_1 = __importDefault(require("./routes/defaultRoutes"));
const series_routes_1 = __importDefault(require("./routes/series.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = new server_1.default();
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', defaultRoutes_1.default);
server.app.use('/series', series_routes_1.default);
server.Start(() => {
    console.log(`Servidor corriendo en el puerto: ${server.port}`);
});
mongoose_1.default.connect('mongodb+srv://andresmh99:Ninina-27250@cluster0.mse95gg.mongodb.net/tareasDb', (error) => {
    if (error) {
        throw error;
    }
    console.log('Base de datos Online');
});
