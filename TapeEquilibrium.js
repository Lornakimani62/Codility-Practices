function TapeEquilibrium(A){
    //Divide the array into two Parts
    SideA = A[0]
    //Get the sum of the elements in Side B
    SideB = A.reduce(function(a, b) { return a + b; }, 0) - SideA
    //Get the absolute difference between side A and side B
    Sum = Math.abs(SideA - SideB)
    for(i=1;i<A.length-1;i++){
        SideA += A[i]
        SideB -= A[i]

        tempSum = Math.abs(SideA - SideB)
        if(tempSum < Sum){
            Sum = tempSum
        }
    }
    return Sum
}
TapeEquilibrium([3,1,2,4,3])