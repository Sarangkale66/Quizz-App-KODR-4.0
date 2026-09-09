import { Page } from "../core/Page.js";
import { HomePage } from "../page/HomePage.js";
import { MCQPage } from "../page/MCQPage.js";
import { ReviewPage } from "../page/ReviewPage.js";
import { useState } from "../core/useState.js";
import { NotFound } from "../page/NotFound.js";

type RouteType =  "HomePage" | "MCQPage" | "ReviewPage" | "NotFound";

export class AppLayout extends Page {
    private _route = useState<RouteType>("MCQPage", this); //by default
    private _pages: Page[] = [new HomePage(), new MCQPage(), new ReviewPage(), new NotFound()];

    render(): string {
        const route = this._route.value;
        const pages = this._pages;
        for(let i:number=0; i<pages.length; i++) {
            const page = pages[i] as Page;
            const name = page.constructor.name as RouteType;
            if (route === name) return page.render();
        }
        return (pages[pages.length-1] as Page).render();
    }
    style(): string {
        return ``;
    }
    onPageReady(): void {
        this._pages.forEach((page)=> page.onPageReady()); // js inject hui

        const appLayoutEl = this._element;
        appLayoutEl?.addEventListener("route",(e)=>{
            const detail = (e as CustomEvent).detail;
            this._route.set(detail.routeName);
        })
    }
}