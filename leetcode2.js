// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n){
    let counter = n;
    return function(){
     return counter++;
    }
 }
 let lalu = createCounter()
 
 lalu();
 lalu();
 lalu();