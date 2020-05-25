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

    map: function(c = [], callback = () => {}, acc) {
        let coll = c.slice(0)
        if (!acc){
          acc = coll[0]
          coll = coll.slice(1)
        }
        let len = coll.length;
        for (let i =0; i < len; i++) {
          acc = callback(acc, coll[i], coll)
        }
        return acc    

    },

    reduce: function(acc, val, coll) {
        return total + val
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
