function solution(before, after) {
    beforeSorted = before.split('').sort((a, b) => a.localeCompare(b)).join('');
    afterSorted = after.split('').sort((a, b) => a.localeCompare(b)).join('');
    
    return beforeSorted === afterSorted ? 1 : 0
}

