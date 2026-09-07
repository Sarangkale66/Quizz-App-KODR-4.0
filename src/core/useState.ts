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

type StateGetter<T> = ()=> T
type StateSetter<T> = (newVal:T) => void
type StateHook<T> = [StateGetter<T>, StateSetter<T>] & {
    value: T
    get: StateGetter<T>,
    set: StateSetter<T> 
}

// T --> number
export function useState<T>(initialValue:T, component:Component): StateHook<T>{
    const owner = component;
    let outerValue = initialValue;
    const getter: StateGetter<T> = () => {
        return outerValue;
    }
    // count+1
    const setter: StateSetter<T> = (newVal: T) => {
        outerValue = newVal;
        owner.rerender();
    }

    const hook = [getter, setter] as StateHook<T>;
    hook.get = getter;
    hook.set = setter;
    
    // readonly
    Object.defineProperty(hook, "value", {
        get: getter,
        enumerable: true,
        configurable: true
    })

    return hook;
}