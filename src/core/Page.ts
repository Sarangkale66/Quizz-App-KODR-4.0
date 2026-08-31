import { Component } from "./Component.js";

export abstract class Page extends Component{
    protected _childCompoent: Component[] = [];

    abstract registerComponent(): Component[];
}