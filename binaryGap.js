// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function binaryGap(N) {
    //Covert the number into a binary representation
    binaryN = N.toString(2)
    //Store the index of each one that has been encountered
    startPointIndex = []
    BinaryGapValues = []
    //Check if 1 appears more than once in the binary
    for(var i=NumberofAPppearance=0; i<binaryN.length; NumberofAPppearance+=+("1"===binaryN[i++]));
    //Check if 0 appears anywhere
    for(var i=Appearance=0; i<binaryN.length; Appearance+=+("0"===binaryN[i++]));
    if (NumberofAPppearance <= 1){
        return 0
    }else if (Appearance < 1){
        return 0
    }else{
    for(let i = 0; i <= binaryN.length; i++){
        if (binaryN.charAt(i) === "1"){
            startPointIndex.push(i)
        }
    }
    for(let i = 0; i <= startPointIndex.length-2; i++){
        BinaryGap = parseInt(startPointIndex[i+1]) - parseInt(startPointIndex[i]) - 1
        BinaryGapValues.push(BinaryGap)        
    }
    MaxBinaryGap = Math.max(...BinaryGapValues)
    console.log(MaxBinaryGap)
    return MaxBinaryGap
}
}

binaryGap(32)