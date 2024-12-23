// var hello = function(arr,fn){
//     var arr = [1,2,3]
//     var newarr = hey.map((fn)=>{

//     })

// }


function map(arr, fn) {
    const returnedArray = []; 
    
    for (let i = 0; i < arr.length; i++) {
      returnedArray.push(fn(arr[i], i));
    }

    return returnedArray; 
  }