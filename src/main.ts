import { HomePage } from "./page/HomePage.js";

const root = document.getElementById("root") as HTMLElement;

console.log(root);

if(!root) {
    throw new Error("Root not exist")
}

function init() {
    const homePage = new HomePage();
    homePage.mount(root); // <HomePage/>
    // homePage.mount(root); // <HomePage/>
    // homePage.mount(root); // <HomePage/>
    // homePage.mount(root); // <HomePage/>
    // homePage.mount(root); // <HomePage/>
}

init();

// reusbale components kaise banarte hai
// useState
// useEffect
// react-router (assignment)