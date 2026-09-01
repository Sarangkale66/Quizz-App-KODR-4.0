import { Page } from "../core/Page.js";

export class HomePage extends Page{
    private _count:number=0;

    render(): string {
        return `
        <div>
           <h1>${this._count}</h1>
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
            const parent = this._element?.parentElement;
            if(!parent) {
                throw new Error("Parent Doesn't exists")
            }

            btn.addEventListener("click",()=> {
                this.unmount();
                this._count += 1;
                this.mount(parent);
            })
        }
    }
    

}