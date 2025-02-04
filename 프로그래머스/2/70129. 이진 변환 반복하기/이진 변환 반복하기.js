function solution(s) {
    let count = 0; 
    let zeroCount = 0;  

    while (s !== "1") {
        let removedZeroArr = s.split('').filter(char => char !== '0');  
        zeroCount += s.length - removedZeroArr.length; 

        s = removedZeroArr.length.toString(2);  
        count++; 
    }

    return [count, zeroCount];
}
