import { ViewContainerRef } from "@angular/core";


export interface ModalInterface {
	deploy(viewContainerRef: ViewContainerRef, title: string | undefined,  message: string | undefined, onResponse: Function): void;
}