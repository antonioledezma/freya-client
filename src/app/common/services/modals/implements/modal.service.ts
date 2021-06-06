import { ComponentFactoryResolver, Injectable, ViewContainerRef } from "@angular/core";
import { DialogComponent } from "../../../components/dialog/dialog.component";
import { ResponseDialogType } from "../../../components/dialog/dialog.interface";
import { ModalInterface } from "../modal.interface";


@Injectable({
  providedIn: "root",
})

export class ModalService implements ModalInterface {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  deploy(
    viewContainerRef: ViewContainerRef, 
    title: string | undefined, 
    message: string | undefined, 
    onResponse: Function): void {
      
	  let componentFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(DialogComponent)
    let component = viewContainerRef.createComponent(componentFactoryResolver);
    component.instance.title = title;
    component.instance.message = message;

    component.instance.onResponse = (response: ResponseDialogType) => {
      onResponse(response);
      component.destroy();
    };
  }
}