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
    private _element: HTMLElement | null = null;
    private _customCss: HTMLStyleElement | null =null;

    abstract render():string;
    abstract style():string;

    mount(parent: HTMLElement) {
        this._injectStyle();
        const el = this._createElement();
        if(el!==null){
            parent.appendChild(el);
            this._element = el;
        }
    }

    unMount() { 
        this._element?.remove();
        this._element = null;
    }

    private _createElement(): HTMLElement | null { // bussiness
        const tl = document.createElement("template"); // <template></template>
        tl.innerHTML = this.render().trim(); // <template> html; </template> 
        return (tl.content.firstChild) as (HTMLElement | null) ;
    }

    private _injectStyle():void {
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