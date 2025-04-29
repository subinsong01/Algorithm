function solution(order) {
    var answer = 0;
    let count = 0;
    order = order.toString().split('').map(Number);
    for(let i = 0; i < order.length; i++){
        if(order[i] === 3 || order[i] === 6 || order[i] === 9){
            count ++;
        }
    }
    return count;
}