import { HomePage } from "./component/HomePage.js";

const root = document.querySelector("#root") as HTMLDivElement;

if(!root) {
    throw new Error("root element doesn't exists")
}

function init() {
    const hp = new HomePage()
    console.log(hp.constructor.name);
    hp.mount(root);
    hp.mount(root);
    hp.mount(root);
    hp.mount(root);
}

init();
