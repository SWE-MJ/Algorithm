
//Sorting
//TC: O(NlogN) SC:O(N) N: Length of the points
const kClosest = (points, K) => {
    points.sort((a,b) => {
        return (Math.pow(a[0],2) + Math.pow(a[1],2)) - (Math.pow(b[0],2) + Math.pow(b[1],2))
    })
    return points.slice(0, K)
}

//QuickSelect
//TC: avg O(N), the worst O(N^2)   SC: O(N)