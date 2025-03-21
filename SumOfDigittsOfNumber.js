let va= prompt("Kiske Factors chheye??")

if(va===null){
    console.log("cancelled")
}else{
    let n= Number(va);
    if(isNaN(n)){
        console.log("invalid Input");
    }else{
        if(n>0){
            let sum=0;
            while(n>0){
                let rem= n%10;
                sum=sum+rem;
                n=Math.floor(n/10);
            }
            console.log(sum);
        }
    }
}