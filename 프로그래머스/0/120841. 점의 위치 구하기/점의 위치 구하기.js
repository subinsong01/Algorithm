function solution(dot) {
    var answer = 0;
    
    if(dot[0] > 0 && dot[1] > 0){
        return 1
    }else if(dot[0] < 0 && dot[1] > 0){
             return 2
    } else if(dot[0] > 0 && dot[1] < 0){
        return 4
    }else{
        return 3
    }
}