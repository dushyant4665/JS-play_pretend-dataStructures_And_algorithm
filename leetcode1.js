// Write a function createHelloWorld.
// It should return a new function that always returns "Hello World".

// solution


const hel=createHelloWorld=()=>{             //creating a constant hel and assigning a function createHelloWorld
              
  return function() {                      //This function being returned
  return 'Hello World';                // The returned function will always return the Hello World
  };
  };