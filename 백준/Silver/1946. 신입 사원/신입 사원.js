let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]); //테스트 케이스 
let index = 1;
let result = [];

for(let t = 0; t < T; t++){
    let N = parseInt(input[index]); //지원자 수
    let applications = [];
    
    for(let i = index + 1; i <= index + N; i++){
        let [paper, interview] = input[i].split(' ').map(Number);
        applications.push([paper, interview]); //서류, 면접 
    }
    applications.sort((a, b) => a[0] - b[0]);
    
    let firstPerson = 1; //첫번째 지원자는 무조건 선발(서류 1등)
    let bestInterviewRank = applications[0][1]; //첫번째 사람의 면접 순위
   
    for(let i = 1; i < N; i++){
        let interviewRank = applications[i][1];//면접 순위 비교 
        
        if(interviewRank < bestInterviewRank){
            firstPerson++;
            bestInterviewRank = interviewRank;
        }
       }
    result.push(firstPerson);
    index += N + 1;
}
console.log(result.join('\n'));


