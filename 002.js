//  *****************function execution context*****************

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName,lastName){
//     console.log(arquments);
//     let myvar="var isnide func";
//     console.log(myvar);
//     const fullName= firstName+" "+lastName;
//     return fullName;
// }



// const  personName = getFullName("anurag","Mundra");
// console.log(personName);


//  ********************lexical environment, scope chain;********

// const  lastName = "Mundra";
// const printName = function(){
//     const firstName ="Anurag";
//     console.log(firstName);
//     console.log(lastName);

// }

// printName();

// ***************closure 
//  ***********closure : 30-40%;
// ******************analyse : 70-80%;
// *******************real example : 100%;


// *********************function can return function***********************
//  function outerFunction(){
//     function innerFunction(){
//         console.log("hello world!");
//     }
//     return innerFunction;
//  }

//  const ans= outerFunction();
//  console.log(ans);


function printFullName(firstName,lastName){
    function printName(){
        console.log("hello world!");
    }
    return innerFunction;
 }

 const ans= printFullName("Anurag","Mundra");
 console.log(ans);























