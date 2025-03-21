let randomNumb=Math.floor(Math.random()*100)+1; // 1-100.
console.log(randomNumb);
let guess=-1
while(guess!==randomNumb){
    guess=Number(prompt("Guess the Number: "))
    console.log(guess)
    if(isNaN(guess)|| guess<1 || guess>100){
        console.log("Try again");
        continue
    }
    if(guess>randomNumb){
        console.log("Too High")
    }else if(guess<randomNumb){
        console.log("TO Loww")
    }else{
        alert("Congoooooo!!!!")
    }
};

