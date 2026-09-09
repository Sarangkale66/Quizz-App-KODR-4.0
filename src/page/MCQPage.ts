import { Card } from "../component/Card.js";
import { ProgressBar } from "../component/ProgressBar.js";
import { Page } from "../core/Page.js";
import { useState } from "../core/useState.js";
import { mcqs, type MCQ } from "../dummy/mcq.dummy.js";

export class MCQPage extends Page {
    private _currentIndex = useState<number>(0, this);
    private _percent = 0;
    private _len = mcqs.length; // total: 5
    private _progressBar = new ProgressBar();
    private _card = new Card();
    render(): string {
        this._injectStyle();
        const mcq = mcqs[this._currentIndex.value];
        this._card.props = { question: mcq?.question, options: mcq?.options } as MCQ
        this._progressBar.props.percent = String(this._percent);

        return `<main class="mcq-page">
          <section class="mcq-shell" aria-labelledby="question-progress">
            <header class="mcq-header">
              <div>
                <p class="mcq-category">Geography</p>
                <p class="mcq-count" id="question-progress">Question 3 of 10</p>
              </div>
              <div class="mcq-timer" aria-label="2 seconds remaining">
                <svg viewBox="0 0 44 44" aria-hidden="true"><circle class="mcq-timer__track" cx="22" cy="22" r="18" /><circle class="mcq-timer__value" cx="22" cy="22" r="18" /></svg>
                <span>2</span>
              </div>
            </header>
            ${this._progressBar.render()}  
            ${this._card.render()}
          </section>
        </main>`;
    }
    style(): string {
        return `
          .mcq-page, .mcq-page * { box-sizing: border-box; }
          .mcq-page {
            display: grid;
            min-height: 100vh;
            place-items: center;
            padding: 46px 24px;
            background: #f8f8ff;
            color: #10223e;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .mcq-shell {
            width: min(100%, 770px);
            display: flex;
            flex-direction: column;
          }
          .mcq-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 23px;
          }
          .mcq-category {
            margin: 0 0 5px;
            color: #5755eb;
            font-size: 15px;
            font-weight: 800;
            letter-spacing: 1.4px;
            line-height: 1;
            text-transform: uppercase;
          }
          .mcq-count {
            margin: 0;
            color: #10223e;
            font-size: 25px;
            font-weight: 600;
            letter-spacing: -.8px;
          }
          .mcq-timer {
            position: relative;
            display: flex;
            width: 64px;
            height: 64px;
            align-items: center;
            justify-content: center;
            color: #4c4bdd;
            font-size: 24px;
            font-weight: 800;
          }
          .mcq-timer svg { position: absolute; inset: 0; width: 100%; height: 100%; transform: rotate(-90deg); }
          .mcq-timer circle { fill: none; stroke-width: 4; }
          .mcq-timer__track { stroke: #dbe6ff; }
          .mcq-timer__value { stroke: #4e4bdf; stroke-linecap: round; stroke-dasharray: 23 113; }
          @media (max-width: 600px) {
            .mcq-page { padding: 24px 18px; }
            .mcq-header { margin-bottom: 17px; }
            .mcq-count { font-size: 21px; }
            .mcq-timer { width: 54px; height: 54px; font-size: 21px; }
          }
        `;
    }

    override onPageReady(): void {
        this._element = document.querySelector<HTMLElement>(".mcq-page");
        const page = this._element;
        const options = page?.querySelectorAll<HTMLButtonElement>(".quiz-option");
        const nextButton = page?.querySelector<HTMLButtonElement>(".quiz-next");

        options?.forEach((option) => {
            option.addEventListener("click", () => {
                options.forEach((item) => item.classList.remove("quiz-option--selected"));
                option.classList.add("quiz-option--selected");
                nextButton?.removeAttribute("disabled");
            });
        });

        nextButton?.addEventListener("click", () => {
            if (!nextButton.disabled) {
                nextButton.dispatchEvent(new CustomEvent("route", {
                    bubbles: true,
                    composed: true,
                    detail: { routeName: "ReviewPage" }
                }));
            }
        });
    }
}
