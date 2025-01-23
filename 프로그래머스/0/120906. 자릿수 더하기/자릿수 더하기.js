function solution(n) {
    var answer = 0;
    
    let sumNumbers = n.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0); 
    return sumNumbers
}