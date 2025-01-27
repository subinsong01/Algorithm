function solution(n) {
    var ans = 0;
    //한 번에 k칸을 앞으로 점프 > K 만큼의 건전지 사용량이 든다
    //(현재까지 온 거리 * 2) 순간이동 > 건전지 안 줄어듬(더 효율적)
    
    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
            ans++;
        }
    }

    return ans;
}
