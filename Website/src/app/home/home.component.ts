import { Component, OnInit } from '@angular/core';
import { CountryData, CountrySend } from '../DataInterfaces/CountryInterface';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  landen: CountryData[] = [];
  page: number = 0;
  sorting: string = "id";

  constructor(private _svc: ImageService) {

  }

  ngOnInit(): void {
    this._svc.getAllCountries(this.page, this.sorting).subscribe(result =>{
      this.landen = result;
    });
  }

  SortingId(){
    this.sorting = "id";
    console.log(this.sorting);
    this._svc.getAllCountries(this.page, this.sorting).subscribe(r =>{
      this.landen = r;
    })
  }

  SortingName(){
    this.sorting = "name";
    console.log(this.sorting);
    this._svc.getAllCountries(this.page, this.sorting).subscribe(r =>{
      this.landen = r;
    })
  }

  prevPage():void{
    if(this.page > 0)
      this.page--;
    this._svc.getAllCountries(this.page, this.sorting).subscribe(r =>{
      this.landen = r;
    })
  }

  nextPage():void{
    if(this.landen.length >= 4)
      this.page++;
    this._svc.getAllCountries(this.page, this.sorting).subscribe(r =>{
      this.landen = r;
    })
  }

  CountryAdd(_name: string):void {
    var cname: CountrySend = {
      name: _name
    };

    this._svc.addCountry(cname).subscribe(result =>{
      this._svc.getAllCountries(this.page, this.sorting).subscribe(r =>{
        this.landen = r;
      });
    });
  }

  CountryUpdate(_id:number, newName:string):void{
    var countryToUpdate: CountryData ={
      Id: _id,
      Name: newName
    };
    this.landen.forEach(element => {
        if(element.Id == _id){
          countryToUpdate = element;
        }
    });
    this._svc.updateCountry(countryToUpdate).subscribe(result =>{
      this._svc.getAllCountries(this.page, this.sorting).subscribe(r =>{
        this.landen = r;
      });
    });
  }

  CountryDelete(_id:number):void{
    this._svc.deleteCountry(_id).subscribe(result =>{
      this._svc.getAllCountries(this.page, this.sorting).subscribe(r =>{
        this.landen = r;
      })
    });
  }
  
}
