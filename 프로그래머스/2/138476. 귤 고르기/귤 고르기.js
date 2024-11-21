function solution(k, tangerine) {
    let countMap = {}; 

    for (let size of tangerine) {
        if (countMap[size]) {
            countMap[size] += 1; //이미 있으면 증가시키고
        } else {
            countMap[size] = 1;//없으면 1로 초기화 
        }
    }

    const counts = Object.values(countMap).sort((a, b) => b - a);//내림차순 

    let total = 0;
    let answer = 0;
    for (let count of counts) {
        total += count; 
        answer++; 
        if (total >= k)
            break; 
    }

    return answer; 
}

