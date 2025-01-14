function solution(N, stages) {
    const answer = [];

    let allPerson = stages.length;
    for(let i = 1; i<=N; i++){
      const notClearPerson = stages.filter(el=>el===i).length;
        answer.push({ stage:i, fail:notClearPerson/allPerson,});
        allPerson -= notClearPerson;
    }
    

   return answer.sort((a,b)=>b.fail - a.fail).map(el=>el.stage);
}