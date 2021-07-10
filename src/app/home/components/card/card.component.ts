import { Component, Input } from "@angular/core";
import { NoteModel } from "src/app/common/models/note.model";


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})

export class CardComponent {
  @Input() note: NoteModel;

  constructor() {
    this.note = {
      title: "",
      text: "",
      owner: undefined,
      folder: undefined,
    }
  }
}