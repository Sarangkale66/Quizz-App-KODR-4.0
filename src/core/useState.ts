import { Component } from "./Component.js";

type StateGetter<T> =()=> T
type StateSetter<T> = (newValue: (T|((prev:T)=>T))) => void;

type StateHook<T> = [StateGetter<T>, StateSetter<T>] & {
    get: StateGetter<T>
    set: StateSetter<T>
}
        //  getter, setter
// const [count, setCount] = useState<number>(0);
// setCount(0) or setCount((prev)=> { return prev+ 1 })


export function useState<T>(initialValue: T, component?:Component): StateHook<T> {
    const owner = component;
    if(!owner) {
        throw new Error("[useState] no component context found")
    }
    // closer
    let state = initialValue; // 0
    const getter: StateGetter<T> = ()=> state;
    const setter: StateSetter<T> = (newValue)=> {
       const nextValue = typeof newValue === "function" ? 
                        (newValue as (prev:T)=> T)(state) : newValue; 
        // 0
        if(state !== nextValue){
            state = nextValue;
            owner.rerender();
        }
    }

    const hook = [getter, setter] as StateHook<T>;
    hook.get = getter;
    hook.set = setter;
    return hook;
}