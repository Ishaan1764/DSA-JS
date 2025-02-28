// let age= Number(prompt("Enter your age"));
// if(age<18){
//     alert("you Cannot Vote!!");
// }else{
//     alert("vote your party!!!");
// }

//! Electricity Bill
/**
 * upto 100[UNITS] -> 4.2
 * 101-200  ->  6
 * 201-300  ->  8
 * more than 400 -> 13.2
 * HOw to calculate?
 * if 12 units consumed-> 100 *4.2 + 20 * 6=> 540.
 */

let units= Number(prompt("ENter your Electricity bill!!: "));
let ammount=0;
console.log(ammount)

if(units>400){
    ammount=(units-400)*13;
    units=400;
}
if(units>200 && units<=400){
    ammount+=(units-200)*8;
    units=200;
}
if(units>100 && units<=200){
    ammount+=(units-100)*6;
    units=100;
}
ammount+=(units)*4;
console.log(ammount);