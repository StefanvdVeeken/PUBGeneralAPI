import { Component, OnInit } from '@angular/core';
import { PUBGService } from '../services/pubg.service';
import { IPUBGData } from '../DataInterfaces/PlayerInterface';
import { MatchData } from '../DataInterfaces/MatchInterface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  player: IPUBGData;
  match: MatchData;
  private _username: string;
  private _matchid: string;
  private _matchIndex: number;
  numberOfMatches: number[]=[
    1,
    2,
    3,
    4,
    5
  ];
  regions: string[] = [
    "xbox-as",
    "xbox-eu",
    "xbox-na",
    "xbox-oc",
    "pc-krjp",
    "pc-jp",
    "pc-na",
    "pc-eu",
    "pc-ru",
    "pc-oc",
    "pc-kakao",
    "pc-sea",
    "pc-sa",
    "pc-as",
  ];
  private _region: string;

  constructor(private _svc: PUBGService) {

  }
  ngOnInit(): void {
    // this._svc.getStats(this._region, this._username)
    //         .subscribe(result => this.stats = result);
  }

  get NumberOfMatches(){
    return this.numberOfMatches;
  }

  set NumberOfMatches(value : number[]){
    this.numberOfMatches = value;
  }
  get Region() {
    return this._region;
  }

  set Region(value: string) {
    this._region = value;
  }

  SearchUsername(name: string) {
    this.player = null;
    this._username = name;
    this._svc.getPlayer(this._region, this._username).subscribe(result => {this.player = result; this.RetrieveMatchData(result.data[0].relationships.matches.data[0].id);});
  }

  RetrieveMatchData(matchID: string) {
    this._svc.getMatches(this._region, matchID).subscribe(r => {console.log(matchID); this.match = r, this.GetMatchStatsIndex();});
  }

  GetMatchStatsIndex() {
    for (var i = 0; i < this.match.included.length; i++) {
      if (this.match.included[i].type == "participant") {
        if (this.match.included[i].attributes.stats.name == this._username) {
          this._matchIndex = i;
        }
      }
    }
  }
}




