import { Button } from "../component/Button.js";
import { Page } from "../core/Page.js"

export class HomePage extends Page {
  private _button: Button = new Button({ id: "A", name: "Start Quizz" });

  render(): string {
      this._injectStyle(); // CSS header me inject ho rahi
      this._button.props.routeName = "MCQPage";
      return `
      <main class="home-page">
        <div class="home-page__glow home-page__glow--top"></div>
        <div class="home-page__glow home-page__glow--bottom"></div>

        <section class="welcome" aria-labelledby="welcome-title">
          <div class="welcome__mark" aria-hidden="true">
            <span class="welcome__badge welcome__badge--settings">&#9881;</span>
            <span class="welcome__badge welcome__badge--trophy">&#127942;</span>
            <div class="welcome__disc">
              <div class="welcome__spark welcome__spark--one">&#10022;</div>
              <div class="welcome__spark welcome__spark--two">&#10022;</div>
              <div class="welcome__bulb">
                <span class="welcome__bulb-glow"></span>
                <span class="welcome__filament">?</span>
                <span class="welcome__bulb-base"></span>
              </div>
              <p>Welcome to</p>
              <strong>QuizMaster</strong>
            </div>
          </div>

          <div class="welcome__content">
            <h1 id="welcome-title">Ready to test your<br />knowledge?</h1>
            <p class="welcome__copy">Choose a category and start your journey to become a<br class="welcome__desktop-break" /> master. Challenge yourself, learn new facts, and climb<br class="welcome__desktop-break" /> the leaderboard.</p>
          </div>

          <div class="welcome__actions">
            ${this._button.render()}
            <div class="welcome__links" aria-label="Quiz options">
              <a href="#leaderboard"><span aria-hidden="true">&#9602;&#9606;&#9609;</span> View Leaderboard</a>
              <i aria-hidden="true"></i>
              <a href="#settings"><span aria-hidden="true">&#9881;</span> Settings</a>
            </div>
          </div>
        </section>
      </main>
       `;
  }

