const arr

function treeSum(arr) {
let sum=0;
for (let i=0; i<arr.length; i++) { 
    const item=arr[i];
    if (typeof(item)==="number") {
        sum+=item;
    }
    else {
        sum+=treeSum(item);
    }
}
return sum;
}




