def solution(arr1, arr2):
    for i in range(len(arr1)): #배열의 행의 개수를 반환
        for j in range(len(arr1[0])): #배열의 열의 개수를 반환
            arr1[i][j]+=arr2[i][j]
            
    return arr1