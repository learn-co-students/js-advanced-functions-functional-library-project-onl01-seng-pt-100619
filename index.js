const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = collection instanceof Array ? collection : Object.values(collection)
      for(let i=0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let newValues = []
      let newCollection = collection instanceof Array ? collection : Object.values(collection)
      for(let i=0; i < newCollection.length; i++) {
        newValues.push(callback(newCollection[i]))
      }
      return newValues
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection instanceof Array ? collection : Object.values(collection)
      let i;
      if(acc) {
        i = 0
      }else {
        i = 1 
        acc = newCollection[0]
      }

      for(i; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
      }
      return acc
    },

    find: function(collection, predicate) {
      let newCollection = collection instanceof Array ? collection : Object.values(collection)
      for(let i=0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) {
          return newCollection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let newCollection = collection instanceof Array ? collection : Object.values(collection)
      let newArray = []
      for(let i=0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) {
          newArray.push(newCollection[i])
        }
      }
      return newArray
    },

    size: function(collection) {
      let newCollection = collection instanceof Array ? collection : Object.values(collection)
      let i;
      for(i = 0; i < newCollection.length; i++) {
        newCollection[i]
      }
      return i
    },

    first: function(collection, n) {
      let newArray = []
      if(n) {
        for(let i = 0; i < n; i++) {
          newArray.push(collection[i])
        }
      }else { return collection[0] }
      return newArray
    },

    last: function(array, num=1) {
      let result = array.slice(num * -1)
      if(result.length > 1){
        return result
      } else {
        return result[0]
      }
    },
  
    compact: function(array) {
      let newArray = []
      for(let i = 0; i < array.length; i++) {
        if(array[i]) {
        newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = array.slice()

       return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
     },

     flatten: function(array, shallow){
      if (shallow){
        return array.flat()
      } else {
        return array.flat(Infinity)
      }
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()


fi.libraryMethod()
