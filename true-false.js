// false condition 
// when number is 0 ;
// when string was empty "" ;
// when anything undefined ;
// when defined null ;
// when defined NaN ;
// when right false ; [not on string] ;
// true condition ;
// when define Truthy ;
// when define "0" , " " , []

let name = 'false';
if(name || name == 0){
    console.log("condition is true.")
}
else{
    console.log("condition is false.")
}