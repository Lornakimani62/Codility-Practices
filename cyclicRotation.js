function cyclicRotation(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
        // if A is meant to be shifted by its own length (K) then just return the array
        if (A.length === K || K === 0) {
            return A
        }
        const sliceIndex = A.length - K;
        return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]

}

cyclicRotation([1, 2, 3, 4], 4)