let arr=[1,2,3,4,5,6,7,8,9];

let start=0, end=arr.length-1;

while(start!==end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    // [arr[start],arr[end]]=[arr[end],arr[start]]
    start++;
    end--;
}
console.log(arr)