//Given an array A of N integers
// print each element in reverse order as a single line of space-separated integers.

function reverseArray(a) {
    let c = a.length
    let ab = []
    for (let i = c - 1; i >= 0; i--) {
        ab.push(a[i])
    }
    
    return ab
}
