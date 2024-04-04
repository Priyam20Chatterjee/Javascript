const prompt = require('prompt-sync')();

function FaultyCalc(num1,num2,operator) {
    let result;
    if (Math.random()<0.1){
        switch (operator){
            case '+':
                result=num1-num2;
                break;

            case '-':
                result=num1/num2;
                break;

            case '/':
                result=num1**num2;
                break
            
            case '*':
                result=num1+num2;
                break;
            
            default:
                result=NaN;
        }
        return result;
    }
   // return FaultyCalc(num1,num2,operator);

   else{
       switch (operator) {
        case '+':
            result=num1+num2;
            break;

        case '-':
            result=num1-num2;
            break;

        case '/':
            result=num1/num2;
            break
        
        case '*':
            result=num1*num2;
            break;
        
        default:
            result=NaN;
       }
       return result;
   }
    //return FaultyCalc(num1,num2,operator);
}

const operator= "+" ;
const num1=parseFloat(prompt("Enter 1st number:"));
const num2=parseFloat(prompt("Enter 2nd number:"));
const result=FaultyCalc(num1,num2,operator);
console.log(result);