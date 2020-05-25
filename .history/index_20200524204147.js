const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, iteration) {
      const newColl = (coll instanceof Array) ? coll.slice() : Object.values(coll)
    
    for (let i = 0; i < newColl.length; i++)
      iteration(newColl[i])
      return coll 

    },

    map: function(coll, iteration) {
      if (!(coll instanceof Array))
      coll = Object.values(coll)
      const newColl = []
      for (let i = 0; i < coll.length; i++)
      newColl.push(iteration(coll[i]))

      return newColl

    },

    reduce: function(acc, val, coll) {
        return total + val
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
