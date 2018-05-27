export interface Attributes {
    titleId: string;
    shardId: string;
    createdAt: Date;
    updatedAt: Date;
    patchVersion: string;
    name: string;
    stats?: any;
}

export interface Assets {
    data: any[];
}

export interface Datum2 {
    type: string;
    id: string;
}

export interface Matches {
    data: Datum2[];
}

export interface Relationships {
    assets: Assets;
    matches: Matches;
}

export interface Links {
    self: string;
    schema: string;
}

export interface Datum {
    type: string;
    id: string;
    attributes: Attributes;
    relationships: Relationships;
    links: Links;
}

export interface Links2 {
    self: string;
}

export interface Meta {
}

export interface IPUBGData {
    data: Datum[];
    links: Links2;
    meta: Meta;
}