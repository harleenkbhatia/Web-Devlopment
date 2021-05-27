const fs = require("fs");
// function callback(err, data){
//     if(err){
//         console.log("unable to run the code.");
//     }
//     else
//         console.log(data);
// }
// fs.readFile("abc.txt", "utf-8", callback);
// console.log("hello");

// setTimeout is asynchronous

// function callback(){
//     console.log("hello");
// }
// setTimeout(callback, 2000);
// setTimeout(callback, 3000);
// setTimeout(callback, 5000);
// console.log("start");

// //or=========================================================

// function callback(val){
//     console.log(val);
// }
// setTimeout(function(){
//     callback("hello")
// }, 2000);
// console.log("start");

// //Q==========================================

// let cond  = true;
// setTimeout(function(){
//     cond = false;
// }, 3000);
// while(cond)
//     console.log("hello");
// ans == infinite hello

// //Q=========================================
// let count = 1;
// function readfile(filename){
//     if(filename == undefined){
//         filename = (count-1) + ".txt";
//     }
//     fs.readFile(filename, "utf-8", writefile);
// }
// function writefile(err, data){
//     let lines = data.split("\r\n");
//     if(lines.length > 1){
//         lines = lines.splice(1);
//         let writeData = lines.join("\r\n");
//         fs.writeFile(count + ".txt", "utf-8", readfile);
//         count += 1;
//     }
// }
// readfile("abc.txt");

// //Q================================================

// let a = true;
// setInterval(() => {
//     if(a) console.log("hello");
// }, 2000);

// setTimeout(() => {
//     a = false;
// }, 10100);

// //Q=========================================================

// function myFilter(my_array, callback){
//     //Enter your code here
//     let arr = [];
//    for(let ele of my_array) {
//        if(callback(ele)) {
//            arr.push(ele);
//        }
//    }
//     return arr;
  
  
  
// }

// function callback(element) {
//     return element % 2 == 0;
// }

// function processData(inputArray) {
//     //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
//     console.log(myFilter(inputArray, callback));   
// }

//Q=====================================================
//serially
// let n = process.argv[2];
// let fileNumber = 1;
// function createfile() {
//     if(fileNumber > n) {
//         return;
//     }
//     let numberOfLines = Math.floor(Math.random() * 101);
//     let arr = [];
//     for(let i = 0; i < numberOfLines; i++) {
//         arr.push(Math.floor(Math.random() * 101));
//     }
//     let writeData = arr.join("\r\n");
//     fs.writeFile(fileNumber + ".txt", writeData, createfile);
//     console.log("You just create file number", fileNumber);
//     fileNumber += 1;
// }
// createfile();

//parallely

let n = process.argv[2];
let fileNumber = 1;
// function printFilenumber(fileNumber) {
//     console.log("You just create file number", fileNumber);
// }
function createfile(fileNo) {
    
    let numberOfLines = Math.floor(Math.random() * 101);
    let arr = [];
    for(let i = 0; i < numberOfLines; i++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    let writeData = arr.join("\r\n");
    fs.writeFile(fileNo + ".txt", writeData, function(){
        //printFilenumber(fileNo);
    });
    function addition(){
        let a = 0;
        for(let i = 0; i<arr.length; i++) {
            a += arr[i];
        }
        console.log(a);
    }
    fs.readFile(fileNo + ".txt", "utf-8",addition);
    
}
for(let i = 0; i < n; i++){
    createfile(fileNumber);
    fileNumber += 1;
}


