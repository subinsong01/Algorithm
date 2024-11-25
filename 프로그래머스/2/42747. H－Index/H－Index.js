function solution(citations) {
    let n = citations.length; 
    
    citations.sort((a, b) => a - b); //오름차순 정리
    
    for (let i = 0; i < n; i++) {
        let h = n - i;
        if (citations[i] >= h) {
            return h;
        }
    }
    return 0;
}
