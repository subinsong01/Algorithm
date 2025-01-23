function solution(x) {
    var answer = true;
    
    let total = x.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    if( x % total == 0){
        return answer 
    }else{
        return answer= false
    }
}
     
   