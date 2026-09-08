import { Button } from "../component/Button.js";
import { Page } from "../core/Page.js"

export class NotFound extends Page {
  private _button: Button = new Button({ id: "A", name: "Start Quizz" });

  render(): string {
      this._injectStyle(); // CSS header me inject ho rahi
      const buttonProps = this._button.props;
      buttonProps.name = "Redirect To HomePage";
      buttonProps.routeName = "HomePage";
      return `
        <div>
           <h1 class="text-bold">Not Found</h1>
           <h2 class="underline">404</h2>
           ${this._button.render()}
        </div>`;
  }

  style(): string {
    return ``;
  }

  override onPageReady(): void {  
    this._button.onMount(); // child button js inject honi chahiye
  }
}
