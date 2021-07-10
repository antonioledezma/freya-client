import { Component } from "@angular/core";
import { NoteModel } from "src/app/common/models/note.model";


@Component({
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.css"]
})

export class RootComponent {
  notes: NoteModel[];

  constructor() {
    this.notes = [
      {
        title: "ETitulo",
        text: "EText",
        folder: undefined,
        owner: undefined,
      },{
        title: "ETitulo",
        text: "EText",
        folder: undefined,
        owner: undefined,
      },
    ];
  }
}