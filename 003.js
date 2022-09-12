// function hello(x){
//     const a= "varA";
//     const b="varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();


// function myfuction(power){
//     return function(number){
//         return number**power;
//     }
// }

// const cube = myfuction(3);
// const ans =cube(6);
// console.log(ans);


// const myFunc = func();
// myFunc();
// myFunc();

//  const myFunc2 = func();
//  myFunc2();
//  myFunc2();

//  console.log("anurag")

function func(){
     let counter=0;
    return function(){
        if(counter<1){
            console.log("hi you called me");
            counter++;
        }else{
            console.log("mai already ek bar call ho ckuha hoo!");
        }
    }
}
const myFunc =func();
myFunc();
myFunc();
myFunc();