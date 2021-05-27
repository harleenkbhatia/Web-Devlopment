let arr = [1,2,3,4];
arr.map((data,index) => {
    console.log(data, index);
});
arr = arr.map((i) => {
    return i + 2;
});
console.log(arr);
arr1 = arr.filter((data) => {
    if(data % 2 == 0) return true;
    else return false;
});
console.log(arr1, arr);

let a = {
    "pep" : 1,
    "pepcoding" : 2,
    "peppy" : "dog",
    3 : "hello"
} 
console.log(a["pep"], a.pep);
console.log(a[3]);
console.log(Object.keys(a));
console.log(Object.values(a));