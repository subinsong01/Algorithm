function solution(ingredient) {   
    let result = 0
    let hamburger = []
    
    for(let i = 0; i<ingredient.length; i++) {
        hamburger.push(ingredient[i])
        if(canMakeHamburger(hamburger)){
            hamburger.pop()
            hamburger.pop()
            hamburger.pop()
            hamburger.pop()
            result += 1
        }
    }
    return result
}
 
function canMakeHamburger(hamburger){
    const firstBread = hamburger.at(-4) === 1
    const vegetable = hamburger.at(-3) === 2
    const meat = hamburger.at(-2) === 3
    const lastBread = hamburger.at(-1) === 1
    return  firstBread && vegetable  && meat && lastBread
}
