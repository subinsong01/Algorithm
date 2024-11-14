function solution(people, limit) {
    var answer = 0;
    let sum = 0;
    
    people.sort((a, b) => a - b); 
    
    let left = 0;         
    let right = people.length - 1; //0부터 시작
    
    while (left <= right) {

        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
        answer++;
    }
    
    return answer;
}
