function solution(n, words) {
    var answer = [0, 0];
    let seen = new Set(); 
    seen.add(words[0]);

    let turn = 1;
    
    for (let i = 1; i < words.length; i++) {
        let current = words[i];
        let prev = words[i - 1]; 

        if (i % n === 0) {
            turn++;
        }

        if (seen.has(current) || prev[prev.length - 1] !== current[0]) {
            let player = (i % n) + 1; 
            return [player, turn];
        }
        seen.add(current);
    }

    return answer;
}
