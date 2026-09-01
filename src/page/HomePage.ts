import { Page } from "../core/Page.js";
import { useState } from "../core/useState.js";

export class HomePage extends Page{
    private _count = useState(0, this);

    render(): string {
        return `
        <div>
           <h1>${this._count.get()}</h1>
           <button id="btn" class="px-5 py-3 bg-blue-200 border-border cursor-pointer">Click Me!!!</button>
        </div>
        `;
    }

    style(): string {
        return `
          #head {
            color:orange;
            background-color:black; 
          }
        `;
    }

    override onPageReady():void {
        const btn = document.querySelector("#btn") as HTMLButtonElement | null;
        if(btn) {
            btn.addEventListener("click",()=> {
                this._count.set((prev)=>prev+1);
            })
        }
    }
    

}