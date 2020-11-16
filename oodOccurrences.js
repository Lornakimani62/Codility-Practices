function oddOccurrencies(A) {
    var sortedArr = A.slice().sort();
    var nonDuplicateArray = [];
    for (var i = 0; i < sortedArr.length; i++){
    if (nonDuplicateArray.length <= 0){
        nonDuplicateArray.push(sortedArr[i])
    }else{
        for (var j=0; j<nonDuplicateArray.length; j++){
            if(nonDuplicateArray[j] === sortedArr[i]){
                nonDuplicateArray.pop(sortedArr[i])
            }else{
                nonDuplicateArray.push(sortedArr[i])
            }
            
        }

    }


    }
    nonDuplicate = nonDuplicateArray[0];
    return nonDuplicate;

}

oddOccurrencies([9, 3, 9, 3, 9, 7, 9])