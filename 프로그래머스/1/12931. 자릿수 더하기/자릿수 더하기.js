function solution(n)
{
    var answer = 0;

    for(const digit of n.toString()){
        answer += Number(digit)
    }
    return answer 
}