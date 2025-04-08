function solution(numbers) {
    var answer = '';
    
    answer = numbers.sort((a, b) => {
        return (b + '' + a) - (a + '' + b); 
    }).join('');

    return answer[0] === '0' ? '0' : answer;
}
