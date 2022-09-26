export interface PkmTable {
    id: string,
    name: string,
    pokedexNumber: number,
    generation: number,
    family_id: number,
    type1: string,
    type2: string,
    statTotal: number,
    atk: number,
    def: number,
    sta: number
}

export interface pkmInputNameDTO {
    name: string
}

export interface pkmInputTypeDTO {
    type: string
}

export interface pkmInputDexNumberDTO {
    pokedexNumber: number
}

export interface pkmInputFamilyDTO {
    family_id: number
}

export interface pkmDataOutputDTO {
    id: string,
    name: string,
    pokedex_number: number,
    family_id: number,
    generation: number,
    type_1: string,
    type_2: string,
    stat_total: number,
    atk: number,
    def: number,
    sta: number
}
