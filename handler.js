'use strict';


module.exports.hello = async (event) => {

  const uuid = require('uuid');

  const addition=function(a,b){
    console.log(a+b)
    return a+b;
  }
  const subtraction=function(a,b){
    console.log(a-b)
    return a-b;
  }
  const multiplication=function(a,b){
    console.log(a*b)
    return a*b;
  }
  const division=function(a,b){
    console.log(a/b)
    
    if (a>b){
      return a/b
      
    }
    else{
      return b/a
    }
    
  }
  let arr=["addition","subtraction","multiplication","division"]
  let answer=10000;

  
  let{ a } = event.pathParameters;
  let {b}=event.pathParameters;

  
  let unique_id=uuid.v1()
  let operation=arr[Math.floor(Math.random() * arr.length)]
  
  
  switch(operation){
    case "addition":
      answer=addition(a,b);
      break;
    case "subtraction":
      answer=subtraction(a,b);
   
      break;
    case "multiplication":
      answer=multiplication(a,b);

      break;
    case "division":
      answer=division(a,b);
    
      break;
  }
  

  let output_json={
    unique_id_number:unique_id,
    value_1: a,
    value_2:b,
    operation_done:operation,
    operation_value:answer

  }
  
  const fs = require('fs')
      
  // Data which will write in a file.
  let data = JSON.stringify(output_json)
    
  // Write data in 'Output.txt' .
  fs.writeFile('json_output.txt', data, (err) => {
        
      // In case of a error throw err.
      if (err) throw err;
  })


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'operation done',
        input: output_json
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
