import { Component } from "../core/Component.js";
import type { MCQOption } from "../dummy/mcq.dummy.js";

interface ICard {
    question: string;
    options: MCQOption[];
}

export class Card extends Component {
    public props: ICard | null = null;
    render(): string {
        if(this.props === null) return ``;
        const props = this.props;
        this._injectStyle();
        return `<article class="quiz-card" aria-labelledby="quiz-question">
            <h1 id="quiz-question">${props.question}</h1>
            <div class="quiz-options" role="group" aria-label="Answer choices">
               ${props.options.map((option, index)=> `<button class="quiz-option" type="button" data-option="${index}"><span class="quiz-option__letter">${String.fromCharCode(65 + index)}</span><span>${option.text}</span></button>` ).join("")}
            </div>
            <div class="quiz-card__footer">
              <button class="quiz-next" type="button" disabled>Next</button>
            </div>
        </article>`;
    }
    style(): string {
        return `
          .quiz-card, .quiz-card * { box-sizing: border-box; }
          .quiz-card {
            display: flex;
            min-height: 624px;
            flex-direction: column;
            margin-top: 39px;
            padding: 67px 64px 64px;
            border-radius: 12px;
            background: #fff;
            box-shadow: 0 21px 41px rgba(61, 68, 173, .11);
          }
          .quiz-card h1 {
            max-width: 580px;
            margin: 0 auto;
            color: #10223e;
            font-family: Inter, ui-sans-serif, system-ui, sans-serif;
            font-size: 52px;
            font-weight: 800;
            letter-spacing: -2.6px;
            line-height: 1.02;
            text-align: center;
          }
          .quiz-options {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 23px 25px;
            margin-top: 65px;
          }
          .quiz-option {
            display: flex;
            min-height: 86px;
            align-items: center;
            gap: 15px;
            padding: 14px 25px;
            border: 2px solid #d0cfdd;
            border-radius: 8px;
            background: #fff;
            color: #10223e;
            font: inherit;
            font-size: 19px;
            font-weight: 650;
            text-align: left;
            cursor: pointer;
            transition: background .16s ease, border-color .16s ease, transform .16s ease;
          }
          .quiz-option:hover { border-color: #7775e9; transform: translateY(-1px); }
          .quiz-option--selected { border-color: #5552e9; background: #e5edff; }
          .quiz-option__letter {
            display: grid;
            width: 33px;
            height: 33px;
            flex: 0 0 33px;
            place-items: center;
            border-radius: 50%;
            background: #e5efff;
            color: #4e4eac;
            font-size: 15px;
            font-weight: 800;
          }
          .quiz-option--selected .quiz-option__letter { background: #4e4bde; color: #fff; }
          .quiz-card__footer { display: flex; justify-content: flex-end; margin-top: auto; }
          .quiz-next {
            width: 184px;
            min-height: 61px;
            border: 0;
            border-bottom: 5px solid #292bb4;
            border-radius: 8px;
            background: #4b49dc;
            box-shadow: 0 5px 8px rgba(65, 63, 189, .18);
            color: #fff;
            font: inherit;
            font-size: 23px;
            font-weight: 800;
            cursor: pointer;
            transition: transform .16s ease, opacity .16s ease;
          }
          .quiz-next:disabled { opacity: .5; cursor: not-allowed; }
          .quiz-next:not(:disabled):hover { transform: translateY(-2px); }
          .quiz-next:not(:disabled):active { transform: translateY(2px); }
          @media (max-width: 600px) {
            .quiz-card { min-height: 0; margin-top: 25px; padding: 42px 22px 27px; }
            .quiz-card h1 { font-size: 37px; letter-spacing: -1.7px; }
            .quiz-options { grid-template-columns: 1fr; gap: 13px; margin-top: 40px; }
            .quiz-option { min-height: 68px; padding: 10px 16px; font-size: 17px; }
            .quiz-card__footer { margin-top: 34px; }
            .quiz-next { width: 100%; min-height: 57px; font-size: 20px; }
          }
        `;
    }
}
