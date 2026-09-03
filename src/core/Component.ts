// abstract class Component (parent)
// - abstract render() --> return HTML
// - abstract style() ---> return custom-css
// - mount() { _createElement }
// - unMount() { this }
// - private _createElement

// class HomePage extends Component
// render() --> html
// style() --> css
// - mount() { // inject html }
// - unMount() { this }

// const db = new HomePage() --> object
// db.mount();
// db.unMount();

export abstract class Component {
    protected _element: HTMLElement | null = null;
    private _customCss: HTMLStyleElement | null =null;

    abstract render():string;
    abstract style():string;

    mount(parent: HTMLElement, flag:boolean = true) {
        this._injectStyle();
        const el = this._createElement();
        if(el!==null){
            parent.appendChild(el);
            this._element = el;
        }
        if(flag) this.onMount();
    }

    hydrate(element: HTMLElement, flag:boolean = true) {
        this._injectStyle();
        this._element = element;
        if(flag) this.onMount();
    }

    unMount() { 
        this.onUnmount();
        this._element?.remove();
        this._element = null;
    }

    onMount() {
    }
    
    onUnmount() {
    }

    private _createElement(): HTMLElement | null { // bussiness
        const tl = document.createElement("template"); // <template></template>
        tl.innerHTML = this.render().trim(); // <template> html; </template> 
        return (tl.content.firstChild) as (HTMLElement | null) ;
    }

    protected _injectStyle():void {
        const css = this.style().trim(); // css
        if(!css) return;
        const key = this.constructor.name;
        if(document.querySelector(`style[data-cmp=${key}`)) return; 
        this._customCss = document.createElement("style");
        this._customCss.textContent = css;
        this._customCss.dataset["cmp"] = key;
        document.head.appendChild(this._customCss);
    }
}

// resuable components and props
