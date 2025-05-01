function solution(i, j, k) {
    let count = 0;
    const targetNum = String(k);
    
    for(let num = i; num <= j; num++){
        const str = String(num);
        for(let char of str){
            if(char === targetNum){
                count++
            }
        }
    }
    return count;
}