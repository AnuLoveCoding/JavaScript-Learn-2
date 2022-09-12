// function hello(x){
//     const a= "varA";
//     const b="varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();


function myfuction(power){
    return function(number){
        return number**power;
    }
}

const cube = myfuction(3);
const ans =cube(6);
console.log(ans);