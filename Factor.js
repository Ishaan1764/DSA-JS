//WE cannot Deivide a number by a number greater than its half (Perfectly.) 
//Factor: that completely divides.

let va= prompt("Kiske Factors chheye??")

if(va===null){
    console.log("cancelled")
}else{
    let n= Number(va);
    if(isNaN(n)){
        console.log("invalid Input");
    }else{
        if(n>0){
            for(let i=1;i<=Math.floor(n/2);i++){
                if(n%i===0){
                    console.log(`${i} is a Factor of ${n}`);
                }
            }
            console.log(`${n} is Factor of itSelf.`)
        }
    }
}

