
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
    },
    {
        name: 'Haamstede',
        emptyings: [
            { container: 'rest', week: weekType.even, dayOfWeek: dayOfWeek.monday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.unEven, dayOfWeek: dayOfWeek.monday }
        ],
        selectionName: 'haamstede'
    },
    {
        name: 'Nieuw-Haamstede',
        emptyings: [
            { container: 'rest', week: weekType.even, dayOfWeek: dayOfWeek.monday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.unEven, dayOfWeek: dayOfWeek.monday }
        ],
        selectionName: 'nieuw_haamstede'
    },
    {
        name: 'Noordwelle',
        emptyings: [
            { container: 'rest', week: weekType.even, dayOfWeek: dayOfWeek.monday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.unEven, dayOfWeek: dayOfWeek.monday }
        ],
        selectionName: 'noordwelle'
    },
    {
        name: 'Renesse',
        emptyings: [
            { container: 'rest', week: weekType.even, dayOfWeek: dayOfWeek.monday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.unEven, dayOfWeek: dayOfWeek.monday }
        ],
        selectionName: 'renesse'
    },
    {
        name: 'Westenschouwen',
        emptyings: [
            { container: 'rest', week: weekType.even, dayOfWeek: dayOfWeek.monday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.unEven, dayOfWeek: dayOfWeek.monday }
        ],
        selectionName: 'westenschouwen'
    },
    {
        name: 'Brouwershaven',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'brouwershaven'
    },
    {
        name: 'Den Osse',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'den_osse'
    },
    {
        name: 'Ellemeet',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'ellemeet'
    },
    {
        name: 'Kerkwerve (inclusief buitengebied)',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'kerkwerve'
    },
    {
        name: 'Noordgouwe (inclusief buitengebied)',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'noordgouwe'
    },
    {
        name: 'Scharendijke',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'scharendijke'
    },
    {
        name: 'Schuddebeurs',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'schuddebeurs'
    },
    {
        name: 'Serooskerke',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'serooskerke'
    },
    {
        name: 'Zierikzee Poortambacht',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'zierikzee_poortambacht'
    },
    {
        name: 'Zonnemaire',
        emptyings: [
            { container: 'rest', week: weekType.unEven, dayOfWeek: dayOfWeek.tuesday },
            { container: 'plastic', week: weekType.even, dayOfWeek: dayOfWeek.wednesday },
            { container: 'GFT', week: weekType.even, dayOfWeek: dayOfWeek.tuesday }
        ],
        selectionName: 'zonnemaire'
    },
];

