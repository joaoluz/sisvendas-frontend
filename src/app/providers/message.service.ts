import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(protected toastr: ToastrService) {
    }

    tratarErro(message) {
        message.error.errors.forEach(err => {
            this.toastr.error(err.message);
        });
    }

    tratarSucesso(message) {
        this.toastr.success(message);
    }
}