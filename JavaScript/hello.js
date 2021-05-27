// let is reassignable but not redeclarable

// let  a = 10;
// a = 20;
// console.log(a);

// let a  =10;
// let a  = 20;
// console.log(a);

// var is reassigable and redeclarable

// var a  = 10;
// a = 20;
// console.log(a);

// var a  = 10;
// var a  = 20;
// console.log(a);

// const is not reassignable and redeclarable

// const a  = 10;
// a = 20;
// console.log(a);

// const a = 10;
// const a = 20;
// console.log(a);

// function temp(){
//     {
//         let a  =10;
//         const c = 30;
//         var b = 20;
//         console.log(a);
//     }
//     // console.log(a);
//     // console.log(c);
// }
// temp();
// object creation

// let a = {
//     "fruit": "apple",
//     "vegetable": "onion",
//     "ride": "bicycle",
//     2 : "hello"
// }

// console.log(a.fruit, a["vegetable"], a[2]);

//let a = [40,50,88,1];
let a = [10,20,40,1,33,88,3,5];
let b = new Array(10,20,40);

a= a.concat(b);

a.sort(function(a,b) {
    //console.log(a,b);
    return a-b;
});
console.log(a);
a.sort(function(a,b) {
    if(a > b) return 1;
    else if(a == b) return 0;
    else return -1;
});
console.log(a)


// let c = new Array(10);

// c[2]=1;

// console.log(a, b, c);
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);
// console.log(a[a.length - 1]);
// console.log(b[-1]);
// console.log(c);

// a.push(40);
// console.log(a);
// a.pop();
// console.log(c["-1"]);

// console.log(Array.isArray(d));

// let f = [];
// f["a"] = 1;
// f["b"] = 2;
// console.log(f[0]);
// console.log(d.constructor.toString().indexOf("Array"));

// console.log(a instanceof Array);

// console.log(typeof(a.toString()));

// delete a[1];
// a.splice(0,3);
// a = a.concat(b);
// console.log(a.concat(b));
// console.log(a.sort());
// console.log(a.reverse())
// let arr = [1,2,3,4];
// arr["hello"] = "How are you?";
// arr[4] = 5;
// console.log(arr);
