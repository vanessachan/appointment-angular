import {HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {inject} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map, switchMap} from "rxjs";

export const urlInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const token = inject(AngularFireAuth).idToken
  return token.pipe(switchMap(t => {
    console.log(t);
    let req2 = req.clone({
      url: 'http://localhost:8080' + req.url,
      setHeaders: {
        Authorization: 'Bearer ' + t
      }
    });
    console.log(req2)
    return next(req2)
  }));

}
