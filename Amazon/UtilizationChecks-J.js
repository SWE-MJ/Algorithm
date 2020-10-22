const LIMIT = 2*Math.pow(10,8)
const utilizationChecks = (instances, averageUtil) => {
  if(!averageUtil.length)
    return 0

  for(let i=0;i<averageUtil.length;i++) {
    let util = averageUtil[i]
    if(util < 25) {
      if(i !== 0 && instances > 1) {
        instances = Math.ceil(instances) / 2
        i = i + 10
      }
    }
    let doubledInstances = instances * 2
    if(util > 60 && doubledInstances < LIMIT) {
      instances = doubledInstances
      i = i + 10
    }
  }
  return instances
}

utilizationChecks(2, [25,23,1,2,3,4,5,6,7,8,9,10,76,80])
