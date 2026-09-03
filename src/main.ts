import { HomePage } from "./page/HomePage.js";

const root = document.querySelector("#root") as HTMLDivElement;

if(!root) {
    throw new Error("root element doesn't exists")
}

function init() {
    const hp = new HomePage();
    hp.mount(root);
}

init();
