import { Component } from "../core/Component.js";

interface IButton {
    id: string;
    name: string;
    routeName?: string;
}

export class Button extends Component {
    public props: IButton;
    constructor(props: IButton){
        super();
        this.props = props;
    }
    render() {
      this._injectStyle();
      const props = this.props;
      return `<button class="btn" data-id=${props.id}>${props.name}</button>`
    }
    
    style(): string {
        return `
          .btn {
             padding: 3px 5px;
             border: 1px solid black;
             color: white;
             background: linear-gradient(90deg, #4847d4 0%, #7f28cf 100%);
             border-radius: 1.5vh;
             cursor:pointer;
          }
        `
    }

    onMount(): void {
        // this._element --> null;
        this._element = document.querySelector(`button[data-id=${this.props.id}`);
        const btn = this._element;

        if(this.props.routeName) {
            btn?.addEventListener("click", ()=>{
                console.log("button clicked")
                btn.dispatchEvent(new CustomEvent("route", {
                    bubbles: true,
                    composed: true,
                    detail : {
                        routeName: this.props.routeName
                    }
                }));
            })
        }
    }
}