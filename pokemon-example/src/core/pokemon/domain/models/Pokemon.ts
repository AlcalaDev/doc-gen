interface Ability {
    name: string;
    url: string;
    isHidden: boolean;
    slot: number;
}

export interface Pokemon {
    id: string;
    name: string;
    height: string;
    weight: boolean;
    abilities: Ability[];
}
