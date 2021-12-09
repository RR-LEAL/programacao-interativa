//Exercício 1
console.log(!true);

console.log(!false);

console.log(!!false);

console.log(!!true);

console.log(!1);

console.log(!!1);

console.log(!0);

console.log(!!0);

console.log(!!"");

let x = 5 ;;
let y = 9;
console.log(x < 10 && x!==5);
console.log(x>9 || x===5);
console.log(!(x===y));


//Exercício 2
let m = 10
let n ="a"
console.log(n==="b" || m >= 10);

let z=3
let v=8
console.log(!(z == "3" || z === v) && !(v !== 8 && z <= v));

let str = ""
let msg = "haha!"
let eBonito = "false"
console.log(!((str || msg) && eBonito));
