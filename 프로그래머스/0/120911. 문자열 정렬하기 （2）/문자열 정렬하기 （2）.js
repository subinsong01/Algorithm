function solution(my_string) {
    let sort_my_string = my_string.toLowerCase().split('');
    sort_my_string.sort((a, b) => a.localeCompare(b));

    let answer = sort_my_string.join('');
    
    return answer;
}
