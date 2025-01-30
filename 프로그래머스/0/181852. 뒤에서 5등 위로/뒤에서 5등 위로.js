function solution(num_list) {
    num_list.sort((a, b) => a - b);  

    var answer = num_list.slice(5);

    return answer;
}