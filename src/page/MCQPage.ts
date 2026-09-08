import { Page } from "../core/Page.js";

export class MCQPage extends Page {
    render(): string {
        this._injectStyle();
        return `<div>
          <h1>Hello MCQPage</h1>
        </div>`;
    }
    style(): string {
        return ``;
    }
}