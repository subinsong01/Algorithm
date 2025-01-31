function solution(n) {
    //pizza 7조각으로 잘라줌 
    //나눠먹을 사람의 수 n 
    
    let pizza = 7;
    return Math.ceil( n / pizza )
}