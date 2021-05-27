const fs = require("fs");
// let promise = new Promise(function(resolve,reject) {
//     if(fs.existsSync("8.txt")) {
//         console.log("hello");
//         resolve();
//     } else {
//         reject("file doesn't exist");
//     }
// });

// function abc (val){
//     console.log(val);
// }

// function error (err) {
//     console.log(err);
// }
// console.log(promise);
// promise.then(abc).catch(error)

// promise.then(function(val){
//     console.log(val + " new callback");
// })

// promise.then(function(val){
//     console.log(val);
// })
// function callback(data) {
//     console.log("2nd file read");
// }
// let readfile = fs.promises.readFile("1.txt","utf-8");
// readfile.then(function(data){
//     console.log(data);
//     fs.readFile("2.txt","utf-8",callback);
//     console.log("hello");
// }).catch(function(err){
//     console.log(err);
// });

// readfile.then(function(data) {
//     console.log(data);
// })

// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("promise1 completed");
//     },2000)
// })

// let promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("promise2 completed");
//     },2000)
// })
// console.log(promise1,promise2);
// promise2.then(function(data){
//     console.log("promise part 2")
//     throw new Error("error");
// }).catch(function(data) {
//     console.log("error occured");
//     return ("hello");
// })
// promise1.then(function(data){
//     console.log(data);
// })

// promise2.then(function(data){
//     console.log(data);
// })



// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .then(function(data) {
//     if (data != 'victory') {
//         return 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('We are all going to die');
//     }, 2000);
// });

// promise.then(function success(data) {
//     console.log(data + ' 1');
// }).catch( function error(data) {
//     console.error(data + ' 1');
// });

// promise.then(function success(data) {
//     console.log(data + ' 2');
// }).catch(function error(data) {
//     console.error(data + ' 2');
// });

// promise.then(function success(data) {
//     console.log(data + ' 3');
// }).catch(function error(data) {
//     console.error(data + ' 3');
// });







// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });

// promise.then(function success(data) {
//     console.log(data);
// });

// let promise1 = fs.promises.readFile("1.txt","utf-8").then(function(data){
//     console.log("first file reading completed");
// });

// let promise2 = fs.promises.readFile("2.txt","utf-8").then(function(data){
//     console.log("second file reading completed");
// });

// let promise3 = fs.promises.readFile("3.txt","utf-8").then(function(data){
//     console.log("third file reading completed");
// });
// let promise4 = fs.promises.readFile("4.txt","utf-8").then(function(data){
//     console.log("fourth file reading completed");
// });
// let promise5 = fs.promises.readFile("5.txt","utf-8").then(function(data){
//     console.log("fifth file reading completed");
// });
// let promise6 = fs.promises.readFile("6.txt","utf-8").then(function(data){
//     console.log("sixth file reading completed");
// });
// let promise7 = fs.promises.readFile("7.txt","utf-8").then(function(data){
//     console.log("seventh file reading completed");
// });
// let promise8 = fs.promises.readFile("8.txt","utf-8").then(function(data){
//     console.log("eighth file reading completed");
// });

// Promise.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then(function(data){
//     console.log("Reading all file completed");
// })

// Promise.race([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then(function(data){
//     console.log("Reading one file completed");
// })


// function delay(time) {
//     return new Promise(function(resolve) {
//         setTimeout(function(){
//             resolve('success ' + time);
//         }, time );
//     });
// }

// Promise.race([delay(500), delay(100)]).then(function(data) {
//     console.log(data);
// });

//  https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises
let data = process.argv[2];
function job(data) {
    return new Promise(function(resolve, reject){
        if(isNaN(data)){
            reject("error");
        }else if(data % 2 != 0) {
            setTimeout(function(){
                resolve("odd");
            },1000);
        }
        else{
            setTimeout(function(){
                reject("even");
            },2000);
        }
    });
}
job(data);
// Chat Messages
// default user avatar
// 044 Jaskeerat Singh
// 01:26:23
// function job(){ return new Promise (function ( resolver, reject ){reject();});}let promise = job();catchthenthen
// default user avatar
// Bhavesh Bansal
// 02:06:55
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-time-to-pratice-with-promises
// default user avatar
// Bhavesh Bansal
// 02:07:20
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises
// default user avatar
// Bhavesh Bansal
// 02:07:36
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/chaining-the-promises
// default user avatar
// Bhavesh Bansal
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/some-pratice
// default user avatar
// Bhavesh Bansal
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/quick-quiz
// default user avatar
// Bhavesh Bansal
// 'https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge

//function delay(time) {
    //     return new Promise(function(resolve) {
    //         setTimeout(function(){
    //             resolve('success ' + time);
    //         }, time );
    //     });
    // }
    
    // Promise.race([delay(500), delay(100)]).then(function(data) {
    //     console.log(data);
    // });
    // let n = 8;
    // let fileCompleted = 0;
    // let sum = 0;
    // function callback(err,data) {
    //     fileCompleted += 1;
    //     let lines = data.split("\r\n");
    //     for(line of lines) {
    //         sum += parseInt(line);
    //     }
    //     if(fileCompleted == n) {
    //         console.log(sum);
    //     }
    // }
    // function readfile(filename) {
    //     fs.readFile(filename,"utf-8",callback);
    // }
    
    // for(let i = 1; i <= n; i++ ) {
    //     readfile(i + ".txt");
    // }
    
    
    // async function print() {
    //     console.log("hello");
    //     return "hello";
    // }
    
    // print().then(function(data){
    //     console.log(data);
    // })
    
    // async function read(){
    //     let data = await fs.promises.readFile("1.txt","utf-8");
        
    //     console.log("hello");
    //     setTimeout(() => {
    //         console.log("timeout");
    //     }, 1000);
    //     console.log("hello");
    //     console.log("hello");
    //     console.log("hello");
    //     console.log("hello");
    // }
    // read();
    
    // function wait(time) {
    //     return new Promise(function(resolve,reject){
    //         setTimeout(() => {
    //           resolve();  
    //         }, time);
    //     })
    // }
    
    // async function print() {
    //     console.log("timer started");
    //     for(let i = 1; i <= 10; i++) {
    //         await wait(1000);
    //         console.log(i);
    //     }
        
    // }
    
    // print();
    
    // async function job() {
    //     throw undefined;
    // }
    
    // async function main() {
    //     try{
    //     await job();
    //     console.log("success 1");
    //     console.log("success 2");
    //     console.log("success 3");
    //     } catch(err) {
    //         console.log('Error 1');
    //     }
    //     console.log('Success 4');
    // }
    
    // async function main() {
        
    // }
    
    // main();
    // let count = 0;
    // async function job(state) {
    //     if(state) {
    //         count += 1;
    //         return "success" + count;
    //     } else {
    //         throw "error";
    //     }
    // }
    
    // async function main() {
    //     let data;
    //     try{
    //         try{
    //             data = await job(true);
    //             console.log(data);
    //             data = await job(true);
    //         } catch(err) {
    //             data = undefined;
    //             console.log(err);
    //             console.log("Error caught");
    //         }
    //         if(data) {
    //             console.log(data);
    //         }
    //         await job(true);
            
    //     } catch(err) {
    //         console.log(err);
    //     } 
    // }
    
    // main();