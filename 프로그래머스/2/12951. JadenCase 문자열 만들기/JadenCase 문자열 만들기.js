function solution(s) {
    
    let words = s.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

       
        if (word.length > 0) {
            let ans = word[0].toUpperCase() + word.slice(1).toLowerCase();
            result.push(ans);
        } else {
            result.push(word);
        }
    }
    
    return result.join(" ");
}
