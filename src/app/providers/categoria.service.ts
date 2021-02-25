import { environment } from './../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Categoria } from './../models/categoria';
import { Injectable } from '@angular/core';
import {Pageable} from './pageable';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly apiCategoria = `${environment.URL_BACKEND}/categoria`;

  constructor(private httpclient: HttpClient) {
  }

  getCategoriasPaginada(page) {
    return this.httpclient.get<Pageable>(this.apiCategoria + '/listar', {
      params: new HttpParams().set('page', page)
    } );
  }

  getCategoriasPais() {
      return this.httpclient.get<Categoria[]>(this.apiCategoria + '/pais');
  }

  save(categoria:Categoria) {
      return this.httpclient.post<Categoria>(this.apiCategoria, categoria);
  }
}
