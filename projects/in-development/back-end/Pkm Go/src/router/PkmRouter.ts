import express from 'express';
import { PkmController } from '../controller/PkmController';

export const PkmRouter = express.Router()

const pkmController = new PkmController()

PkmRouter.get('/data', pkmController.getPkmByName)
PkmRouter.get('/type', pkmController.getPkmByType)
PkmRouter.get('/pokedex', pkmController.getPkmByPokedexNumber)
PkmRouter.get('/evolutions', pkmController.getPkmEvolutions)