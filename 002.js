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

const  lastName = "Mundra";
const printName = function(){
    const firstName ="Anurag";
    console.log(firstName);
    console.log(lastName);

}

printName();






















