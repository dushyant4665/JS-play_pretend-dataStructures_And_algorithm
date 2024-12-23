

// create an array with 8 student names, after that crete 
// a function which takes 2 parameters(allStudents & studentName), 
// iterate over all students and find that specific user 'studentName'


const allStudent=['vedant','siddharth','lokesh','dushyant','ayush','nehar','vijay','saquib']

// var findStudent =(allStudent,studentName)=>{
//     for(let i=0; i<allStudent.length; i++){
//         if(allStudent[i]===studentName){
//             console.log(`found ${studentName} at ${[i]}`)
//         }
//         else{
//             // console.log('')
//         }
// }}

// findStudent(allStudent,'aditya');


var findStudent=(allStudent,studentName)=>{
    let found=false;
    for(let i=0; i<allStudent.length; i++){
    if(allStudent[i]===studentName){
    console.log(`found ${studentName}`)
    found=true;
    break;}
     
    }
    if(!found){
    console.log(`Not found ${studentName}`) 
    }
}

findStudent(allStudent,'siddharth');