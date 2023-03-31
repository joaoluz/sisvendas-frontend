import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CategoriaConsultaComponent} from './categoria-consulta/categoria-consulta.component';
import {CategoriaFormularioComponent} from './categoria-formulario/categoria-formulario.component';

const routes: Routes = [
    { path: 'listar', component: CategoriaConsultaComponent },
    { path: 'incluir', component: CategoriaFormularioComponent },
    { path: 'visualizar/:id', component: CategoriaFormularioComponent },
    { path: 'editar/:id', component: CategoriaFormularioComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule {
}
