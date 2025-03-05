function solution(numbers) {
    numbers.sort((a, b) => a - b); 
    
    const option1 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    const option2 = numbers[0] * numbers[1];
    
    return Math.max(option1, option2);
}
