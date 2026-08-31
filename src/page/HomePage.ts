import { Page } from "../core/Page.js";

export class HomePage extends Page{
    render(): string {
        return `
           <div class="text-5xl bg-red-500">Hello Wolrd</div>
        `;
    }

    style(): string {
        return `
          #head {
            color:orange;
            background-color:black; 
          }
        `
    }

    registerComponent(): Page[] {
        return []
    }

}