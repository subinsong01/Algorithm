function solution(d, budget) {
    
    d.sort((a, b) => a - b); //작은순으로 정렬 

    let sum = 0;
    let answer = 0;

    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        
        if (sum <= budget) {
            answer++; 
        } else {
            break; 
        }
    }

    return answer;
}