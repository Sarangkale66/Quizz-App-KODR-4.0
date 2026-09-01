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
       this.onMount();
    }

    rerender() {
        if(!this._element) return;
        this.onUnMount();
        const newEl = this._createElement(); 
        if(newEl !==null) {
            this._element.replaceWith(newEl);
            this._element = newEl;
        }
        this.onMount();
    }
    
    // element ko remove karna
    unmount() {
       this.onUnMount();
       this._element?.remove();
       this._element = null;
    }

    onMount() {}

    onUnMount() {}

     //   <template> 
     //      <div id="1"></div>
     //      <div id="2"></div>   
     //   </template>

    private _createElement(): HTMLElement | null {      
        const tl = document.createElement("template");
        tl.innerHTML = this.render();
        const child = tl.content.firstElementChild as HTMLElement | null;
        return child;
    } 

    private _injectStyle():void {
        const css = this.style().trim();
        if(!css) return;
        const key = this.constructor.name; //HomePage
        if(document.querySelector(`style[data-aalu=${key}]`)) return;
        this._styleTag = document.createElement("style");
        this._styleTag.textContent = css;
        this._styleTag.dataset['aalu'] = key;
        document.head.appendChild(this._styleTag);
    }   
}