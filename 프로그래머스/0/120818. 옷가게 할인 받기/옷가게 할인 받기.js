function solution(price) {
    let discount = 0;

    if (price >= 500000) {
        discount = 0.20; 
    } else if (price >= 300000) {
        discount = 0.10; 
    } else if (price >= 100000) {
        discount = 0.05; 
    }

    let finalPrice = price - (price * discount);
  
    return Math.floor(finalPrice);
}
