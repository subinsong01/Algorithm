function solution(topping) {
    let mine = new Set();
    let brother = new Map();
    
    for(let t of topping){
        brother.set(t, (brother.get(t) || 0) + 1);
    }
    let answer = 0;
    
    for(let i = 0; i < topping.length; i++){
        const t = topping[i];
        
        mine.add(t);
        
        brother.set(t, brother.get(t)-1);
        if(brother.get(t) === 0){
            brother.delete(t);
        }
        
        if(mine.size === brother.size){
            answer ++;
        }
    }
    
    
    return answer;
}