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

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},

    functions: function() {

    },


  }
})()

f

fi.libraryMethod()
