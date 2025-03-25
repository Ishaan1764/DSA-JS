let arr=[4,55,44,79,66,56,66,1,2,88,6]

let maxEle=Math.max(arr[0],arr[1]);
let secondMaxEle=Math.min(arr[0],arr[1]);

for(let i=2;i<arr.length;i++){
    if(arr[i]>maxEle){
        secondMaxEle=maxEle;
        maxEle=arr[i];
    }else if(arr[i]>secondMaxEle && arr[i]!== maxEle){
        secondMaxEle=arr[i]
    }
}
console.log(secondMaxEle)