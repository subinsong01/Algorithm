function solution(n, k) {
    var answer = 0;
    //10인분 먹으면 = 음료수 하나 서비스
    //양꼬치 1인분 = 12,000원 : n
    //음료수 1개 = 2000원 : k

    
    answer = (n * 12000) + (k * 2000) -  (Math.floor(n / 10) * 2000)
    
    return answer;
}