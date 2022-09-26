import { Request, Response } from 'express'
import { PkmBusiness } from '../business/PkmBusiness';

export class PkmController {
    constructor(
        private pkmBusiness = new PkmBusiness()
    ) {
        pkmBusiness = this.pkmBusiness
    }
    public getPkmByName = async (req: Request, res: Response) => {
        try {
            const pkmName = req.body.name

            const result = await this.pkmBusiness.getPkmByName(pkmName)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    public getPkmByType = async (req: Request, res: Response) => {
        try {
            const pkmType = req.body.type

            const result = await this.pkmBusiness.getPkmByType(pkmType)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }

    public getPkmByPokedexNumber = async (req: Request, res: Response) => {
        try {
            const pkmPokedexNumber = req.body.pokedexNumber

            const result = await this.pkmBusiness.getPkmByPokedexNumber(pkmPokedexNumber)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }

    public getPkmEvolutions = async (req: Request, res: Response) => {
        try {
            const pkmName = req.body.name

            const result = await this.pkmBusiness.getPkmEvolutions(pkmName)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    }
}