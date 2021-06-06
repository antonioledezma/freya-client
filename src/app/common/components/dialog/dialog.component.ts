import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { DialogInterface, ResponseDialogType } from './dialog.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})

export class DialogComponent implements DialogInterface {
  @Input() title: string | undefined;
  @Input() message: string | undefined;
  
  constructor() {
    
  }

  onResponse(response: ResponseDialogType) {
    
  }

  onAccept(event: Event) {
    event.stopPropagation();
    this.onResponse("ACCEPT");
  }

  onCancel(event: Event): void {
    event.stopPropagation();
    this.onResponse('CANCEL');
  }

  onDismiss(event: Event) {
    event.stopPropagation();
    this.onResponse(undefined);
  }
}
