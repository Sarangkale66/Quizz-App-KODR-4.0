import { Page } from "../core/Page.js";

export class ReviewPage extends Page {
    render(): string {
        this._injectStyle();
        return `<div>
          <h1>Hello ReviewPage</h1>
        </div>`;
    }
    style(): string {
        return ``;
    }
}