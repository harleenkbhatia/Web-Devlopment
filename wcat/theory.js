const fs = require("fs");
// var flatten = require('flat')
 
// flatten({
//     key1: {
//         keyA: 'valueI'
//     },
//     key2: {
//         keyB: 'valueII'
//     },
//     key3: { a: { b: { c: 2 } } }
// })
// let data = fs.readFileSync("abc.txt", "utf-8");
// console.log(data);
// //fs.writeFileSync("bc.txt", "hello");
// fs.writeFileSync("xyz.txt", "hhhh");
// console.log(fs.existsSync("xyz.txt"));
//console.log(process.argv);
let filename = process.argv[2];
function lengthFile() {
    let data  = fs.readFileSync(filename,"utf-8");
    let len = 0;
    let lines = data.split("\r\n");
    for(let i = 0; i < lines.length; i++){
        for(let j = 0; j < lines[i].length; j++){
            if(lines[i][j] == "n"){
                len++;
            }
        }
    }
    console.log(len);
}
lengthFile();