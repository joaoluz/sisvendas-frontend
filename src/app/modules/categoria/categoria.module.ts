import {NgModule} from '@angular/core';
import {CategoriaRoutingModule} from './categoria-routing.module';
import {CategoriaConsultaComponent} from './categoria-consulta/categoria-consulta.component';
import {CategoriaPaiPipe} from '../../pipe/categoria-pai.pipe';
import {CategoriaFormularioComponent} from './categoria-formulario/categoria-formulario.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbAlertModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CategoriaConsultaComponent,
    CategoriaFormularioComponent,
    CategoriaPaiPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbPaginationModule.forRoot(),
    NgbAlertModule,
    CategoriaRoutingModule
  ],
  providers: [],
})
export class CategoriaModule { }
