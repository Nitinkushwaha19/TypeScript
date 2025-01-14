let x: number = 1;
x = 19;
console.log(x);

function fn(str: string){
    console.log(str);
}

fn("Hello World!")

// return strict
function sum(a: number, b: number): number {
    return a+b;
}

console.log(sum(5,5));

function isLegal(age:number): boolean {
    if( age >= 18){
        return true;
    } else {
        return false;
    }
}

console.log("Eligible : " + isLegal(19));

// callback function
function runAfter( fn : ()=> void){
    setTimeout(fn,1000);
}

runAfter(function () {
    console.log("hello there!");
});

// Assign objects to function using interface 
interface User {
    firstName : string,
    lastName : string,
    age : number
} 

function isValid ( user : User) : boolean {
    if( user.age >= 18){
        return true;
    } else {
        return false;
    }
}

let check = isValid ({
    firstName: "nitin",
    lastName : "kushwaha",
    age : 21
})

console.log(check);


type direction = "up" | "down" | "right" | "left";

function doSomething(keyPressed : direction){
    // do something 
}

//  enums 
enum directions {
    up = "up", // 0
    down = "down", // 1
    right = "right", // 2
    left = "left"// 3
}


function doSomethings(keyPressed : directions){
    // do something 
}

doSomethings(directions.up);
console.log(directions.down);

// Generics 
function getFirstElement<T> (arr: T[]) : T {
    return arr[0];
}

const el1 = getFirstElement(["nitin", "aanchal"]);
console.log(el1.toUpperCase());

const el2 = getFirstElement([1,3,4,5]);
console.log(el2);