  style(): string {
    return `
      .home-page, .home-page * { box-sizing: border-box; }

      .home-page {
        position: relative;
        display: grid;
        min-height: 100vh;
        overflow: hidden;
        place-items: center;
        padding: 48px 24px;
        background: #f8f8ff;
        color: #10233e;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        isolation: isolate;
      }

      .home-page__glow {
        position: absolute;
        z-index: -1;
        width: 520px;
        height: 520px;
        border-radius: 50%;
        filter: blur(74px);
        opacity: .38;
        pointer-events: none;
      }

      .home-page__glow--top { top: -345px; right: -120px; background: #d8d9ff; }
      .home-page__glow--bottom { bottom: -390px; left: -190px; background: #e4d8ff; }

      .welcome {
        display: flex;
        width: min(100%, 720px);
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .welcome__mark {
        position: relative;
        width: 252px;
        height: 278px;
        margin-bottom: 48px;
      }

      .welcome__disc {
        position: absolute;
        top: 20px;
        left: 50%;
        display: flex;
        width: 240px;
        height: 240px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 30px;
        border: 4px solid rgba(255, 255, 255, .88);
        border-radius: 50%;
        background: radial-gradient(circle at 38% 22%, #ffffff 0, #f8f5ff 48%, #e4e4f4 100%);
        box-shadow: 0 22px 34px rgba(57, 55, 126, .18), inset 0 1px 4px #ffffff;
        transform: translateX(-50%);
      }

      .welcome__disc p, .welcome__disc strong { position: relative; z-index: 1; margin: 0; }
      .welcome__disc p { color: #68659d; font-size: 13px; font-weight: 600; line-height: 16px; }
      .welcome__disc strong { color: #352b77; font-size: 20px; line-height: 22px; letter-spacing: -.8px; }

      .welcome__bulb {
        position: absolute;
        top: 43px;
        left: 50%;
        width: 73px;
        height: 103px;
        border: 4px solid #5f4ac1;
        border-radius: 43% 43% 39% 39%;
        background: radial-gradient(circle at 35% 25%, #fff6bc 0 3%, #e77cff 22%, #7957e1 48%, #273674 83%);
        box-shadow: 0 0 20px rgba(211, 82, 242, .58), inset -9px -11px 15px rgba(24, 39, 103, .55);
        transform: translateX(-50%) rotate(-2deg);
      }

      .welcome__bulb::after {
        position: absolute;
        bottom: -17px;
        left: 17px;
        width: 32px;
        height: 17px;
        border-radius: 2px 2px 8px 8px;
        background: repeating-linear-gradient(to bottom, #515274 0 3px, #c5b7cb 3px 5px);
        box-shadow: 0 2px 0 #393b5c;
        content: "";
      }

      .welcome__bulb-glow { position: absolute; top: 13px; left: 15px; width: 22px; height: 28px; border-radius: 50%; background: rgba(255,255,255,.76); filter: blur(5px); }
      .welcome__filament { position: absolute; top: 34px; left: 50%; color: #fffbd3; font-size: 34px; font-weight: 800; line-height: 1; text-shadow: 0 0 10px #fff26d; transform: translateX(-50%); }
      .welcome__bulb-base { position: absolute; top: -10px; left: 15px; width: 35px; height: 13px; border: 3px solid #5b5889; border-bottom: 0; border-radius: 8px 8px 0 0; background: #e5c2ce; }

      .welcome__spark { position: absolute; color: #f6c94a; font-size: 21px; }
      .welcome__spark--one { top: 44px; right: 54px; color: #5043aa; }
      .welcome__spark--two { top: 94px; left: 49px; }

      .welcome__badge {
        position: absolute;
        z-index: 2;
        display: grid;
        width: 58px;
        height: 58px;
        place-items: center;
        border-radius: 50%;
        color: #fff;
        font-size: 25px;
        box-shadow: 0 9px 16px rgba(74, 44, 157, .23);
      }

      .welcome__badge--settings { top: 0; right: 0; background: #7725d4; }
      .welcome__badge--trophy { bottom: 14px; left: 0; background: #bf3f88; font-size: 22px; }

      .welcome__content h1 { margin: 0; color: #10223e; font-size: clamp(42px, 4vw, 62px); font-weight: 800; letter-spacing: -2.8px; line-height: 1.07; }
      .welcome__copy { margin: 17px 0 0; color: #5a5b6f; font-size: 20px; font-weight: 500; line-height: 1.55; }

      .welcome__actions { display: flex; width: min(100%, 376px); flex-direction: column; align-items: stretch; margin-top: 82px; }
      .welcome__actions .btn { width: 100%; min-height: 74px; border: 0; border-bottom: 5px solid #312dc3; border-radius: 15px; background: linear-gradient(105deg, #4347da 0%, #8722d4 100%); box-shadow: 0 11px 17px rgba(76, 57, 186, .22); color: #fff; font: inherit; font-size: 18px; font-weight: 800; letter-spacing: .3px; cursor: pointer; transition: transform .18s ease, box-shadow .18s ease; }
      .welcome__actions .btn::after { margin-left: 11px; content: "\\2192"; font-size: 30px; font-weight: 400; line-height: 0; vertical-align: -3px; }
      .welcome__actions .btn:hover { box-shadow: 0 14px 22px rgba(76, 57, 186, .3); transform: translateY(-2px); }
      .welcome__actions .btn:active { transform: translateY(2px); }

      .welcome__links { display: flex; align-items: center; justify-content: center; gap: 17px; margin-top: 28px; color: #525366; }
      .welcome__links a { color: inherit; font-size: 15px; font-weight: 650; text-decoration: none; }
      .welcome__links a:hover { color: #5e35c9; }
      .welcome__links span { display: inline-block; margin-right: 4px; color: #56576a; font-size: 17px; letter-spacing: -3px; }
      .welcome__links i { width: 4px; height: 4px; border-radius: 50%; background: #c2c3d0; }

      @media (max-width: 600px) {
        .home-page { min-height: 100svh; padding: 28px 20px; }
        .welcome__mark { margin-bottom: 28px; transform: scale(.84); transform-origin: bottom center; }
        .welcome__content h1 { font-size: 42px; letter-spacing: -1.8px; }
        .welcome__copy { font-size: 17px; }
        .welcome__desktop-break { display: none; }
        .welcome__actions { margin-top: 52px; }
      }
    `;
  }

  override onPageReady(): void {  
    this._button.onMount(); // child button js inject honi chahiye
  }
}
