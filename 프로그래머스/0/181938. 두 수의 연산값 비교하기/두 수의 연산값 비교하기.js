function solution(a, b) {
    var answer = 0;
    
    let cal1 = Number(String(a) + String(b))
    let cal2 = 2 * a * b
    
    if(cal1 > cal2){
        return cal1
    }else{
        return cal2
    }
}