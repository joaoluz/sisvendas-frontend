import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisvendas-frontend';

  constructor(
    private keycloakService: KeycloakService
    ) {
  }

  sair:string = 'Sair';
  voltar_inicio:string = 'Voltar ao inicio';

  logout() {
    this.keycloakService.logout()
  }
}
