// Given an integer array arr and a mapping function fn, 
// return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.


function Atma(arr, fn){      //here creating a function atma take 2 parameter the arr is aaray and fn is function 
                            
    const rtrnArr=[]          // this is returned aarray that will takes the value of new arr which got after applying fn function on arr
    
        for(let i=0; i<arr.length; i++){   //using for loop to make chnages in arr 
          rtrnArr[i] = fn(arr[i], i)       // applying loop on elements of arr array 
        }    
        return rtrnArr                 //and return that after apply fn function on arr 
    }