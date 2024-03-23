import inquirer from "inquirer";

const answer: {
    numberOne:number,
    numberTwo:number,
    operator:string} = await inquirer.prompt([
    {
type:"number",
name:"numberOne",
message:"Enter first number:"
},
{
    type:"number",
    name:"numberTwo",
    message:"Enter second number:"
    },
    {
        type:"list",
        name:"operator",
        choices:["ADD","SUBTRACT","MULTIPLY","DIVIDE","MODULUS","EXPNONENT"],
        message:"select operator:"
    },
]);

const {numberOne , numberTwo , operator} = answer;
if(numberOne && numberTwo && operator){}
    let result : number = 0;
    if(operator === "+"){
        result = numberOne + numberTwo;
    } else 
        if(operator === "-"){
            result = numberOne - numberTwo;
}
if(operator === "*"){
    result = numberOne * numberTwo;
}
if(operator === "/"){
    result = numberOne / numberTwo;
}
if(operator === "**"){
    result = numberOne ** numberTwo;
}
if(operator === "%"){
    result = numberOne  % numberTwo;
} else{
    console.log("enter valid input")
}
console.log("your result is: ", result)


