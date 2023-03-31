import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/providers/categoria.service';
import Swal from 'sweetalert2';
import { Categoria } from '../../../models/categoria';

@Component({
    selector: 'app-categoria-consulta',
    templateUrl: './categoria-consulta.component.html',
    styleUrls: ['./categoria-consulta.component.css']
})
export class CategoriaConsultaComponent implements OnInit {
    paginacao: any;
    categoria: Categoria = new Categoria();
    constructor(private categoriaService: CategoriaService) {
    }

    ngOnInit() {
        this.search(0);
    }

    loadPage(page:any) {
        this.search(page - 1);
    }

    search(page:any) {
        this.categoriaService.getCategoriasPaginada(page).subscribe(pageable => {
            this.paginacao = pageable;
            this.paginacao.pageable.page = this.paginacao.pageable.page + 1;
        });
    }

    delete(index:any) {
        Swal.fire({
            title: 'Você tem certeza?',
            text: 'Deseja realmente excluir esta Categoria!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Excluir!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result:any) => {
            if (result.value) {
                this.paginacao.content.splice(index, 1);
                Swal.fire(
                    'Deletado!',
                    'Categoria excluída com sucesso.',
                    'success'
                );
            }
        });
    }
}
