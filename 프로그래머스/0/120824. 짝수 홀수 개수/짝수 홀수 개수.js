function solution(num_list) {
    var answer = [];
    let n = 0, k = 0;

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0){
            n += 1
        } else{
            k += 1
        }
    }
    answer = [n, k]
    return answer
}