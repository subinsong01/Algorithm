function solution(sides) {
    var answer = 0;
    
    answer = sides.sort();
    for(let i = 0 ; i < answer.length; i++){
        if(answer[0] + answer[1] > answer[2]){
            return 1
        }else{
            return 2
        }
    }
}