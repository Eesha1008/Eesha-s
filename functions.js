// function showValue(a,b){
//     let sum=a+b;
//     return sum;
//  }
//  function square(c)
//  {
//   let sq=c*c;
//   return sq;
//  }

//   let x=Number.parseInt(prompt("enter first number"));
// let y=Number.parseInt(prompt("enter 2nd number"));
// let temp=showValue(x,y);
// let temp2=square(temp);
// console.log("square of sum ="+temp2)


// *km to m and m to cm using functions*
// function kilo_meter(a){
//     let m=a*1000;
//     return m;
// }
// function meter_centimeter(b){
//     let cm=b*100;
//     return cm;
// }
// let x=Number.parseInt(prompt("enter number in kilometer"));
// let meter=kilo_meter(x);
// let centimeter=meter_centimeter(meter);
// console.log("distance in km to m is =" +meter);
// console.log("distance in m to cm is =" +centimeter);


// *start of string*     
// let string1="hello";
// let string2="world";
// let result=string1+" "+string2;
// console.log(result)



// *lenght of String*
// let string="hello world";
// let length=string.length;
// console.log(length)


// *hello and world on different lines*
// let string="hello \n world"
// console.log(string )
   
// let string="hello \b world"
// console.log(string )
 

// let string="hello \f world"
// console.log(string )


// let string="hello \r world"
// console.log(string )

// let string="hello \t world"
// console.log(string )

// let string="hello \v world"
// console.log(string )


// *slice*
// let text="apple, banana, kiwi";
// let part=text.slice(-10,-6);
// // console.log(text);
// console.log(part);
// console.log(text.length);                                    just to know: index=length-1
  

//    *SUBSTRING*
// let text="apple, banana, kiwi";
// let part=text.substring(7,13);
// console.log(part)

//    *SUBSTR*
// let text="Mehjabeen ullu ";
// let part=text.substr(0,14);
// console.log(part)


// *basic string with content*
// let text="please visit microsoft";
// let newText=text.replace("microsoft", "w3 school");
// console.log(text);
// console.log(newText);

// let text="i love cats. cats are very easy to love. cats are very popular"
// let text1=text.replaceAll("cats","dogs");
// console.log(text) 
// console.log(text1)





// let text1="hello";
// let text2="world";
// let text3= text1.concat("", text2)
// console.log(text3)

let text="  hello world  ";
let text2=text.trim();
console.log(text2)