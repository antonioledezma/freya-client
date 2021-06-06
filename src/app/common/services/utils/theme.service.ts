import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";


@Injectable({
  providedIn: "platform",
})

export class ThemeService {
  private _theme: Theme = "light";
  private _renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  get theme () {
    return this._theme;
  }

  set theme (theme: Theme) {
    this._theme = theme;
    this._renderer.addClass(this.document.body, theme + "-theme");
  }
}

export type Theme = "light" | "dark";