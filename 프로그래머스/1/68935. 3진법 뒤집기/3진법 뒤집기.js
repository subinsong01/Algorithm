function solution(n) {
    var answer = 0;
    let changeN = n.toString(3) 
    
    let reversed = changeN.split('').reverse().join('');
    
    return answer = parseInt(reversed, 3); 

}