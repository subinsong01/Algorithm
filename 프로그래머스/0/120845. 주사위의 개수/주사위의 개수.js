function solution(box, n) {
    var answer = 0;

    //box[0] = 상자 가로 길이
    //box[1] = 상자 세로 길이
    //box[2] = 상자 높이 길이
    //n = 주사위 모서리의 길이 정수
    //answer = 상자에 들어갈 수 있는 주사위의 최대 개수를 return
    const widthCount = Math.floor(box[0] / n);
    const heightCount = Math.floor(box[1] / n);
    const depthCount = Math.floor(box[2] / n);

    answer = widthCount * heightCount * depthCount
    
    return answer;
}