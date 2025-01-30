function solution(want, number, discount) {
    var answer = 0;
    //10일 동안 회원 자격 부여
    //회원을 대상으로 매일 한 가지 제품을 할인하는 행사
    //할인하는 제품은 하루에 하나씩만 구매 가능
    
    //ex) 바나나(3) > 사과(2) > 쌀(2) > 돼지고기 (2)> 냄비(1)
    //const wants = want.filter(want => want !== discount)
    if (!want.some(item => discount.includes(item))) return 0;
    
    let wantMap = new Map(); //want랑 number을 key-value 저장하는 객체 메서드
    
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]); // 값 추가 (set)
    }

    for (let i = 0; i <= discount.length - 10; i++) {
        let discountMap = new Map();

        // 10일 동안 할인되는 제품 개수 카운팅
        for (let j = i; j < i + 10; j++) {
            discountMap.set(discount[j], (discountMap.get(discount[j]) || 0) + 1);
        }
        
        let isValid = true;
        for (let [product, count] of wantMap) {
            if (discountMap.get(product) !== count) {
                isValid = false;
                break;
            }
        }

        if (isValid) answer++;
    }
    
    return answer;
}