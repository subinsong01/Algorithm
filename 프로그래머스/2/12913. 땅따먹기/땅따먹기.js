function solution(land) {
    let maxScore = 0; 
    const n = land.length;

    let currentScores = [...land[0]];

    for (let i = 1; i < n; i++) {
        const tempScores = [0, 0, 0, 0]; 
        
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                if (j !== k) { 
                    tempScores[j] = Math.max(tempScores[j], currentScores[k] + land[i][j]);
                }
            }
        }

        currentScores = [...tempScores];
    }

    maxScore = Math.max(...currentScores);

    return maxScore;
}
