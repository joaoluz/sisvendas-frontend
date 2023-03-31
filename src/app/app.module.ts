import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAlertModule, NgbPaginationModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// function initializeKeycloak(keycloak: KeycloakService) {
//     return () =>
//         keycloak.init({
//             config: {
//                 url: 'http://localhost:8082/auth',
//                 realm: 'sisvendas',
//                 clientId: 'sisvendas-frontend',
//             },
//             initOptions: {
//                 onLoad: 'login-required',
//                 checkLoginIframe: true
//             },
//         });
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
        FontAwesomeModule,
        NgbTooltipModule,
        NgbModule
    ],
    // providers: [
    //     {
    //         provide: APP_INITIALIZER,
    //         useFactory: initializeKeycloak,
    //         multi: true,
    //         deps: [KeycloakService],
    //     }
    // ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
