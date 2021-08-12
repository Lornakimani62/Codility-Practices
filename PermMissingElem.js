function PermMissingElements(A) {
    //Get the length of the Array
    arrayLength = A.length
    //Sum of natural numbers fomular is = n * (n+1)/2 add plus one for the missing element
    //Sum of natural numbers plus missing element = (n+1) * (n+2)/2
    sum = (arrayLength+1) * (arrayLength+2)/2

    for(i=0;i<arrayLength;i++){
        sum -= A[i]
    }
    console.log(sum)
    return sum

}

PermMissingElements([1,3,5,2])
