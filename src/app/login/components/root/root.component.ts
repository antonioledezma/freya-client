import { Component, ViewContainerRef } from '@angular/core';
import { ResponseDialogType } from 'src/app/common/components/dialog/dialog.interface';
import { ModalService } from 'src/app/common/services/modals/implements/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private modalService: ModalService) {

  }

  onLogin(username: string, password: string): boolean {
    let message: string | undefined = "Conexión no disponible";

    this.modalService.deploy(this.viewContainerRef, undefined, message, (response: ResponseDialogType) => {
      console.log(response);
    });
    return false;
  }

  onCreateUser() {
    let title: string = "Alerta";
    let message: string = "Aqui se debe implementar la creación de usuarios";

    this.modalService.deploy(this.viewContainerRef, title, message, (response: ResponseDialogType) => {
      console.log(response);
    });
  }
}
