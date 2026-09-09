import { Component } from "../core/Component.js";

interface IProgressBar {
    percent: string;
}

export class ProgressBar extends Component {
    public props : IProgressBar = { percent: "10" };

    render(): string {
        this._injectStyle();
        return `<div class="progress-parent">
           <div class="progress"></div>
        </div>`
    }
    style(): string {
        return `
          .progress-parent {
            position: relative;
            width: 100%;
            height: 13px;
            border-radius: 999px;
            overflow: hidden;
            background: #e0dfff;
          }
          .progress {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            border-radius: inherit;
            background: linear-gradient(90deg, #4847d4 0%, #8526d2 100%);
            width: ${this.props.percent}%
          }
        `
    }
}
