const fs = require('fs').promises;

const data = "Hello Friend";
const callback = function(err){
    if(err){
        console.log(err);
    }
    console.log("callback is called");
}

fs.writeFile('./test.txt', data, callback);