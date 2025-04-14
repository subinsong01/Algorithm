function solution(my_string) {
    var answer = [];
    answer  = my_string.split(" ").filter(str => str !== '')
    
    return answer;
}