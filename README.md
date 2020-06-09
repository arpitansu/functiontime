
Step 1: Install the module as dev dependency.

```
npm install functiontime --save-dev
```

Step 2: Require the module.

```
const functiontime = require("functiontime");
```

Step 3: Use the module.

```
function printNo(){
    for(let i = 0 ; i < 10000; i++){
        //logic
    }
}

functiontime(printNo);

//output printNo time: 36.413ms

```
