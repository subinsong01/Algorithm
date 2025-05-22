function solution(a, b, n) {
    let total = 0;

    while (n >= a) {
        let exchange = Math.floor(n / a) * b; 
        total += exchange;
        n = Math.floor(n / a) * b + (n % a); 
    }

    return total;
}
