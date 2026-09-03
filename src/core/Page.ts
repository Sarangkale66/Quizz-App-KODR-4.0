// Component -- Page (onPageReady) -- Homepage (multiLevel)

import { Component } from "./Component.js";

export abstract class Page extends Component {

   onMount(): void {
      this.onPageReady();
   }

   onUnmount(): void {
   }

   onPageReady () {
      // iss function me sirf js likhi jayegi
   }
}