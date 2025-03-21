let arr=[1,54,45,89,17,66,6];
let maxEl=arr[0];
for(let i=0;i<arr.length;i++){
    if(maxEl<arr[i]){
        maxEl=arr[i];
    }
}
console.log(maxEl);