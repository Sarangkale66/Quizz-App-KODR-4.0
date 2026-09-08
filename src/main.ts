import { AppLayout } from "./layout/App.layout.js";

const root = document.querySelector("#root") as HTMLDivElement;

if(!root) {
    throw new Error("root element doesn't exists")
}

function init() {
    const appLayout = new AppLayout();
    appLayout.mount(root);
}

init();