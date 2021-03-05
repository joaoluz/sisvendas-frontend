import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {CategoriaService} from 'src/app/providers/categoria.service';
import {Categoria} from '../../../models/categoria';

@Component({
    selector: 'app-categoria-consulta',
    templateUrl: './categoria-consulta.component.html',
    styleUrls: ['./categoria-consulta.component.css']
})
export class CategoriaConsultaComponent implements OnInit {
    paginacao: any;
    categoria: Categoria;
    constructor(private categoriaService: CategoriaService) {
    }

    ngOnInit() {
        this.categoria = new Categoria();
        this.search(0);
    }

    loadPage(page) {
        this.search(page - 1);
    }

    search(page) {
        this.categoriaService.getCategoriasPaginada(page).subscribe(pageable => {
            this.paginacao = pageable;
            this.paginacao.pageable.page = this.paginacao.pageable.page + 1;
        });
    }

    delete(index) {
        swal({
            title: 'Você tem certeza?',
            text: 'Deseja realmente excluir esta Categoria!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Excluir!',
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                this.paginacao.content.splice(index, 1);
                swal(
                    'Deletado!',
                    'Categoria excluída com sucesso.',
                    'success'
                );
            }
        });
    }
}
