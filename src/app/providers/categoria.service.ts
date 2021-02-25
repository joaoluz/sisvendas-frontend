import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../models/categoria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly apiCategoria = `${environment.URL_BACKEND}/categoria`;

  constructor(private httpclient: HttpClient) {
  }

  getCategoriasPaginada(page) {
    return this.httpclient.get<Categoria[]>(this.apiCategoria + '/listar');
  }

  getCategoriasPais() {
      return this.httpclient.get<Categoria[]>(this.apiCategoria + '/pais');
  }

  save(categoria:Categoria) {
      return this.httpclient.post<Categoria>(this.apiCategoria, categoria);
  }
}
