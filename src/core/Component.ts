// div -> HTMLElement, style

export abstract class Component {
    protected _element: HTMLElement|null = null; // index.html
    protected _styleTag: HTMLStyleElement | null = null; // style.css
    
    abstract render():string; // html wali string "<div></div>"

    abstract style():string; // style.css wala content return karti hai

    // element ko dom mein inject karti hai
    mount(parent:HTMLElement) {
       this._injectStyle();
       const el = this._createElement();
       if(el !==null) {
            this._element = el;
            parent.appendChild(this._element);
       }
    }
    
    // element ko remove karna
    unmount() {
       this._element?.remove();
       this._element = null;
    }

    private _createElement(): HTMLElement | null {
        const tl = document.createElement("template");
        console.log("template: ", tl);
        tl.innerHTML = this.render();
        const child = tl.content.firstElementChild as HTMLElement | null;
        return child;
    } 

    private _injectStyle():void {
        const css = this.style().trim();
        if(!css) return;
        const key = this.constructor.name;
        if(document.querySelector(`style[data-aalu=${key}]`)) return;
        this._styleTag = document.createElement("style");
        this._styleTag.textContent = css;
        this._styleTag.dataset['aalu'] = key;
        document.head.appendChild(this._styleTag);
    }   
}