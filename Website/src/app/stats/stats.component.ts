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
  match: MatchData[] = [];
  private _username: string;
  private _matchid: string;
  private _matchIndex: number[] = [];
  numberOfMatches: number[] = [
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
    "pc-as"
  ];
  private _region: string;
  private nofmatches: number;
  isLoading: boolean = false;

  constructor(private _svc: PUBGService) {

  }
  ngOnInit(): void {

  }

  get NumberOfMatches() {
    return this.nofmatches;
  }

  set NumberOfMatches(value: number) {
    this.nofmatches = value;
  }
  get Region() {
    return this._region;
  }

  set Region(value: string) {
    this._region = value;
  }

  SearchUsername(name: string) {
    this.isLoading = true;
    this.player = null;
    this._username = name;
    this._matchIndex = [];
    this.match = [];
    this._svc.getPlayer(this._region, this._username).subscribe(result => {
      this.player = result;
      for (var i = 0; i < this.nofmatches; i++) {
        this.RetrieveMatchData(result.data[0].relationships.matches.data[i].id);
      };
    });
  }

  RetrieveMatchData(matchID: string) {
    this._svc.getMatches(this._region, matchID).subscribe(r => {
      this.match.push(r);
      //setTimeout(() =>{this.GetMatchStatsIndex(index)}, 100);
      if (this.match.length == this.nofmatches) {
        this.GetMatchStatsIndex()
      };
    });
  }

  GetMatchStatsIndex() {
    for (var j = 0; j < this.nofmatches; j++) {
      for (var i = 0; i < this.match[j].included.length; i++) {
        if (this.match[j].included[i].type == "participant") {
          if (this.match[j].included[i].attributes.stats.name == this._username) {
            this._matchIndex.push(i);
          }
        }
      }
    }

    console.log(this._matchIndex);
    this.isLoading = false;
  }

}