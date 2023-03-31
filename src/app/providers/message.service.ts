import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(protected toastr: ToastrService) {
    }

    tratarErro(message:any) {
        message.error.errors.forEach((err:any) => {
            this.toastr.error(err.message);
        });
    }

    tratarSucesso(message:any) {
        this.toastr.success(message);
    }
}
