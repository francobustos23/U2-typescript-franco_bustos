function identity<T>(arg: T): T {
    return arg
}

let num = identity<number>(42);
let str = identity<string>("oli :)");
let bool = identity<boolean>(true);