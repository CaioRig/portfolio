import { pkmInputDexNumberDTO, pkmInputFamilyDTO, pkmInputNameDTO, pkmInputTypeDTO } from "../model/pkm";
import { Basedatabase } from "./BaseDatabase";

export class PkmDatabase extends Basedatabase {
    private TABLE_NAME = 'Pkm_data'
    public getPkmByName = async (name: pkmInputNameDTO) => {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where('name', 'like', `%${name}%`)

            return pkmData
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getPkmByType = async (type: pkmInputTypeDTO) => {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where('type_1', 'like', `%${type}%`)
                .orWhere('type_2', 'like', `%${type}%`)

            return pkmData
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getPkmByPokedexNumber = async (pokedexNumber: pkmInputDexNumberDTO) => {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where('pokedex_number', 'like', pokedexNumber)

            return pkmData
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getPkmNameForEvolutions = async (name: pkmInputNameDTO) => {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where({ name })

            return pkmData[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getPkmEvolutions = async (family_id: pkmInputFamilyDTO) => {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where({ family_id })

            return pkmData
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}