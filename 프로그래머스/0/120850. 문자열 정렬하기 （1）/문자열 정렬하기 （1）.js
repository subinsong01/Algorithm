function solution(my_string) {
    var answer = my_string.split('').filter(ch => !isNaN(ch) && ch !== ' ').map(Number); 

    return answer.sort((a, b) => a - b);
}
