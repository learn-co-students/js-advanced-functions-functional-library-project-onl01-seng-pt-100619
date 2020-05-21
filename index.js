
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },


    each: function(collection, func) {
      let dataSet = (collection instanceof Array) ? collection : Object.values(collection)

        for(let i = 0; i < dataSet.length; i++) {
          func(dataSet[i])
        };
      return collection
    },


    map: function(collection, func) {
      let dataSet = (collection instanceof Array) ? collection : Object.values(collection)
      let newCollection = []

        for(let i = 0; i < dataSet.length; i++) {
          newCollection.push(func(dataSet[i]))
        }
      return newCollection
    },


    reduce: function(collection, func, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for(let i = 0; i < collection.length; i++) {
        acc = func(acc, collection[i], collection)
      }
      return acc
    },


    find: function(collection, test) {
      let dataSet = (collection instanceof Array) ? collection : Object.values(collection)

      for(let i = 0; i < dataSet.length; i++) {
          if (test(dataSet[i])) return dataSet[i]
      }
      return undefined
    },

    filter: function(collection, test) {
      let passingValues = []

      for(let i = 0; i < collection.length; i++) {
          if (test(collection[i])) passingValues.push(collection[i])
      }

      return passingValues
    },

    size: function(collection) {
      let dataSet = (collection instanceof Array) ? collection : Object.values(collection)
      return dataSet.length
    },

    first: function(array, n) {
      if (!n) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      return (!n) ?  array[array.length-1] : array.slice(array.length - n, array.length)
    },


    compact: function(array) {
      let newArray = []
      for(let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },


    sortBy: function(collection, func) {
      let newCollection = [...collection]
      return newCollection.sort(function(a,b) {
        return func(a) - func(b)
      })
    },


    flatten: function(array, bool, newArray) {
      // create new array if newArray is empty
      if (!newArray){newArray = []}
      
      if(bool) {
        return newArray.concat.apply(newArray, array)
      }
     
      //iterate array, if element is num push into new array/ if element is array recurse
      for(let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          this.flatten(array[i], bool, newArray)
        } else {
          newArray.push(array[i])
        }
      }
      //return new array
      return newArray
    },


    uniq: function(arr) {
      return [... new Set(arr)]
    },


    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      let array = []
      for(let key in object){
        if (typeof object[key] === "function"){
          array.push(object[key])
        }
      }
      return array
    },

  }
})()

fi.libraryMethod()
