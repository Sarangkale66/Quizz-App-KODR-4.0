import { Button } from "../component/Button.js";
import { Page } from "../core/Page.js"

export class HomePage extends Page {
  private _count: number = 0;
  private _flag: boolean = false;
  private _button: Button = new Button({
    count: this._count
  });

  render(): string {
      this._button.props = {
        count: this._count
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
    const button = this._element?.querySelector("#btn") as HTMLButtonElement | null;
    button?.addEventListener("click", () => {
      const parent = this._element?.parentElement;
      if(!parent) {
        throw new Error("parent doesn't exists");
      }
      this._count += 1;
      this._flag = !this._flag;
      this.unMount()
      this.mount(parent);
    });
  }
}
