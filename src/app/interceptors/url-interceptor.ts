import {HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest} from "@angular/common/http";

export const urlInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  return next(req.clone({
      url:'http://localhost:8080'+req.url,
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     }));

}
