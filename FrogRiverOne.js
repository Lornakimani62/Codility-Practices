function FrogRiverOne(X,A){
    //Find consecutive number leading up to X
    //Return index of X
    uniqueValues = new Set()

    for(i=0;i<A.length;i++){
        uniqueValues.add(A[i])

        if (uniqueValues.size == X){
            console.log(i)
            return i
        }
    }
    console.log("-1")
    return -1
}

FrogRiverOne(5,[1,2,3,4,5,6])