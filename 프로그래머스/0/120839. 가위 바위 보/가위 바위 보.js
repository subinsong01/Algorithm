function solution(rsp) {
    return rsp.split('').map(num => {
        if (num === '2') return '0'; 
        if (num === '0') return '5';
        if (num === '5') return '2'; 
    }).join('');
}

