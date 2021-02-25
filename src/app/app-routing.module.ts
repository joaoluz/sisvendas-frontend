import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: 'categoria',
        loadChildren: './modules/categoria/categoria.module#CategoriaModule'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
