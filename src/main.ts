import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {ApplicationConfig, importProvidersFrom} from "@angular/core";
import {
  provideRouter,
  withComponentInputBinding,
  withDisabledInitialNavigation,
  withEnabledBlockingInitialNavigation, withViewTransitions
} from "@angular/router";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {routes} from "./app/app-routes";
import {provideAnimations} from "@angular/platform-browser/animations";
import {WebSocketApi} from "./app/websocket/web-socket-api";
import {errorCatchingInterceptor} from "./app/interceptors/error-catching.intercetor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {urlInterceptor} from "./app/interceptors/url-interceptor";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "./environments/environment";
export const appConfig: ApplicationConfig = {
  providers:[
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withDisabledInitialNavigation(),
      withComponentInputBinding(),
      withViewTransitions(),
    ),
    provideHttpClient(withInterceptors([errorCatchingInterceptor,urlInterceptor])),
    importProvidersFrom(MatSnackBarModule, AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule),

    provideAnimations(),
    WebSocketApi,

  ]
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
