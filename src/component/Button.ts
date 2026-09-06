import { Component } from "../core/Component.js";

interface IButton {
    count: number;
}

export class Button extends Component {
    public props: IButton;
    constructor(props: IButton){
        super();
        this.props = props;
    }
    render() {
      this._injectStyle();
      return `<button id="btn">Click Me!!!:${this.props.count}</button>`
    }
    
    style(): string {
        return `
          #btn {
             padding: 3px 5px;
             border: 1px solid black;
             background-color:red;
          }
        `
    }

    onMount(): void {
        // this._element --> null;
        this._element = document.querySelector("#btn");
        const btn = this._element;
        btn?.addEventListener("click", ()=>{
            // custom event
            btn.dispatchEvent(new CustomEvent("btn-clicked", {
                bubbles: true, 
                detail: {
                    value: true,
                    count: this.props.count
                }
            }))
        })
    }
}