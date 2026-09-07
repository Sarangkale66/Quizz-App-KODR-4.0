import { Button } from "../component/Button.js";
import { Page } from "../core/Page.js"

export class HomePage extends Page {
  private _flag: boolean = false;
  private _button: Button[] = [
    new Button({ id: "A" }),
    new Button({ id: "B" }),
    new Button({ id: "C" }),
    new Button({ id: "D" }),
    new Button({ id: "E" }),
  ];

  render(): string {
      return `
      <div class=${this._flag ? "bgm-red" : "bgm-blue"}>
         <h1 class="head">Hello World</h1>
         <h2 class="head">Thik hai karliya</h2>
         ${this._button.map((btn)=> btn.render()).join("")}
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
      .bgm-red {
        background-color:red;
      }
      .bgm-blue {
        background-color:blue;
      }
    `;
  }

  override onPageReady(): void {  
    this._button.forEach((btn)=> btn.onMount());

    this._element?.addEventListener("btn-clicked", (e)=>{
        console.log((e as CustomEvent).detail)
    });

    const button = this._element?.querySelector("#btn") as HTMLButtonElement | null;
    button?.addEventListener("click", () => {
      const parent = this._element?.parentElement;
      if(!parent) {
        throw new Error("parent doesn't exists");
      }
      this._flag = !this._flag;
    });
  }
}
