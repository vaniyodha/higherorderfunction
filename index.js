//Higher-order functions are functions that take other functions as arguments or return functions as their results.
//Any function that is passed as an argument is called a callback function.
//main advantages of using higher order functions when we can is composition.
// we can create small piece of functions to remove bugs
const values=[22,33,44,55,66];
// these are the array values we have taken
//by using higher operator we can ealisy solve dual or more functions at a time

// division
/*
//Division
const div = (values) => {
//const = variable declaration//div = variablename //values=parameter
  let res = [];
  //res will call the function
// entered to loop 
  for (let i = 0; i < values.length; i++) {
    res.push(values[i]/11);
    //push will returns the new length // i % 11 is a operation 
  }
  return res;
  // return statement will stop executing the function
}
// for result
console.log(div(values));
*/
// alternative ways are 
const number = (values,fun) => {
    const result = [];
    for (let i = 0; i < values.length; i++) {
        // function invocation
      result.push(fun(values[i]));
    }
    return result;
  }
  // for division 
  const divi =(input)=>input/11;
  const  division =number(values,divi);
  console.log(division)

  // for multiplication
  const mul = (keypoint)=>keypoint*2;
  const multiplication =number(values,mul);
  console.log(multiplication);

  // for addition
  const add =(elements)=>elements+100;
  const addition=number(values,add);
  console.log(addition);
  
  // for subtraction
  const sub =(data)=>data-2;
  const subtraction = number(values,sub);
  console.log(subtraction);
  
  // for module
  const mod=(memory)=>memory%5;
  const module = number (values,mod);
  console.log(module);

  // for exponential
  const exp=(da)=> da**2
  const exponential = number (values,exp);
  console.log(exponential);
  
  //print greater value above 11
  const gre = (valu)=> valu > 11;
  const greater = number (values,gre);
  console.log(greater);

// logical operator
const not = (base)=>!base;
const notope=number(values,not);
console.log(notope);

// const arvalues= [2,3,4,5,6]
// const add2 = (basepoint)=>values&&arvalues;
//   const andoperator = add2
//   console.log(andoperator);