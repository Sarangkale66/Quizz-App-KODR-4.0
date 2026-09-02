import { Page } from "../core/Page.js"

export class HomePage extends Page {
    render(): string {
        return `
        <div>
           <h1 class="head">Hello World</h1>
           <h2 class="head">Thik hai karliya</h2>
        </div>
         `;
    }

    style(): string {
        return `
          .head {
            font-weight:700;
            font-size:x-large;
            color:red;
          }
        `;
    }

}