function solution(s) {
    const upperCase = [];
    const lowerCase = [];

    for (let char of s) {
        if (char >= 'A' && char <= 'Z') {
            upperCase.push(char);
        } else {
            lowerCase.push(char);
        }
    }

    upperCase.sort((a, b) => b.localeCompare(a));
    lowerCase.sort((a, b) => b.localeCompare(a));

    return lowerCase.join('') + upperCase.join('');
}
