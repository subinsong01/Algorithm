//길이 N인 수열 S가 있다
//수열 S에서 원하는 위치에 있는 수를 골라 최대 K번 삭제 가능
//수열 S에서 최대 K번 원소를 삭제한 수열에서 찍수로 이루어져 있는 연속한 부분 수열 중 
//가장 긴 길이를 구해보자

let file = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N,K]  = file[0].split(" ").map(Number);
let arr = file[1].split(" ").map(Number);

let right = 0, left = 0;
let oddCount = 0;
let maxLen = 0

while( right < N ){
    if(arr[right] % 2 == 1){
        oddCount ++;
    }
    
    while(oddCount > K){
        if(arr[left]%2 == 1){
            oddCount --;
        }
        left ++;
    }
    maxLen = Math.max(maxLen, right-left+1-oddCount);
    right++
    
}
console.log(maxLen);
