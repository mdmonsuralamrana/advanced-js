const numbers = [2, 3, 4, 5, 6, 7];
// const output = []

// for(let i = 0 ; i< numbers.length ; i++){
//     const element = numbers[i] ;
//     const square = element * element ;
//     output.push(square);
// }
// console.log(output);

// function square (element){
//     return element * element ;
// }

// const square = element => element * element ;
// const square = x => x * x ;

// const result = numbers.map(x => x * x);

// const result = numbers.map(function(element){
//     return element * element ;
// })

// console.log(result);

// const bigger = numbers.filter(x => x >5)
// console.log(bigger);

const finder = numbers.find(x => x > 5);
console.log(finder);