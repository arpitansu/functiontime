

async function functiontime(fn){
    console.time(fn.name+" time");
    await fn(); // will stop execution until function gets completed
    console.timeEnd(fn.name+" time");
}


module.exports = functiontime;