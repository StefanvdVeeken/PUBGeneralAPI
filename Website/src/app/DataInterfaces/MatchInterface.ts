export interface Stats {
}

export interface Tags {
}

export interface Attributes {
    createdAt: string;
    duration: number;
    gameMode: string;
    mapName: string;
    patchVersion: string;
    shardId: string;
    stats: Stats;
    tags: Tags;
    titleId: string;
}

export interface Datum {
    type: string;
    id: string;
}

export interface Assets {
    data: Datum[];
}

export interface Datum2 {
    type: string;
    id: string;
}

export interface Rosters {
    data: Datum2[];
}

export interface Rounds {
}

export interface Spectators {
}

export interface Relationships {
    assets: Assets;
    rosters: Rosters;
    rounds: Rounds;
    spectators: Spectators;
}

export interface Links {
    schema: string;
    self: string;
}

export interface Data {
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

export interface MatchData {
    data: Data;
    included: any[];
    links: Links2;
    meta: Meta;
}
