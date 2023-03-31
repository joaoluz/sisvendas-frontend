import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CategoriaService} from 'src/app/providers/categoria.service';
import {Categoria} from 'src/app/models/categoria';
import {MessageService} from '../../../providers/message.service';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private categoriaService:CategoriaService,
    private toastr: ToastrService,
    private messageService: MessageService,
    private router: Router) { }

  categoria = new Categoria();
  categorias:Categoria[] = [];
  disable:any;
  edit:any;
  ngOnInit() {
      this.categoriaService.getCategoriasPais().subscribe(value => {
          this.categorias = value;
      });

      // if (this.route.routeConfig.path == 'visualizar') {
      //     this.disable = true;
      // } else if (this.route.routeConfig.path == 'editar') {
      //     this.edit = true;
      //     this.disable = false;
      // } else {
      //     this.disable = false;
      // }
      // this.route.params.subscribe(params => {
      //     if (params.id != undefined) {
      //         this.getById(params.id);
      //     }
      // });
  }

  getById(identificador:any) {
    this.categorias.forEach(element => {
      if (element.id == identificador) {
        this.categoria = element;
      }
    });
  }

  save() {
    this.categoriaService.save(this.categoria).subscribe(response => {
        this.messageService.tratarSucesso('Categoria cadastrada com sucesso!');
        this.router.navigate(['/categoria/listar'])
    }, erros => {
        this.messageService.tratarErro(erros);
    });
  }
}
