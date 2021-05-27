#!/usr/bin/env node


const fs = require("fs");
let arguments = process.argv.slice(2);

function wcat(arguments) {
    let options = arguments.filter(function(data,index) {
        return data.startsWith("-");
    });

    let files = arguments.filter(function(data,index){
        return !data.startsWith("-");
    });

    if(files.length == 0) {
        console.log("Please specify a file name.");
        return;
    }

    for(let i = 0; i < files.length; i++) {
        if(!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exist");
            return;
        }
    }
    let numbering = 1;
    for(let i = 0; i< files.length; i++) {
        let data = fs.readFileSync(files[i],"utf-8");
        if(options.includes("-s")) {
            let lines = data.split("\r\n");
            if(options.includes("-w")) {
                if(files.length != 2) {
                    console.log("unable to run this command");
                    return;
                }
                fs.writeFileSync(files[1], "");
            }
            //console.log(lines);
            for(let j = 0; j < lines.length; j++) {
                if(lines[j] != "") {
                    if(options.includes("-w")){
                        let data = fs.readFileSync(files[1]);
                        fs.writeFileSync(files[1], data + lines[j] + "\n")
                    }
                    else{
                        if(options.includes("-n") || options.includes("-b")){
                            console.log(numbering, lines[j]);
                           // console.log(numbering + ". " + lines[j]);
                           numbering++;  
                        }
                        else console.log(lines[j]);
                    }
                }
            }
        }
        if(options.includes("-w")) {
            return;
        } 
        else if((options.includes("-n") && !options.includes("-b")) || ((options.includes("-n") && options.includes("-b")) && (options.indexOf("-n") < options.indexOf("-b")))) {
            let lines = data.split("\r\n");
            for(let j = 0; j < lines.length; j++) {
                //console.log(numbering, lines[j]);
                console.log(numbering + ". " + lines[j]);
                numbering += 1;
            }
        } 
        else if(options.includes("-b")) {
            let lines = data.split("\r\n");
            for(let j = 0; j < lines.length; j++) {
                if(lines[j] != ""){
                //console.log(numbering, lines[j]);
                console.log(numbering + ". " + lines[j]);
                numbering ++;
                } 
                else { 
                    console.log(lines[j]);
                }
            }
        } else if(options.includes("-w")){
            if(files.length != 2 || arguments.indexOf("-w") != 1) {
                console.log("unable to run the comand");
                return;
            }
            let data = fs.readFileSync(files[0], "utf-8");

            fs.writeFileSync(files[1], data);
        } else if(options.includes("-a")){
            if(files.length != 2 || arguments.indexOf("-a") != 1) {
                console.log("unable to run the comand");
                return;
            }
            let data1 = fs.readFileSync(files[0], "utf-8");
            let data2 = fs.readFileSync(files[1], "utf-8");

            fs.writeFileSync(files[1], data2 +"\n"+ data1);
        } else if(options.includes("-w") && options.includes("-s")){
            if(files.length != 2 || arguments.indexOf("-w") != 1) {
                console.log("unable to run the comand");
                return;
            }
            let data = fs.readFileSync(files[0], "utf-8");
            let lines = data.split("\r\n");
            for(let j = 0; j < lines.length; j++) {
                if(lines[j] != "") {
                    var data1 = lines[j];
                    fs.writeFileSync(files[1], data1);
                }
            }
        }
        else {
            console.log(data);
        }
    }
}

wcat(arguments);
//console.log(process.argv.slice(2));
