import {
  HttpErrorResponse,
  HttpHandler, HttpHandlerFn, HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import {catchError,  throwError} from "rxjs";
import {inject, } from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";


export const errorCatchingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const matSnackBar=inject(MatSnackBar);
  return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.status >= 400 && error.status < 500) {
          errorMsg = "Error client side.Try again";
        } else {
          errorMsg = "Unavailable  Server.Try again later";
        }
        matSnackBar.open(errorMsg, `${error.status}`)
        return throwError(error);
      })
    )
}

//
// @Injectable()
// export class ErrorCatchingInterceptor implements HttpInterceptor {
//
//   constructor(private matSnackBar: MatSnackBar) {
//   }
//
//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     return next.handle(request.clone({
//       url:'http://localhost:8080'+request.url,
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     }))
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           let errorMsg = '';
//           if (error.status>=400 && error.status<500) {
//             errorMsg = "Error client side.Try again";
//           } else {
//             errorMsg = "Unavailable  Server.Try again later";
//           }
//           this.matSnackBar.open(errorMsg, `${error.status}`)
//           return throwError(error);
//         })
//       )
//   }
// }
