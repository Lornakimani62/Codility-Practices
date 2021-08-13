function TapeEquilibrium(A){
 SideA = 0
 SideB = A.reduce((a,b) => a+b)
 answer = null

for(i=0;i<A.length - 1;i++){
    SideA += A[i]
    SideB -= A[i]

    diff = Math.abs(SideA - SideB)

    if(answer == null || answer > diff){
        answer = diff
    }
}
 console.log(answer)
 return answer
}
TapeEquilibrium([1,2,3])