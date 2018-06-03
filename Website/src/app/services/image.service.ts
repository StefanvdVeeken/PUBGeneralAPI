import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import { PictureData } from "../DataInterfaces/PictureInterface";
import { CountryData, CountrySend } from "../DataInterfaces/CountryInterface";

@Injectable()
export class ImageService{
    constructor(private _http: HttpClient) {

    }

     getImages(_type:string):Observable<PictureData[]>{
        return this._http.get<PictureData[]>(`http://localhost:5000/api/v1/items?type=${_type}`);
     }

     getImagesId(itemId:number):Observable<PictureData>{
        return this._http.get<PictureData>('http://localhost:5000/api/v1/items/' + itemId);
     }

    //  getWeapons():Observable<PictureData[]>{
    //     return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/weapons');
    //  }

    //  getUseItems():Observable<PictureData[]>{
    //     return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/use');
    //  }

    //  getEquipment():Observable<PictureData[]>{
    //     return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/gear');
    //  }

    //  getAttachments():Observable<PictureData[]>{
    //     return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/attachments');
    //  }

    //  getAmmunition():Observable<PictureData[]>{
    //     return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/ammunition');
    //  }

    //  getMaps():Observable<PictureData[]>{
    //     return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/maps');
    //  }

     getAllCountries(_page:number, _sorting:string):Observable<CountryData[]>{
         return this._http.get<CountryData[]>(`http://localhost:5000/api/v1/countries?page=${_page}&sort=${_sorting}`);
     }

     getCountryById(id:number):Observable<CountryData[]>{
        return this._http.get<CountryData[]>('http://localhost:5000/api/v1/countries/'+id);
    }

    addCountry(CountryName: CountrySend): Observable<CountryData>{
        return this._http.post<CountryData>('http://localhost:5000/api/v1/countries', CountryName);
    }

    updateCountry(country: CountryData):Observable<CountryData>{
        return this._http.put<CountryData>('http://localhost:5000/api/v1/countries', country);
    }

    deleteCountry(id:number):Observable<CountryData>{
        return this._http.delete<CountryData>('http://localhost:5000/api/v1/countries/' + id);
    }
}
