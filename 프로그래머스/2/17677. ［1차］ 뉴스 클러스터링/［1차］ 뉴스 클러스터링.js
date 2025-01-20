function solution(str1, str2) {
    let firstStr1 = [];
    let secondStr2 = [];
    let answer = 0;

    // str1에서 2글자씩 자르기
    for (let i = 0; i < str1.length - 1; i++) {
        const slice = str1.slice(i, i + 2);

        if (isAlphabet(slice)) {
            firstStr1.push(slice.toLowerCase());
        }
    }

    // str2에서 2글자씩 자르기
    for (let j = 0; j < str2.length - 1; j++) {
        const slice = str2.slice(j, j + 2);

        if (isAlphabet(slice)) {
            secondStr2.push(slice.toLowerCase());
        }
    }

    // 공집합인 경우
    if (firstStr1.length === 0 && secondStr2.length === 0) {
        return 65536; // J(A, B) = 1
    }

    // 교집합과 합집합 계산
    const intersection = [];
    const union = [...firstStr1];

    for (let elem of secondStr2) {
        if (firstStr1.includes(elem)) {
            intersection.push(elem);
            firstStr1.splice(firstStr1.indexOf(elem), 1); // 중복 허용 제거
        } else {
            union.push(elem);
        }
    }

    // 자카드 유사도 계산
    answer = Math.floor((intersection.length / union.length) * 65536);
    return answer;
}

// 알파벳인지 확인하는 함수
function isAlphabet(str) {
    for (let char of str) {
        const code = char.charCodeAt(0);
        if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
            return false;
        }
    }
    return true;
}

