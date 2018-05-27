import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import { InterceptService } from "./intercept.service";
import { IPUBGData } from "../DataInterfaces/PlayerInterface";
import {MatchData} from "../DataInterfaces/MatchInterface";

@Injectable()
export class PUBGService{
    constructor(private _http: HttpClient) {

    }

     getPlayer(region:string,name:string):Observable<IPUBGData>{
        return this._http.get<IPUBGData>(`https://api.playbattlegrounds.com/shards/${region}/players?filter[playerNames]=${name}`);
     }

     getMatches(region:string, matchID:string):Observable<MatchData>{
        return this._http.get<MatchData>(`https://api.playbattlegrounds.com/shards/${region}/matches/${matchID}`);
     }

}
