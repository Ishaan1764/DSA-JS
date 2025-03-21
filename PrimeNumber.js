let va= prompt("Kiske Factors chheye??")

if(va===null){
    console.log("cancelled")
}else{
    let n= Number(va);
    if(isNaN(n)){
        console.log("invalid Input");
    }else{
        if(n>0){
            console.log(isPrime(n))
        }
    }
}

function isPrime(n){
    if(n<=1) return false;
    if(n===2) return true;
    if(n%2==0) return false;
    for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
        if(n%i==0) return false
    }
    return true
}