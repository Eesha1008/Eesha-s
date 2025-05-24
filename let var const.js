//  let studentName="hello world";
//  console.log(studentName);
//  studentName=20
//  console.log(studentName);
//  studentName=10.5
// console.log(studentName);

// const className="hello world";
// console.log(className);
// className=20
// console.log(className);
// className=10.5
// console.log(className);

// let a,b,result;
//   let a= Number.parseInt (prompt("enter distance in kg"));
//   b= Number.parseInt (prompt ("enter 2nd number"));
//  result=a+b;for(let i = 0; i < 5; i++) {
//      console.log('Eesha')
// }
// console.log ( "sum of two number =" +result);
// result=a-b;
// console.log ( "subtraction of two number =" +result);
// result=a*b;
// console.log ( "multiplication of two number =" +result);
// result=a**b;
// console.log ( "power of two number =" +result);
// result=a/b;
// console.log ( "division of two number =" +result);
// result=a%b;
// console.log ( "remainder of two number =" +result);
// result=++a;
// console.log ( "increment of two number =" +result);
// result=--b;
// console.log ( "decrement of two number =" +result);

// *true false*
//  console.log(a==b)
//  console.log(a===b)
//  console.log(a<=b)
//  console.log(a>=b)
//  console.log(a!=b)
//  console.log(a<b)
//  console.log(a>b)
//  console.log(a)


// *find the distance from kilometer to meter*
// let distance=Number.parseInt(prompt("plz enter a distance in kmh"));
// console.log("distance in meters:"+(distance*=1000));


// *value swipe ki hai a aur b ki*
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("value of a is"+a)
// console.log("value of b is"+b)


// functions

function showValue(a,b){
    let sum=a+b
    return sum;
 }
 function square(c)
 {
  let sq=c*c;
  return sq;
 }
// let x=Number.parseInt(prompt("enter a number"));
// console.log(showValue(x));

// let x=Number.parseInt(prompt("enter a number"));
// let y=showValue(x);
// console.log(y);

let x=Number.parseInt(prompt("enter a number"));
let y=Number.parseInt(prompt("enter 2nd number"));
let tempt=showValue(x,y);
let tempt2=square(temp);
console.log("square of sum ="+temp2)