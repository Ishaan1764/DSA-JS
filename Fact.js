//Factorial :

let num= Number(prompt("Enter A number: "));

if(isNaN(num)){
    console.log("!!Invalid Input!!");
}else{
    if(num>0){
        let fact=1;
        for(let i=1;i<=num;i++){
            fact*=i;
        }
        console.log(`Factorial of ${num} is ${fact}`)
    }else{
        console.log("Enter number greater than 0")
    }
}