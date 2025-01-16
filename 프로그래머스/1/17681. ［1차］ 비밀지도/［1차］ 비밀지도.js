function getBinary(num, length) {
    let binary = num.toString(2); // 숫자를 이진수로 변환
    let pad = '0'.repeat(length - binary.length); // 부족한 자릿수를 0으로 채움
    //getBinary(5, 3) → "101" (5를 3자리 이진수로 변환)
    //getBinary(1, 5) → "00001" (1을 5자리 이진수로 변환)
    return pad + binary
}

function solution(n, arr1, arr2) {
    arr1 = arr1.map(ele => getBinary(ele, n));
    arr2 = arr2.map(ele => getBinary(ele, n));
    
    let map = arr1.reduce((acc, cur, idx) => {
        let temp = '';

        for(let i = 0; i < n; i++) {
            if (cur[i] === '1' || arr2[idx][i] === '1' ) temp += '#'
            else temp += ' '
        } 
        
        acc.push(temp)
        
        return acc
    }, [])
    
    return map
}