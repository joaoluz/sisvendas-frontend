import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/providers/categoria.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private categoriaService:CategoriaService,
    private toastr: ToastrService,
    private router: Router) { }

  categoria = new Categoria();
  categorias:Categoria[] = [];
  disable;
  edit;
  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(value => {
        this.categorias = value;
    });

    console.log(this.categorias);

    this.route.url.subscribe(value => {
			if (value[1].path == 'visualizar') {
				this.disable = true;
			} else if (value[1].path == 'editar') {
				this.edit = true;
				this.disable = false;
			} else {
				this.disable = false;
			}
		});
		this.route.params.subscribe(params => {
			if (params.id != undefined) {
				this.getById(params.id);
			}
		});
  }

  getById(identificador) {
    this.categorias.forEach(element => {
      if (element.id == identificador) {
        this.categoria = element;
      }  
    });
  }

  save() {
    this.categoriaService.save(this.categoria);
    this.toastr.success('Categoria cadastrada com sucesso!');
    this.router.navigate(['categoria'])
  }
}
