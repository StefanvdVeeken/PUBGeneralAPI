import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class ImageService{
    constructor(private _http: HttpClient) {

    }

     getImages():Observable<ByteString[]>{
        return this._http.get<ByteString[]>('http://localhost:5000/api/v1/maps');
     }
}
