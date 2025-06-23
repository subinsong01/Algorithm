function solution(numbers, direction) {    
    if(direction == 'right'){
        const lastNumber = numbers.pop();
        numbers.unshift(lastNumber);
    }else if(direction == 'left'){
        const firstNumber = numbers.shift();
        numbers.push(firstNumber);        
    }
    return numbers;
}