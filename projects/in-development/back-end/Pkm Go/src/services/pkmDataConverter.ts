import { pkmDataOutputDTO } from "../model/pkm"

export const pkmDataConverter = (pkmData: any) => {
    let result: any = []

    pkmData.forEach((element: pkmDataOutputDTO) => {
        const newPkm: pkmDataOutputDTO = {
            id: element.id,
            name: element.name,
            pokedex_number: element.pokedex_number,
            generation: element.generation,
            family_id: element.family_id,
            type_1: element.type_1,
            type_2: element.type_2,
            stat_total: element.stat_total,
            atk: element.atk,
            def: element.def,
            sta: element.sta
        }

        result.push(...[newPkm])
    });

    return result
}

