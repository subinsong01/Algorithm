function solution(lottos, win_nums) {
    
    const zeros = lottos.filter(num => num === 0).length;

    const matches = lottos.filter(num => win_nums.includes(num)).length;

    const rank = [6, 6, 5, 4, 3, 2, 1];

    const maxRank = rank[matches + zeros];
    const minRank = rank[matches];

    return [maxRank, minRank];
}
