import { PkmDatabase } from "../data/PkmDatabase"
import { InputMustBeNumber, MissingParams, NameNotFound, NumberNotFound, PkmHasNoEvolution, TypeNotFound } from "../error/BaseError"
import { pkmDataOutputDTO, pkmInputDexNumberDTO, pkmInputNameDTO, pkmInputTypeDTO } from "../model/pkm"
import { pkmDataConverter } from "../services/pkmDataConverter"

export class PkmBusiness {
    constructor(
        private pkmDatabase = new PkmDatabase()
    ) {
        pkmDatabase = this.pkmDatabase
    }

    public getPkmByName = async (input: pkmInputNameDTO) => {
        try {
            const name = input
            if (!name) {
                throw new MissingParams()
            }

            const pkmData = await this.pkmDatabase.getPkmByName(name)

            if (!pkmData || pkmData.length === 0) {
                throw new NameNotFound()
            }

            const result = pkmDataConverter(pkmData)

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getPkmByType = async (input: pkmInputTypeDTO) => {
        try {
            const type = input
            if (!type) {
                throw new MissingParams()
            }

            const pkmData = await this.pkmDatabase.getPkmByType(type)

            if (!pkmData || pkmData.length === 0) {
                throw new TypeNotFound()
            }

            const result = pkmDataConverter(pkmData)

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getPkmByPokedexNumber = async (input: pkmInputDexNumberDTO) => {
        try {
            const number = input
            if (!number) {
                throw new MissingParams()
            }
            if (isNaN(number as unknown as number)) {
                throw new InputMustBeNumber()
            }

            const pkmData = await this.pkmDatabase.getPkmByPokedexNumber(number)

            if (!pkmData || pkmData.length === 0) {
                throw new NumberNotFound()
            }

            const result = pkmDataConverter(pkmData)

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getPkmEvolutions = async (input: pkmInputNameDTO) => {
        try {
            const name = input
            if (!name) {
                throw new MissingParams()
            }

            const pkmName = await this.pkmDatabase.getPkmNameForEvolutions(name)
            if (!pkmName || pkmName.length === 0) {
                throw new NameNotFound()
            }

            const pkmData = await this.pkmDatabase.getPkmEvolutions(pkmName.family_id)
            if(pkmData[0].family_id === null){
                throw new PkmHasNoEvolution()
            }

            const result = pkmDataConverter(pkmData)

            return result

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}