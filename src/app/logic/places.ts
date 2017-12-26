
export enum dayOfWeek {
    sunday = 0,
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6
}

export enum weekType {
    even,
    unEven
}

export type containerType = 'rest' | 'plastic' | 'GFT';

export interface TrashEmptying {
    container: containerType;
    week: weekType;
    dayOfWeek: dayOfWeek;
}


export interface Place {
    name: string;
    emptyings: TrashEmptying[];
    selectionName: string;
}

export const places: Place[] = [
    {
        name: 'Bruinisse (dorp)',
        emptyings: [
            { container: 'rest', week: weekType.even, dayOfWeek: dayOfWeek.thursday },
            { container: 'plastic', week: weekType.unEven, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.unEven, dayOfWeek: dayOfWeek.thursday }
        ],
        selectionName: 'bruinisse_dorp'
    },
    {
        name: 'Burgh-Haamstede',
        emptyings: [
            { container: 'rest', week: weekType.even, dayOfWeek: dayOfWeek.monday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.unEven, dayOfWeek: dayOfWeek.monday }
        ],
        selectionName: 'burgh_haamstede'
    }
];

