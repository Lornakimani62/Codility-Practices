function ArrayDifference(a,b){

let difference = a.filter(x => !b.includes(x))
 console.log(difference)
 return difference
}

ArrayDifference([1,2,3],[1,2])