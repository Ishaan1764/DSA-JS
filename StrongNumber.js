let va= prompt("Kiske Factors chheye??")

if(va===null){
    console.log("cancelled")
}else{
    let n= Number(va);
    let savedN=n;
    if(isNaN(n)){
        console.log("invalid Input");
    }else{
        if(n>0){
            let strngNumb=0;
            while(n>0){
                let rem=n%10;
                strngNumb=strngNumb+fact(rem);
                console.log(strngNumb)
                n=Math.floor(n/10);

            }
            if(savedN===strngNumb){
                console.log(`${savedN} is a Strong number`);
            }else{
                console.log(`${savedN} is not a Strong number`)
            }
        }
    }
}

function fact(num){
    if (num === 0 || num === 1) return 1;
    let fact=1
    for(i=2;i<=num;i++){
        fact=fact*i;   
    }
    return fact;
}