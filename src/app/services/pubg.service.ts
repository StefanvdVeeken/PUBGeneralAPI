import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import { InterceptService } from "./intercept.service";

@Injectable()
export class PUBGService{
    constructor(private _http: HttpClient) {

    }

     getStats(name:string):Observable<IPUBGData>{
        return this._http.get<IPUBGData>(`https://api.playbattlegrounds.com/shards/pc-eu/players?filter[playerNames]=${name}`);
     }

}

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