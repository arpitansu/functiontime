const functiontime = require("./index");


const request = require("request")

function printNo(){
    for(let i = 0 ; i < 10000; i++){
        
    }
    console.log("fn ends")
}
function printNo2(){
    for(let i = 0 ; i < 100000; i++){
        
    }
    console.log("fn ends")
}

function makeReq(){
    return new Promise((res, rej) => {
        request('https://jsonplaceholder.typicode.com/todos/1', (e ,r , b) => {
        console.log(b)
        res(b)
    })
    })
}

functiontime(printNo);
functiontime(printNo2);
functiontime(makeReq);