import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @Input() value: string = "";
  @Input() placeholder: string = "";
  @Input() maxlength: number = 32;
  @Input() type: string = "input";

  constructor() {

  }
}
