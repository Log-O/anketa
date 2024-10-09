const arr=[ 5, 7,
    [ 4, [2], 8, [1,3], 2 ],
    [ 9, [] ],
    1, 8 ]

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




