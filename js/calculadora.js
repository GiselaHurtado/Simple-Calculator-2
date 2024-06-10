
export function calculator(num1, num2, operator) {

    if (isNaN(num1) || isNaN(num2)){
        console.log('not a number');
        return 'unknown value'
    }
    
    let total;
    if (operator === '+') total = num1 + num2
    if (operator === '-') total = num1 - num2
    if (operator === '*') total = num1 * num2
    if (operator === '/') total = num1 / num2

    return total
    
}