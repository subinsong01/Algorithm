function solution(my_string) {
    const answer = [...new Set(my_string)].join('')
    //Set이 배열로 반환하니깐 join으로 합쳐주기
    return answer;
}