// swap 2 variabkes in 3 different ways.

//1: With using a third variable

function swap1(num1,num2){
    let swapVar=num1;
    num1=num2;
    num2=swapVar;
    return [num1,num2];
}

//2: Without using a third variable.
function swap2(num1,num2){
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;

    return [num1,num2]
}

//3. by Destructuring
function swap3(num1,num2){
    [num1,num2]=[num2,num1]  // Right num2-> left num1 and Right num1-> left num2
    return [num1,num2]
}

let num1=10;
let num2=20;

console.log(`Before Swaping num1: ${num1} |  num2: ${num2} `);
[num1,num2]=swap2(num1,num2);
console.log(`After Swaping num1: ${num1} |  num2: ${num2} `);

