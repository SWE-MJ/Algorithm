const maxSlidingWindow = (nums, k) => {
    const deque = []
    const res = []

    for(let i=0;i<nums.length;i++) {
        while(deque.length && deque[deque.length-1] < nums[i]) {
            dequeue.pop()
        }

        deque.push(nums[i])

        const j = i+1-k
        if(j>=0) {
            res.push(deque[0])
            if(nums[j] === deque[0]) deque.shift()
        }
    }
    return res
}