const smallestNegativeBalance = (transactions) => {
    let map = {}
    let res = []
  
    for(let i=0;i<transactions.length;i++){
      let borrower = transactions[i][0]
      let lender = transactions[i][1]
      let amount = parseInt(transactions[i][2])
  
      map[borrower] = map[borrower] ? map[borrower] - amount : -amount
      map[lender] = map[lender] ? map[lender] + amount : amount
    }
  
    let min = Math.min(...Object.values(map))
    if(min>=0)
      return "Nobody has a negative balance"
  
    for(let group in map) {
      if(map[group] === min)
        res.push(group)
    }
    
    return res
  }
  
  
  smallestNegativeBalance([
    ["Alex", "Blake", "2"],
    ["Blake", "Alex", "2"],
    ["Casey", "Alex", "5"],
    ["Blake", "Casey", "7"],
    ["Alex", "Blake", "4"],
    ["Alex", "Casey", "4"]
  ])
  
  
  // smallestNegativeBalance([
  //   ['Alex', 'Blake', 1],
  //     ['Blake', 'Alex', 3],
  //     ['Casey', 'Alex', 5],
  //     ['Blake', 'Casey', 9],
  //     ['Alex', 'Blake', 2],
  //     ['Alex', 'Casey', 5],
  //     ['Casey', 'Blake', 7],
  //     ['Casey', 'Blake', 2],
  // ])
  