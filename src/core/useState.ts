// ✅ UseState
// Tuple 
// const [count, setCount] = useState<number>(0); // <- closure
// count --> constant variable hai
// setCount(count+1)->variable or setCount((prev)=>prev+1) -> function
// component rerender 
// 1. unmount --> mount
// 2. ki component ko replace kardo
// useState<number>(0);

import { Component } from "./Component.js";

// T --> number
export function useState<T>(initialValue:T, component:Component){
    const owner = component;
    let outerValue = initialValue;
    const getter = () => {
        return outerValue;
    }
    // count+1
    const setter = (newVal: T) => {
        outerValue = newVal;
        owner.rerender();
    }

    const hook:any = [getter, setter];
    hook.get = getter;
    hook.set = setter;
    return hook;
}