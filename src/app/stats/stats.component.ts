import { Component, OnInit } from '@angular/core';
import { PUBGService, IPUBGData } from '../services/pubg.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats:IPUBGData;
  private _username: string = "ThySable";

  constructor(private _svc: PUBGService){

  }
  ngOnInit(): void {
    this._svc.getStats(this._username)
            .subscribe(result => this.stats = result);
  }

  get Username(){
    return this._username;
  }

  set Username(value:string){
    this._username = value;
    this._svc.getStats(this._username).subscribe(result => this.stats = result);
  }


}


