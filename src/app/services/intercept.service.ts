import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class InterceptService implements HttpInterceptor {
    key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5N2U4MmJmMC0zNGY3LTAxMzYtNWViZC0xZGQzYzQ2YzVlMWEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI1Nzg4Njc1LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmdlbmVyYWwiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.cPeOcybGuxkP1Y_LhjY_Hb-klKU8ICcbPP85lxfuZiw";
    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Accept: 'application/vnd.api+json',
                Authorization: 'Bearer ' + this.key
            }
        });

        return next.handle(req);
    }
}