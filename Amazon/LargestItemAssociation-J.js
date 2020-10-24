function itemAssociation(associations) {
    let graph = {}
  
    //push all association
    for(let [u,v] of associations) {
      if(graph[u] == undefined) graph[u] = []
      if(graph[v] == undefined) graph[v] = []
      graph[u].push(v)
      graph[v].push(u)
    }
  
    console.log(graph)
    let visited = new Set()
    let output = []
    for(let key of Object.keys(graph)) {
      let res = []
      if(!visited.has(key)) {
        dfs(key,res)
        res.sort()
        if(!output.length) output.push(res)
        else if(res.length > output[0].length) output[0] = res
        else if (res.length == output[0].length) {
          let compare = res[0].localeCompare(output[0][0])
          if(compare == -1) output[0] = res
        }
      }
    }
    //console.log('output',output)
    return output
  
    function dfs(key,res) {
      if(!visited.has(key)){
        visited.add(key)
        res.push(key)
        for(let nei of graph[key]) {
          if(visited.has(nei)) continue
          dfs(nei,res)
        }
      }
      return res
    }
  }
  
  itemAssociation([['Item1', 'Item2'], ['Item3', 'Item4'], ['Item4', 'Item5']])
  //itemAssociation([['Item1', 'Item2'], ['Item2', 'Item3'], ['Item5', 'Item6']])
  //itemAssociation([['Item1', 'Item2'], ['Item2', 'Item3'], ['Item4', 'Item5'], ['Item5', 'Item6']])