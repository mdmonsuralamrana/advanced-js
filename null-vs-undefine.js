// ..............undefine output problems............

let pakhi ;
console.log(pakhi);

function add(num1 , num2){
    console.log(num1 + num2);
}
const result = add(12 , 17);
console.log(result);
// [ekhane return kora hoy ni . ];

function add(num1 , num2){
    console.log(num1 + num2);
    return ;
}
const result =add(12, 17);
console.log(result);

function add(num1 , num2){
    console.log (num1 + num2);
}
const result = add(14);
console.log(result);
// undefined num2 ;

const premik = {Name:'Alia Vat' , hobby :' Movie Actress'}
console.log(premik.bf);
// undefined property on object ;

let fun = undefined ;
console.log(fun);
// defined undefined variable ;

let ages = [11, 15, 17];
console.log(ages[9]);
// undefined 9th element ;

