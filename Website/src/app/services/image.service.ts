import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import { PictureData } from "../DataInterfaces/PictureInterface";

@Injectable()
export class ImageService{
    constructor(private _http: HttpClient) {

    }

     getImages():Observable<PictureData[]>{
        return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items');
     }

     getImagesId(itemId:number):Observable<PictureData>{
        return this._http.get<PictureData>('http://localhost:5000/api/v1/items/' + itemId);
     }

     getWeapons():Observable<PictureData[]>{
        return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/weapons');
     }

     getUseItems():Observable<PictureData[]>{
        return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/use');
     }

     getEquipment():Observable<PictureData[]>{
        return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/gear');
     }

     getAttachments():Observable<PictureData[]>{
        return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/attachments');
     }

     getAmmunition():Observable<PictureData[]>{
        return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/ammunition');
     }

     getMaps():Observable<PictureData[]>{
        return this._http.get<PictureData[]>('http://localhost:5000/api/v1/items/maps');
     }
}
