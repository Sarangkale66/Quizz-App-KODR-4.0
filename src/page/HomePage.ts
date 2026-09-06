import { Button } from "../component/Button.js";
import { Page } from "../core/Page.js"
import { useState } from "../core/useState.js";

export class HomePage extends Page {
  private hook = useState(0, this);
  private _flag: boolean = false;
  private _button: Button = new Button({
    count: this.hook.get()
  });

  render(): string {
      this._button.props = {
        count: this.hook.get()
      };
      return `
      <div class=${this._flag ? "bgm-red" : "bgm-blue"}>
         <h1 class="head">Hello World</h1>
         <h2 class="head">Thik hai karliya</h2>
         ${this._button.render()}
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
    this._button.onMount();

    this._element?.addEventListener("btn-clicked", (e)=>{
        console.log((e as CustomEvent).detail)
    });

    const button = this._element?.querySelector("#btn") as HTMLButtonElement | null;
    button?.addEventListener("click", () => {
      const parent = this._element?.parentElement;
      if(!parent) {
        throw new Error("parent doesn't exists");
      }
      this.hook.set(this.hook.get() + 1);
      this._flag = !this._flag;
    });
  }
}
