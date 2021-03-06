import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//       keycloak.init({
//         config: {
//           url: 'http://localhost:8080/auth',
//           realm: 'your-realm',
//           clientId: 'your-client-id',
//         },
//         initOptions: {
//           onLoad: 'check-sso',
//           silentCheckSsoRedirectUri:
//               window.location.origin + '/assets/silent-check-sso.html',
//         },
//       });
// }
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    KeycloakAngularModule,
    FontAwesomeModule
  ],
  providers: [
  //     {
  //   provide: APP_INITIALIZER,
  //   useFactory: initializeKeycloak,
  //   multi: true,
  //   deps: [KeycloakService],
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
