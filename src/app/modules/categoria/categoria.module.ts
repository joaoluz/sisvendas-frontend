import {NgModule} from '@angular/core';
import {CategoriaRoutingModule} from './categoria-routing.module';
import {CategoriaConsultaComponent} from './categoria-consulta/categoria-consulta.component';
import {CategoriaPaiPipe} from '../../pipe/categoria-pai.pipe';
import {CategoriaFormularioComponent} from './categoria-formulario/categoria-formulario.component';
import {FormsModule} from '@angular/forms';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CategoriaConsultaComponent,
    CategoriaFormularioComponent,
    CategoriaPaiPipe
  ],
  imports: [
    FormsModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbAlertModule,
    CategoriaRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class CategoriaModule { }
