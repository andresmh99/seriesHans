"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const series_model_1 = require("../models/series.model");
const SeriesRoutes = (0, express_1.Router)();
SeriesRoutes.get('/pagin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const series = yield series_model_1.Series.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        msj: "pagin ok",
        series
    });
}));
SeriesRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const series = yield series_model_1.Series.find();
    return res.json({
        ok: true,
        series
    });
}));
SeriesRoutes.post('/', (req, res) => {
    const data = req.body;
    const serie = {
        nombre: data.nombre,
        fechaDeLanzamiento: data.fechaDeLanzamiento,
        director: data.director,
        actorPrincipal: data.actorPrincipal,
        actrizPrincipal: data.actrizPrincipal,
        imagen: data.imagen
    };
    console.log(serie);
    series_model_1.Series.create(serie).then(SeriesDb => {
        console.log(SeriesDb);
        return res.json({
            ok: true,
            msj: "Registro creado correctamente",
            SeriesDb
        });
    }).catch(err => {
        console.log(err);
        return res.json({
            ok: false,
            msj: "Ocurrio un error al Registrar la serie",
            err
        });
    });
});
SeriesRoutes.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serieId = req.params.id;
    const serie = {
        nombre: req.body.nombre,
        fechaDeLanzamiento: req.body.fechaDeLanzamiento,
        director: req.body.director,
        actorPrincipal: req.body.actorPrincipal,
        actrizPrincipal: req.body.actrizPrincipal,
        imagen: req.body.imagen
    };
    series_model_1.Series.findByIdAndUpdate(serieId, serie).then(SeriesDb => {
        return res.json({
            ok: true,
            msj: "Ok Put",
            SeriesDb
        });
    });
}));
SeriesRoutes.delete('/', (req, res) => {
    const serieId = req.query.id;
    series_model_1.Series.findByIdAndDelete(serieId).then(SeriesDb => {
        return res.json({
            ok: true,
            SeriesDb
        });
    });
});
exports.default = SeriesRoutes;
