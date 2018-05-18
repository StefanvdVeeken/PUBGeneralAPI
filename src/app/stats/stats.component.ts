import { Component, OnInit } from '@angular/core';
import { PUBGService, IPUBGData } from '../services/pubg.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats:IPUBGData;
  private _username: string;
  regions:string[] = [
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
private _region:string;

  constructor(private _svc: PUBGService){

  }
  ngOnInit(): void {
    // this._svc.getStats(this._region, this._username)
    //         .subscribe(result => this.stats = result);
  }

  // get Username(){
  //   return this._username;
  // }

  // set Username(value:string){
  //   this._username = value;
  //   this._svc.getStats(this._username).subscribe(result => this.stats = result);
  // }

  get Region(){
    return this._region;
  }

  set Region(value:string){
   this._region = value;
  }

  SearchUsername(name: string){
    this.stats = null;
    this._username = name;
    this._svc.getPlayer(this._region,this._username).subscribe(result => this.stats = result);
  }


}


