var kClosest = function(points, K) {
    quickSelect(points, K, 0, points.length - 1)
    return points.slice(0, K)
};

function quickSelect(points, K, low, high) {
    if (low >= high) {
        return
    }
    
    const partPoint = partition(points, low, high)
    console.log(partPoint);
    if (partPoint === K - 1) {
        return
    }
    if (partPoint < K - 1) {
        quickSelect(points, K, partPoint + 1, high)
    } else {
        quickSelect(points, K, low, partPoint - 1)
    }
}

function partition(points, low, high) {

    const pivot = points[high]
    let i = low
    let j = low
    
    while (i < high) {
        if (getDist(points[i]) < getDist(pivot)) {
            swap(points, i, j)
            j++
        }
        i++
    }
    swap(points, high, j)
    return j
}

function getDist(point) {
    return point[0] * point[0] + point[1] * point[1]
}

function swap(arr, i, j) {
    const temp = arr[i] 
    arr[i] = arr[j]
    arr[j] = temp
}

kClosest([[3,3],[5,-1],[-2,4],[7,8],[6,5]], 2);
