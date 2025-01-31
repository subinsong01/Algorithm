function solution(n) {
    let pizza = 6;
    
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    return lcm(pizza, n) / pizza;
}
