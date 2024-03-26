def solution(players, callings):
    answer = []
    runnerDict = {}
    for i,name in enumerate(players):
        runnerDict[name] = i

    for name in callings:
        idx = runnerDict[name]
        
        postRunner = players[idx-1]
        
        runnerDict[postRunner]+=1
        runnerDict[name] -= 1
        

        players[idx] = postRunner
        players[idx-1] = name
        
    answer = sorted(runnerDict.keys(), key=lambda x:runnerDict[x])
    return answer

        