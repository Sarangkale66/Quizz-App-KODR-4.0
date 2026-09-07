import { Component } from "../core/Component.js";
import { useState } from "../core/useState.js";

interface IButton {
    id: string;
}

export class Button extends Component {
    private count = useState(0, this);
    public props: IButton;
    constructor(props: IButton){
        super();
        this.props = props;
    }
    render() {
      this._injectStyle();
      return `<button class="btn" data-id=${this.props.id}>Click Me!!!:${this.count.value}</button>`
    }
    
    style(): string {
        return `
          .btn {
             padding: 3px 5px;
             border: 1px solid black;
             background-color:red;
          }
        `
    }

    onMount(): void {
        // this._element --> null;
        this._element = document.querySelector(`button[data-id=${this.props.id}`);
        const btn = this._element;
        btn?.addEventListener("click", ()=>{
            this.count.set(this.count.value + 1);
        })
    }
}