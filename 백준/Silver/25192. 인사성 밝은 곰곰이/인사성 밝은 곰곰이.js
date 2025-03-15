let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//곰곰티콘이 사용된 횟수
//Enter = 새로운 사람이 채팅방에 입장했음을 나타낸다
//그 외는 채팅을 입력한 유저의 닉넴임을 나타낸다(대소문자 구분)
//새로운 사람은 무조건 = 곰곰티콘으로 인사 ~ 

let N = Number(input[0]); //채팅방의 기록 수
let count = 0;
let user = new Set();

for(let i = 1; i<=N; i++){
    let nickname = input[i];
    
    if(nickname === 'ENTER'){
        user.clear();
    }else{
        if(!user.has(nickname)){
            user.add(nickname);
            count++
        }
    }
}
console.log(count);