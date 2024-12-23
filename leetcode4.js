// Write a function createCounter.
// It should accept an initial integer init. 
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter=function(init){            // creating a function createCounter in var varible
    let f =init                        // declaring a variable f and initialing it with init (the starting value)
    return {                             // return an object with three methods: increment, decrement, and reset
        increment:()=>++f,          //for increment ++f but does not update f
        decrement: ()=>--f,          //for decrement --f but does not update f
        reset:()=>f=init                   //for reset method the current value of f (which is not modified modified)
    };
}

var he =createCounter(6)

he();
he();
he();  