import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(req)
        let authReq;
        let token = localStorage.getItem('token')
        if (token) {
            // add token to request
            const headers = new HttpHeaders()
                .set('Authorization', JSON.parse(token).id)
            authReq = req.clone({ headers: headers })
        }
        else {
            authReq = req.clone()
        }
        //下面的头不加好像也没关系
        // const authReq = req.clone({ setHeaders: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
        return next.handle(authReq).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    //redirect to login
                    this.router.navigate(['/login'])
                }
            }

        })
    }
}