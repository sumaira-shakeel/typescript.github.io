// //---------------what is functions---------------------//
// function calculation(){
//     let  total = 2+3+4;
//     console.log(total);
// }
// calculation();
//--------------------return in functions----------------//
// function personName(){
//     let name = "sumaira";
//     return name;
// }
//  let result = personName();
//  console.log(result);
 // what happen when i call the functiob twice a time//
//  function halfFryEgg(egg:number=3,butter:number=2.5,salt:number=2){
//     let cooked = egg+butter+salt;
//     return cooked;
//  }
//  let show = halfFryEgg();//here is halfFryEgg is a  call refrance.
//  console.log(show);
// function in practice
function halfFryEgg():number
{
    let coocked = 1+1.5+2;
    return coocked;
}
let response = halfFryEgg();
console.log(response)